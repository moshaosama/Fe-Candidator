import { configureStore } from "@reduxjs/toolkit";
import RecruiterReducer from "../features/Recruiters/Reducer/Recruiter";
import CompanyReducer from "../features/Companies/Reducer/CompanyReducer";
import ContactReducer from "../features/Contact/Reducer/ContactReducer";

export const store = configureStore({
  reducer: {
    recruiter: RecruiterReducer,
    company: CompanyReducer,
    contact: ContactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
