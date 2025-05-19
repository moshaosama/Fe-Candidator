import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetCompanies } from "../Actions/GetCompanies";
import { CompanyData } from "../Types/CompanyType";

const useGetCompanyData = () => {
  const Company = useSelector(
    (state: RootState) => state.company
  ) as CompanyData;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetCompanies());
  }, [dispatch]);

  return { Company };
};

export default useGetCompanyData;
