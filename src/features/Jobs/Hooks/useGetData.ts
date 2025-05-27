import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetContact } from "../../Contact/Actions/GetContact";
import { useEffect } from "react";
import { fetchGetJobs } from "../Actions/GetJobs";

interface JobsData {
  error: string;
  loading: boolean;
  jobs: {
    result: {
      Candidates: {
        FirstName: string;
        LastName: string;
        Email: string;
        LinkedInProfile: string;
        Stages: string;
      }[];
      id: number;
      Commitment: string;
      Contact: string;
      Department: string;
      Description: string;
      Gender: string;
      JobTitle: string;
      Location: string;
      NumNeeded: number;
      Stages: string;
    }[];
    success: boolean;
  };
}

const useGetData = () => {
  const Contact: any = useSelector((state: RootState) => state.contact);
  const Jobs = useSelector(
    (state: RootState) => state.job
  ) as unknown as JobsData;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetContact());
    dispatch(fetchGetJobs());
  }, [dispatch]);

  return { Contact, Jobs };
};

export default useGetData;
