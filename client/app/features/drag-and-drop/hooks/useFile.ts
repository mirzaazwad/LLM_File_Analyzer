import { fileActions } from "@/app/context/slice/file-slice";
import { appStore, useAppSelector } from "@/app/context/store/redux-store";
import { fileSizeCompute } from "@/app/utils/misc/fileSizeCompute";
import { useEffect, useState } from "react";

export const useFile = () => {
  const file = useAppSelector((state) => state.file.file);
  const [filename, setFilename] = useState<string>();
  const [size, setSize] = useState<number>();
  const [fileMetric, setFileMetric] = useState<string>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (file) {
      try {
        setFilename(file.name);
        const recomputeSizeResult = fileSizeCompute(file.size);
        setSize(recomputeSizeResult.size);
        setFileMetric(recomputeSizeResult.metric);
        setShow(true);
      } catch (e: any) {
        appStore.dispatch(fileActions.clear());
        appStore.dispatch(fileActions.setFileError(e.message));
        setShow(false);
      }
    } else {
      setShow(false);
    }
  }, [file]);

  return { show, filename, size, fileMetric };
};
