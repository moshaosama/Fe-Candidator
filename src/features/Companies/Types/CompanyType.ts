export interface CreateCompanyData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Language: string;
}

export interface CompanyData {
  company: {
    result: {
      id: number;
      Email: string;
      Name: string;
      Language: string;
      Jobs: {}[];
      Tags: string;
    }[];
  };
  isLoading: boolean;
  error: string;
}
