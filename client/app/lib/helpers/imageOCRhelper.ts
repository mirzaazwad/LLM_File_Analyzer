import { API_Routes } from "@/app/api/Routes";
import { FetchHandler } from "../RequestHandler";
import { IOCRImageUpload } from "@/app/utils/templates/IOCRImageUpload";
import { appStore } from "@/app/context/store/redux-store";
import { fileActions } from "@/app/context/slice/file-slice";

export const uploadBankCheck = async (data: IOCRImageUpload) => {
  const path = API_Routes.ocr.get("root");
  if (path) {
    const response = await new FetchHandler<IOCRImageUpload>(false).postRequest(
      path,
      data
    );
    if (response.hasOwnProperty("Account_info")) {
      appStore.dispatch(fileActions.setJSON(response.Account_info));
    } else {
      throw Error("Internal Server Error: No Valid Response Found");
    }
  } else {
    throw Error("Path in API_Routes is Invalid");
  }
};
