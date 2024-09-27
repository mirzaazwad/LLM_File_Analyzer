/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const filesDropped = e.dataTransfer.files;
    const numberOfFiles = filesDropped.length;
    if(numberOfFiles>0){
      for(let i=0;i<numberOfFiles;i+=1){
        const fileDropped = e.dataTransfer.files[i];
        if(fileDropped){
          addFile(fileDropped);
        }
      }
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const filesInserted = e.target.files;
    const numberOfFiles = filesInserted.length;
    if (filesInserted && numberOfFiles>0) {
      for(let i=0;i<numberOfFiles;i+=1){
        const fileDropped = e.target.files[i];
        if(fileDropped){
          addFile(fileDropped);
        }
      }
    }
    setLoading(false);
  };

  const addFile = (e: File) => {
    appStore.dispatch(fileActions.clear());
    try {
      if (e) {
        appStore.dispatch(fileActions.setFiles(e));
      } else {
        throw Error("The files you entered could not be attached");
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
