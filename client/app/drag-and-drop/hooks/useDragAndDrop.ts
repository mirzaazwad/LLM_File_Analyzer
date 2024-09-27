import { useState } from "react";
import { appStore, useAppSelector } from "../../../context/store/redux-store";
import { fileActions } from "../../../context/slice/file-slice";

export const useDragAndDrop = () => {
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileError = useAppSelector((state) => state.file.fileError);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
    setLoading(true);
    appStore.dispatch(fileActions.clear());
  };

  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    setDrag(false);
    setLoading(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    const fileDropped = e.dataTransfer.files[0];
    if (fileDropped) {
      addFile(fileDropped);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const fileInserted = e.target.files?.[0];
    if (fileInserted) {
      addFile(fileInserted);
    }
    setLoading(false);
  };

  const addFile = (e: File) => {
    appStore.dispatch(fileActions.clear());
    const allowedMimeTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png"
    ];
    try {
      if (e) {
        if (allowedMimeTypes.includes(e.type)) {
          appStore.dispatch(fileActions.setFile(e));
        } else {
          throw Error("File is not of the image format: jpg, jpeg, png");
        }
      } else {
        throw Error("The file you entered could not be attached");
      }
    } catch (error: any) {
      appStore.dispatch(fileActions.setFileError(error.message));
    }
  };

  return {
    events: {
      handleChange,
      handleDragOver,
      handleDrop,
      handleDragOut,
    },
    state: {
      drag,
      loading,
    },
    error: fileError,
  };
};
