"use client";

import { appStore } from "@/app/context/store/redux-store";
import { Provider } from "react-redux";
import OCRUploaderCard from "./OCRUploaderCard";

const OCR = () => {
    return ( 
        <Provider store={appStore}>
            <OCRUploaderCard title="Bank Cheque OCR"/>
        </Provider>
     );
}
 
export default OCR;