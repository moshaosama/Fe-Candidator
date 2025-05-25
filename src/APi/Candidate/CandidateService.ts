import axios from "axios";
import ParentService from "../ParentService";

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
        `${this.url}/get-candidate-by-stage/${data.jobId}/${data.stageTitle}`
      );
      return response.data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error as string);
    }
  }
}

export default CandidateService;

export const candidateService = new CandidateService();
