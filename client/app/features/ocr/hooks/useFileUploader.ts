import { useEffect, useState } from "react";
import { uploadFile } from "../../../lib/uploadFileHelper";
import { appStore, useAppSelector } from "@/app/context/store/redux-store";
import { fileActions } from "@/app/context/slice/file-slice";

export const useFileUploader = () => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [open, setOpen] = useState(false);
  const files = useAppSelector((state) => state.file.files);
  const prompt = useAppSelector((state) => state.file.prompt);

  const setPrompt = (value: string) => {
    appStore.dispatch(fileActions.setPrompt(value));
  };

  const handleErrorMessageDisplay = () => {
    const timer = setTimeout(() => {
      setError(undefined);
    }, 3000);

    () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    if (error) {
      handleErrorMessageDisplay();
    }
  }, [error]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError(undefined);
    if (!files || files.length === 0) {
      setError("No File Attached to Upload");
      return;
    }
    const filesResponsePromise = await files.map(async (file: File) => {
      await uploadFile({
        file: file,
      });
    });
    const filesResponse = await Promise.all(filesResponsePromise)
      .then(() => {
        setOpen(true);
      })
      .catch((error: any) => {
        setError(error.message);
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  const handleReset = (e: any) => {
    setResetLoading(true);
    e.preventDefault();
    appStore.dispatch(fileActions.clear());
    setResetLoading(false);
  };

  return {
    files,
    submit: {
      handleSubmit,
      submitLoading,
    },
    reset: {
      handleReset,
      resetLoading,
    },
    modal: {
      open,
      closeModal: () => setOpen(false),
    },
    prompt: {
      prompt,
      setPrompt,
    },
    error,
  };
};
