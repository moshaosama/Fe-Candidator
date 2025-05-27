import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetCandidateByID } from "../../Candidates/Action/getCandidateById";
import { useGetToken } from "../../../Hooks/useGetToken";

export const useGetCandidateById = () => {
  const CandidateById: any = useSelector(
    (state: RootState) => state.candidatorById
  );
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  useEffect(() => {
    dispatch(fetchGetCandidateByID(String(User?.result?.id)));
  }, []);

  return { CandidateById };
};
