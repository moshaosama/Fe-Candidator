import axios from "axios";
import ParentService from "../ParentService";

class CompanyService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await fetch(`${this.url}/create-company`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.message || "Request failed");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getAllData() {
    try {
      const response = await axios.get(`${this.url}/get-companies`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCompanyById(companyId: number, thunkAPI: any) {
    try {
      const response = await fetch(
        `${this.url}/get-company-by-id/${companyId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
}

export const companyService = new CompanyService();
