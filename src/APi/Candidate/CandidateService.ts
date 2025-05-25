import axios from "axios";
import ParentService from "../ParentService";

class CandidateService extends ParentService {
  async getAllData() {
    const response = await axios.get(`${this.url}/get-candidates`);
    return response.data;
  }

  async createNewData(data: any) {
    const response = await axios.post(`${this.url}/create-candidate`, data);
    return response.data;
  }

  async getCandidateByStage(data: any) {
    const response = await axios.get(
      `${this.url}/get-candidate-by-stage/${data.jobId}/${data.stageTitle}`
    );
    return response.data;
  }
}

export default CandidateService;

export const candidateService = new CandidateService("http://localhost:8000");
