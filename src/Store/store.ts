import { configureStore } from "@reduxjs/toolkit";
import RecruiterReducer from "../features/Recruiters/Reducer/Recruiter";
import CompanyReducer from "../features/Companies/Reducer/CompanyReducer";
import ContactReducer from "../features/Contact/Reducer/ContactReducer";
import CandidatorReducer from "../features/Candidates/Reducer/Candidator";
import {
  jobByIDReducer,
  jobReducer,
} from "../features/Jobs/Reducer/JobReducer";
export const store = configureStore({
  reducer: {
    recruiter: RecruiterReducer,
    company: CompanyReducer,
    contact: ContactReducer,
    job: jobReducer,
    jobByid: jobByIDReducer,
    candidator: CandidatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
