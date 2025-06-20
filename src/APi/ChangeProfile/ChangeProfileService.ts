import axios from "axios";

export interface UpdateProfileData {
  FirstName: string;
  LastName: string;
  Email: string;
}

export interface ChangePasswordData {
  old_password: string;
  new_password: string;
}

class ChangeProfileService {
  User = JSON.parse(window.localStorage.getItem("User")!);

  url = "http://localhost:8000";
  async UpdateProfile(data: UpdateProfileData, thunkAPI: any) {
    try {
      const response = await axios.put(
        `${this.url}/update-user/${this.User?.result?.id}`,
        data
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }

  async ChangePassword(data: ChangePasswordData, thunkAPI: any) {
    try {
      const response = await axios.put(
        `${this.url}/change-password/${this.User?.result?.id}`,
        data
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const changeProfileService = new ChangeProfileService();
