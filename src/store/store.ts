import { combineReducers, configureStore } from "@reduxjs/toolkit";

import formReducer from "../widgets/form/multi-step-form-state.slice";
import yourInfoReduces from "../widgets/your-info/multi-step-your-info.slice";
import selectPlanReducer from "../widgets/select-plan/multi-step-select-plan.slice";
import addOnsReducer from "../widgets/add-ons/multi-step-add-ons.module.slice";

const reducer = combineReducers({
  form: formReducer,
  info: yourInfoReduces,
  plan: selectPlanReducer,
  addOns: addOnsReducer,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
