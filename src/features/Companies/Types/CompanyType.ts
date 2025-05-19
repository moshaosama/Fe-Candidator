export interface CreateCompanyData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Language: string;
}

export interface Company {
  id: number;
  Email: string;
  Name: string;
  Language: string;
  Jobs: {}[];
  Tags: string;
}

export interface CompanyData {
  company: {
    result: Company[];
  };
  isLoading: boolean;
  error: string;
}
