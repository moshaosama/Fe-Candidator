import axios from "axios";

class EditProfileService {
  async EditProfile(candidateId: number, data: any, thunkAPI: any) {
    try {
      const response = await axios.put(
        `http://localhost:8000/edit-candidate-profile/${candidateId}`,
        data
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const editProfileService = new EditProfileService();
