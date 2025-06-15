import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/store";
import { useEffect } from "react";
import { fetchGetApplyJobByCandidate } from "../../JobsCandidatePage/Actions/ApplyJob";
import { useGetToken } from "../../../../Hooks/useGetToken";

const useGetApplications = () => {
  const jobApplication = useSelector(
    (state: RootState) => state.ApplyJob
  ) as any;
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  useEffect(() => {
    dispatch(fetchGetApplyJobByCandidate(User?.result?.id));
  }, [dispatch]);

  return { jobApplication };
};

export default useGetApplications;
