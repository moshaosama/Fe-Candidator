import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchAllGetApplyJob } from "../../CareerHub/JobsCandidatePage/Actions/ApplyJob";

const useGetAppliedCandidate = () => {
  const AppliedCandidate = useSelector(
    (state: RootState) => state.ApplyJob
  ) as any;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllGetApplyJob(1));
  }, []);

  return { AppliedCandidate };
};

export default useGetAppliedCandidate;
