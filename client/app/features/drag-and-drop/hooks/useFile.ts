import { fileActions } from "@/app/context/slice/file-slice";
import { appStore, useAppSelector } from "@/app/context/store/redux-store";
import { fileSizeCompute } from "@/app/utils/misc/fileSizeCompute";
import { useEffect, useState } from "react";

export const useFile = () => {
  const files = useAppSelector((state) => state.file.files);
  const [fileInformation, setFileInformation] = useState<string>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (files.length>0) {
      try {
        const evaluatedInformation = files.map((file:File)=>{
          const recomputeSizeResult = fileSizeCompute(file.size);
          return `${file.name} ${recomputeSizeResult.size} ${recomputeSizeResult.metric}`
        })
        setFileInformation(evaluatedInformation.join(", "))
        setShow(true);
      } catch (e: any) {
        appStore.dispatch(fileActions.clear());
        appStore.dispatch(fileActions.setFileError(e.message));
        setShow(false);
      }
    } else {
      setShow(false);
    }
  }, [files]);

  return { show, fileInformation };
};
