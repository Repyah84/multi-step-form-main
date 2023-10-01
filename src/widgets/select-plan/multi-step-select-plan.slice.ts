import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MultiStepSelectPlan } from "../../types/multi-step-select-plan-type";

interface SelectPlanSlice {
  value: MultiStepSelectPlan;
}

const initialState: SelectPlanSlice = {
  value: {
    plan: "arcade",
    time: "monthly",
  },
};

const multiStepSelectPlanSlice = createSlice({
  name: "selectPlan",
  initialState,
  reducers: {
    setState(state, { payload }: PayloadAction<SelectPlanSlice["value"]>) {
      state.value = payload;
    },
  },
});

export const { setState } = multiStepSelectPlanSlice.actions;

export default multiStepSelectPlanSlice.reducer;
