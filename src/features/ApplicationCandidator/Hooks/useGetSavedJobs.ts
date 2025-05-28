import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetSavedJobs } from "../Action/getSavedJobs";
import { JobData } from "../../Jobs/Types/JobData";

interface SavedJobsType {
  savedJobs: {
    statusbar: string;
    result: JobData[];
  };
  isLoading: boolean;
  error: string;
}

export const useGetSavedJobs = () => {
  const savedJobs = useSelector(
    (state: RootState) => state.savedJobs
  ) as SavedJobsType;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetSavedJobs());
  }, [dispatch]);

  return { savedJobs };
};
