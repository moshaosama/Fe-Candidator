import axios from "axios";
import ParentService from "../ParentService";
import { LoginData } from "../../features/Login/Action/Login";

class LoginService extends ParentService {
  createNewData(data: any, thunkAPI: any) {}
  getAllData(_?: any, thunkAPI?: any) {}

  async Login(data: LoginData, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/login`, data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const loginService = new LoginService();
