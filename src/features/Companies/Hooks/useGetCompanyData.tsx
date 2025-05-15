import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetCompanies } from "../Actions/GetCompanies";
import { CompanyData } from "../Types/CompanyType";
import usetoastify from "../../../Hooks/usetoastify";
const useGetCompanyData = () => {
  const Company = useSelector(
    (state: RootState) => state.company
  ) as CompanyData;
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess } = usetoastify();
  useEffect(() => {
    dispatch(fetchGetCompanies());
    notifySuccess("Company fetched successfully!!");
  }, [dispatch]);

  return { Company };
};

export default useGetCompanyData;
