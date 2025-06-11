import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/store";
import { fetchgetResumeByid } from "../Actions/Resume";
import { useGetToken } from "../../../../Hooks/useGetToken";
import { ResumesType } from "../../../../Types/Resumes";

const useGetResumes = () => {
  const Resumes = useSelector(
    (state: RootState) => state.Resumes
  ) as ResumesType;
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  useEffect(() => {
    dispatch(fetchgetResumeByid(User?.result?.id));
  }, []);

  return { Resumes };
};

export default useGetResumes;
