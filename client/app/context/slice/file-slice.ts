import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFile {
  file: File | undefined;
  fileError: string | undefined;
  json: string | undefined;
  jsonParseError: string | undefined;
}

const initFileState: IFile = {
  file: undefined,
  json: undefined,
  jsonParseError: undefined,
  fileError: undefined,
};

export const fileSlice = createSlice({
  name: "file",
  initialState: initFileState,
  reducers: {
    setFile: (state, action: PayloadAction<File>) => {
      state.file = action.payload;
    },
    setJSON: (state, action: PayloadAction<Object>) => {
      try {
        state.jsonParseError = undefined;
        const parsedJSON: string = JSON.stringify(action.payload, null, 2);
        if (!parsedJSON) {
          throw Error("Not a Valid Cheque Image");
        }
        state.json = parsedJSON;
      } catch (error: any) {
        console.log(error);
        state.jsonParseError = error.message;
      }
    },
    clear: (state) => {
      state.file = undefined;
      state.json = undefined;
      state.jsonParseError = undefined;
      state.fileError = undefined;
    },
    setJSONParseError: (state, action: PayloadAction<string>) => {
      state.jsonParseError = action.payload;
    },
    setFileError: (state, action: PayloadAction<string>) => {
      state.fileError = action.payload;
    },
  },
});

export const fileActions = fileSlice.actions;
export const fileReducer = fileSlice.reducer;
