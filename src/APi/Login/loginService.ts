import axios from "axios";
import { LoginData } from "../../features/Login/Action/Login";

class LoginService {
  async Login(data: LoginData, thunkAPI: any) {
    try {
      const response = await axios.post(`http://localhost:8000//login`, data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const loginService = new LoginService();
