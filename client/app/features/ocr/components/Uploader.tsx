"use client";

import { appStore } from "@/app/context/store/redux-store";
import { Provider } from "react-redux";
import UploaderCard from "./UploaderCard";

const Uploader = () => {
    return ( 
        <Provider store={appStore}>
            <UploaderCard title="LLM File Analyzer"/>
        </Provider>
     );
}
 
export default Uploader;