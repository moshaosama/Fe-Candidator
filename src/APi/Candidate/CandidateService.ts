import axios from "axios";
import ParentService from "../ParentService";
import { UpdateCandidateinStageData } from "../../features/Jobs/Actions/UpdateCandidateinStage";

class CandidateService extends ParentService {
  async getAllData(ThunApi: any) {
    try {
      const response = await axios.get(`${this.url}/get-candidates`);
      return response.data;
    } catch (error) {
      return ThunApi.rejectWithValue(error);
    }
  }

  async createNewData(data: any, ThunkAPi: any) {
    try {
      const response = await axios.post(`${this.url}/create-candidate`, data);
      return response.data;
    } catch (error) {
      return ThunkAPi.rejectWithValue(error);
    }
  }

  async getCandidateByStage(data: any, ThunkApi: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-candidate-by-stage/by-stage/${data.stageTitle}/${data.jobId}`
      );
      return response.data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error as string);
    }
  }

  async UpdateCandidateinStage(
    Data: UpdateCandidateinStageData,
    thunkAPI: any
  ) {
    try {
      const response = await axios.post(
        `${this.url}/create-candidate-in-stage`,
        Data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

  async getCandidateByID(candidateId: string, thunkAPI: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-candidate-by-id/${candidateId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export default CandidateService;

export const candidateService = new CandidateService();
