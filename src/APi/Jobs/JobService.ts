import axios from "axios";
import ParentService from "../ParentService";

class JobService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/create-job`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

  async getAllData(_?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(`${this.url}/get-jobs`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getJobById(job_id: number, thunkAPI: any) {
    try {
      const response = await axios.get(`${this.url}/get-job-by-id/${job_id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }

  async getJobByCompanyID(company_id: number, thunkAPI: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-job-by-company-id/${company_id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const jobService = new JobService();
