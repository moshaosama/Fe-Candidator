import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { fetchGetCompanyByID } from "../Actions/GetCompanyByID";
import { CompanyData } from "../../Companies/Types/CompanyType";

const UseGetCompanyByID = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const CompanyByID = useSelector(
    (state: RootState) => state.company
  ) as CompanyData;

  useEffect(() => {
    dispatch(fetchGetCompanyByID(+companyId!));
  }, [dispatch, companyId]);

  return { CompanyByID };
};

export default UseGetCompanyByID;
