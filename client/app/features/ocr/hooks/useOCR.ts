import { useEffect, useState } from "react";
import { uploadBankCheck } from "../../../lib/helpers/imageOCRhelper";
import { appStore, useAppSelector } from "@/app/context/store/redux-store";
import { fileActions } from "@/app/context/slice/file-slice";

export const useOCR = () => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [open, setOpen] = useState(false);
  const file = useAppSelector((state) => state.file.file);

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
    if (!file) {
      setError("No File Attached to Upload");
      return;
    }
    await uploadBankCheck({
      image:file
    })
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
    file,
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
      closeModal: ()=>setOpen(false),
    },
    error,
  };
};
