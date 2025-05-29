import axios from "axios";

interface EditProfileServiceData {
  data: any;
  candidateId: number;
}

class EditProfileService {
  async EditProfile(data: EditProfileServiceData, thunkAPI: any) {
    try {
      const response = await axios.put(
        `http://localhost:8000/edit-candidate-profile/${data.candidateId}`,
        data.data
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const editProfileService = new EditProfileService();
