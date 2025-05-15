import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetContact } from "../../Contact/Actions/GetContact";
import { fetchGetRecruiter } from "../../Recruiters/Actions/getRecruiters";

const useGetData = () => {
  const Contact: any = useSelector((state: RootState) => state.contact);
  const Recruiter: any = useSelector((state: RootState) => state.recruiter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetContact());
    dispatch(fetchGetRecruiter());
  }, [dispatch]);
  return { Contact, Recruiter };
};

export default useGetData;
