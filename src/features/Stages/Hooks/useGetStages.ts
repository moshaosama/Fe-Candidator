import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetStages } from "../Actions/GetStages";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";
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

  const { jobByID } = useGetJobById();

  const candidatesJson = jobByID.jobs.result?.[0]?.Candidates;
  //   console.log(candidatesJson);?

  let parsedCandidates: any[] = [];

  if (typeof candidatesJson === "string") {
    try {
      parsedCandidates = JSON.parse(candidatesJson);
    } catch (error) {
      console.error("خطأ أثناء التحويل من JSON:", error);
    }
  } else if (Array.isArray(candidatesJson)) {
    parsedCandidates = candidatesJson;
  }

  return { Stages, parsedCandidates };
};

export default useGetStages;
