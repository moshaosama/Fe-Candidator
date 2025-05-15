export interface JobData {
  id: number;
  JobTitle: string;
  Description: string;
  Gender: string;
  NumNeeded: number;
  Location: string;
  Commitment: string;
  Department: string;
  Contact: string;
}

export interface JobDataRedux {
  jobs: {
    result: [];
    success: boolean;
  };
  loading: boolean;
  error: string;
}
