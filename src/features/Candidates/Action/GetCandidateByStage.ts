import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

interface GetCandidateByStage {
  jobId: string;
  stageTitle: string;
}

export const fetchGetCandidateByStage = createAsyncThunk(
  "Candidator/fetchGetCandidateByStage",
  async (data: GetCandidateByStage, ThunkAPi) => {
    return candidateService.getCandidateByStage(data, ThunkAPi);
  }
);
