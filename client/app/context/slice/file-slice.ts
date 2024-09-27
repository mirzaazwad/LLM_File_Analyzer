import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFile {
  files: File[];
  fileError: string[];
  prompt: string;
  responses:string[];
}

const initFileState: IFile = {
  files: [],
  fileError: [],
  prompt: "",
  responses:[]
};

export const fileSlice = createSlice({
  name: "file",
  initialState: initFileState,
  reducers: {
    setFiles: (state, action: PayloadAction<File>) => {
      state.files.push(action.payload);
    },
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    clear: (state) => {
      state.files = [];
      state.fileError = [];
      state.prompt="",
      state.responses=[];
    },
    setFileError: (state, action: PayloadAction<string>) => {
      state.fileError.push(action.payload);
    },
    setResponse: (state,action:PayloadAction<string>)=>{
      state.responses.push(action.payload);
    },
    clearResponse: (state)=>{
      state.responses=[];
    }
  },
});

export const fileActions = fileSlice.actions;
export const fileReducer = fileSlice.reducer;
