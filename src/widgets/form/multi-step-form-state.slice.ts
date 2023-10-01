import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { MultiStepFormStateSlice } from "../../types/multi-step-form-state.type";

interface FormStateSlice {
  value: MultiStepFormStateSlice;
}

const initialState: FormStateSlice = { value: "your-info" };

const multiStepFormSateSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<FormStateSlice["value"]>) {
      state.value = payload;
    },
  },
});

export const { setState } = multiStepFormSateSlice.actions;

export default multiStepFormSateSlice.reducer;
