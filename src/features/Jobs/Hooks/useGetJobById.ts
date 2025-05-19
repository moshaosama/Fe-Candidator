import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetJobByID } from "../Actions/GetJobById";

const useGetJobById = (id: number) => {
  const jobByID: any = useSelector((state: RootState) => state.jobByid);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetJobByID(id));
  }, [dispatch]);

  return { jobByID };
};

export default useGetJobById;
