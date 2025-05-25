import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

interface CreateCandidatorData {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  LinkedInProfile: string;
  Resume: string;
}

export const fetchCreateCandidator = createAsyncThunk(
  "Candidator/fetchCreateCandidator",
  async (data: CreateCandidatorData, { rejectWithValue }) => {
    try {
      return candidateService.createNewData(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
