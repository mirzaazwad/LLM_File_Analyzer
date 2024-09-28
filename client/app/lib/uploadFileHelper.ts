import { IFileUpload } from "@/app/utils/templates/IFileUpload";
import { appStore } from "@/app/context/store/redux-store";
import { fileActions } from "@/app/context/slice/file-slice";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const uploadFile = async (data: IFileUpload) => {
  appStore.dispatch(fileActions.clearResponse());
  const file: File = data.file;
  const path = `${BACKEND_URL}/api/generate`;
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
  const fetchResponse = await fetch(`${path}?prompt=${`${appStore.getState().file.prompt}: ${fileContent}`}`, {
    method: "GET"
  });
  const llmResponse = await fetchResponse.json();

  appStore.dispatch(fileActions.setResponse(llmResponse.response));
  const responseText = llmResponse.response;
  const blob = new Blob([responseText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.file.name}.txt`;  
  document.body.appendChild(link);
  link.click();  
  link.remove();
  URL.revokeObjectURL(url);
};
