export interface ResumesType {
  error: string;
  loading: boolean;
  resumes: {
    statusbar: string;
    result: {
      Date: string;
      Resume: string;
    }[];
  };
}
