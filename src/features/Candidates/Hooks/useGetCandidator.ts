import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";

import { useEffect } from "react";
import fetchGetCandidator from "../Action/getCandidator";

interface CandidatorData {
  candidator: {
    result: {
      FirstName: string;
      LastName: string;
      jobId: number;
    }[];
  };
  error: string;
  loading: boolean;
}

export const useGetCandidator = () => {
  const Candidator = useSelector(
    (state: RootState) => state.candidator
  ) as CandidatorData;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetCandidator());
  }, [dispatch]);

  return { Candidator };
};
