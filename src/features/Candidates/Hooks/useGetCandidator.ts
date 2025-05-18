import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";

import { useEffect } from "react";
import fetchGetCandidator from "../Action/getCandidator";

export const useGetCandidator = () => {
  const Candidator: any = useSelector((state: RootState) => state.candidator);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetCandidator());
  }, [dispatch]);

  return { Candidator };
};
