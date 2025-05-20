import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetCandidateByStage } from "../../Candidates/Action/GetCandidateByStage";
import { useParams } from "react-router-dom";
const useGetCandidateByStage = () => {
  const [StageTitle, setStageTitle] = useState<string>("Pending");
  const candidatorByStage: any = useSelector(
    (state: RootState) => state.candidatorByStage
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = useCallback((stageTitle: string) => {
    setStageTitle(stageTitle);
  }, []);
  const { jobId } = useParams();

  useEffect(() => {
    dispatch(
      fetchGetCandidateByStage({
        jobId: jobId!,
        stageTitle: StageTitle,
      })
    );
  }, [StageTitle]);

  return { handleClick, candidatorByStage, StageTitle };
};

export default useGetCandidateByStage;
