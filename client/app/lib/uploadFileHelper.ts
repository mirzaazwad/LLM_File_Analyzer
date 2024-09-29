import { IFileUpload } from "@/app/utils/templates/IFileUpload";
import { appStore } from "@/app/context/store/redux-store";
import { fileActions } from "@/app/context/slice/file-slice";
import { IUploader } from "@/app/utils/templates/IUploader";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const uploadFile = async (data: IFileUpload) => {
  try{
    appStore.dispatch(fileActions.clearResponse());
  const file: File = data.file;
  const path = `${BACKEND_URL}/ask`;
  const fileContent = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target?.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
  const payload: IUploader = {
    prompt: encodeURIComponent(`${appStore.getState().file.prompt}`),
    fileContent: encodeURIComponent(`${fileContent}`),
  };
  const fetchResponse = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const llmResponse=await fetchResponse.text();

  appStore.dispatch(fileActions.setResponse(llmResponse));
  const responseText = llmResponse;
  const blob = new Blob([responseText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.file.name}.txt`;  
  document.body.appendChild(link);
  link.click();  
  link.remove();
  URL.revokeObjectURL(url);
  }
  catch(error:any){
    appStore.dispatch(fileActions.setFileError(error))
    console.error(error)
  }
};
