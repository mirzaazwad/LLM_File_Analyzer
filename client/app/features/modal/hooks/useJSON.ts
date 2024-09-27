import { fileActions } from "@/app/context/slice/file-slice";
import { appStore, useAppSelector } from "@/app/context/store/redux-store";
import { useEffect } from "react";

export const useJSON=()=>{
    const json = useAppSelector((state) => state.file.json);
    const error = useAppSelector((state) => state.file.jsonParseError);

    useEffect(()=>{
        if(!json){
            appStore.dispatch(fileActions.setJSONParseError("Not a Valid JSON"));
        }
    },[json])

    return [json,error];
}