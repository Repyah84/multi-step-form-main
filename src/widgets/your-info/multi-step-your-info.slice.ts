import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MultiStepYourInfo } from "../../types/multi-step-your-info.type";

interface YourInfoSlice {
  value: MultiStepYourInfo;
}

const initialState: YourInfoSlice = {
  value: {
    name: null,
    emailAddress: null,
    phoneNUmber: null,
  },
};

const multiStepYourInfoSlice = createSlice({
  name: "yurInfo",
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<YourInfoSlice["value"]>) {
      state.value = payload;
    },
  },
});

export const { setState } = multiStepYourInfoSlice.actions;

export default multiStepYourInfoSlice.reducer;
