import axios from "axios";
import { SignUpData } from "../../features/SignUp/Action/SignUp";

class SignUpService {
  async SignUp(data: SignUpData, thunkAPI: any) {
    try {
      const response = await axios.post("http://localhost:8000/sign-up", data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const signUpService = new SignUpService();
