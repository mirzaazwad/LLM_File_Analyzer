"use client";

import { appStore } from "@/app/context/store/redux-store";
import { Provider } from "react-redux";
import OCRUploaderCard from "./OCRUploaderCard";

const OCR = () => {
    return ( 
        <Provider store={appStore}>
            <OCRUploaderCard title="Synthetic Data Generator using Files"/>
        </Provider>
     );
}
 
export default OCR;