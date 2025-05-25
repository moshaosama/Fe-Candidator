import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

export const fetchGetCandidator = createAsyncThunk(
  "Candidator/fetchGetCandidator",
  async (_, ThunApi) => {
    return candidateService.getAllData(ThunApi);
  }
);

export default fetchGetCandidator;
