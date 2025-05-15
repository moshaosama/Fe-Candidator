import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
import { useEffect } from "react";
import usetoastify from "../../../Hooks/usetoastify";

const useDisplayData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recruiter } = useSelector((state: RootState) => state.recruiter);
  const { notifySuccess } = usetoastify();

  useEffect(() => {
    if (recruiter.length === 0) {
      dispatch(fetchGetRecruiter());
      notifySuccess("Recruiter fetched successfully!!");
    }
  }, []);

  return { recruiter };
};

export default useDisplayData;
