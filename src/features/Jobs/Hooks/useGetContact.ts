import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetContact } from "../../Contact/Actions/GetContact";
import { useEffect } from "react";

const useGetContact = () => {
  const Contact: any = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetContact());
  }, [dispatch]);

  return { Contact };
};

export default useGetContact;
