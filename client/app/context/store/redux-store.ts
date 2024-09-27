import { combineReducers, configureStore } from "@reduxjs/toolkit";


import { useDispatch,useSelector } from 'react-redux'
import { fileReducer } from "../slice/file-slice";
const appReducer = combineReducers({
    file: fileReducer
});

export const appStore = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false
        }),
});

type AppStoreType = ReturnType<typeof appReducer>;
export type AppDispatch = typeof appStore.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStoreType>()

