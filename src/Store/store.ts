import { configureStore } from "@reduxjs/toolkit";
import RecruiterReducer from "../features/Recruiters/Reducer/Recruiter";
import CompanyReducer from "../features/Companies/Reducer/CompanyReducer";
import ContactReducer from "../features/Contact/Reducer/ContactReducer";
import {
  jobByIDReducer,
  jobReducer,
  jobByCompanyIdReducer,
} from "../features/Jobs/Reducer/JobReducer";
import StagesReducer from "../features/Stages/Reducer/StageSlice";
import CandidatorReducer from "../features/Candidates/Reducer/Candidator";
import UserReducer from "../features/Login/Reducer/LoginSlice";
import SavedJobsReducer from "../features/CareerHub/ApplicationCandidator/Reducer/SavedJobSlice";
import SkillReducer from "../features/CareerHub/CandidateProfile/Reducer/EditProfileSlice";
import ApplyJobReducer from "../features/CareerHub/JobsCandidatePage/Reducers/ApplyJobReducer";
import resumesResucer from "../features/CareerHub/CandidateProfile/Reducer/ResumeSlice";
export const store = configureStore({
  reducer: {
    recruiter: RecruiterReducer,
    company: CompanyReducer,
    contact: ContactReducer,
    job: jobReducer,
    jobByid: jobByIDReducer,
    jobByCompanyId: jobByCompanyIdReducer,
    candidator: CandidatorReducer.Candidator,
    candidatorByStage: CandidatorReducer.CandidateByStage,
    candidatorById: CandidatorReducer.CandidateById,
    stages: StagesReducer,
    User: UserReducer,
    savedJobs: SavedJobsReducer,
    Skill: SkillReducer,
    ApplyJob: ApplyJobReducer,
    Resumes: resumesResucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
