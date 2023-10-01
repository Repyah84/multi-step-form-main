import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MultiStepAddOns } from "../../types/multi-step-add-ons.type";

interface AddOnsSlice {
  value: MultiStepAddOns;
}

const initialState: AddOnsSlice = {
  value: {
    onlineService: true,
    largeStore: true,
    customizableProfile: false,
  },
};

const multiStepAddOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<AddOnsSlice["value"]>) {
      state.value = payload;
    },
  },
});

export const { setState } = multiStepAddOnsSlice.actions;

export default multiStepAddOnsSlice.reducer;
