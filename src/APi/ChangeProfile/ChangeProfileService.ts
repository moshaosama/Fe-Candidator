import axios from "axios";

export interface UpdateProfileData {
  FirstName: string;
  LastName: string;
  Email: string;
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
}

export const changeProfileService = new ChangeProfileService();
