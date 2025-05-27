import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetJobByID } from "../Actions/GetJobById";
import { useParams } from "react-router";
const useGetJobById = () => {
  const { jobId } = useParams();
  const jobByID: any = useSelector((state: RootState) => state.jobByid);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetJobByID(Number(jobId)));
  }, [dispatch, jobId]);

  return { jobByID, jobId };
};

export default useGetJobById;
