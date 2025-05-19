import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetContact } from "../../Contact/Actions/GetContact";
import { useEffect } from "react";
import { fetchGetJobs } from "../Actions/GetJobs";

const useGetData = () => {
  const Contact: any = useSelector((state: RootState) => state.contact);
  const Jobs: any = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetContact());
    dispatch(fetchGetJobs());
  }, [dispatch]);

  return { Contact, Jobs };
};

export default useGetData;
