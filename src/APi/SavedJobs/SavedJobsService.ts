import axios from "axios";
import ParentService from "../ParentService";

class SavedJobService extends ParentService {
  async createNewData(jobId: any, thunkAPI: any) {
    try {
      const response = await axios.post(
        `${this.url}/create-saved-job/${jobId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getAllData(_?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(`${this.url}/get-saved-jobs`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }

  async DeleteSavedJob(job_id: number, thunkAPI: any) {
    try {
      const response = await axios.delete(
        `${this.url}/delete-saved-jobs/${job_id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
}

export const savedJobService = new SavedJobService();
