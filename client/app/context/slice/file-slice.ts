import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFile {
  files: File[];
  fileError: string[];
}

const initFileState: IFile = {
  files: [],
  fileError: [],
};

export const fileSlice = createSlice({
  name: "file",
  initialState: initFileState,
  reducers: {
    setFiles: (state, action: PayloadAction<File>) => {
      state.files.push(action.payload);
    },
    clear: (state) => {
      state.files = [];
      state.fileError = [];
    },
    setFileError: (state, action: PayloadAction<string>) => {
      state.fileError.push(action.payload);
    },
  },
});

export const fileActions = fileSlice.actions;
export const fileReducer = fileSlice.reducer;
