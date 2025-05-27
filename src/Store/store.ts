import { configureStore } from "@reduxjs/toolkit";
import RecruiterReducer from "../features/Recruiters/Reducer/Recruiter";
import CompanyReducer from "../features/Companies/Reducer/CompanyReducer";
import ContactReducer from "../features/Contact/Reducer/ContactReducer";
import {
  jobByIDReducer,
  jobReducer,
} from "../features/Jobs/Reducer/JobReducer";
import StagesReducer from "../features/Stages/Reducer/StageSlice";
import CandidatorReducer from "../features/Candidates/Reducer/Candidator";
import UserReducer from "../features/Login/Reducer/LoginSlice";
export const store = configureStore({
  reducer: {
    recruiter: RecruiterReducer,
    company: CompanyReducer,
    contact: ContactReducer,
    job: jobReducer,
    jobByid: jobByIDReducer,
    candidator: CandidatorReducer.Candidator,
    candidatorByStage: CandidatorReducer.CandidateByStage,
    candidatorById: CandidatorReducer.CandidateById,
    stages: StagesReducer,
    User: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
