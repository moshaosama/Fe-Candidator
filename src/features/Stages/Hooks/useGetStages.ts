import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetStages } from "../Actions/GetStages";

interface StageData {
  error: string;
  loading: boolean;
  stages: {
    result: {
      id: number;
      stageTitle: string;
    }[];
  };
}

const useGetStages = () => {
  const Stages = useSelector((state: RootState) => state.stages) as StageData;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetStages());
  }, [dispatch]);

  return { Stages };
};

export default useGetStages;
