import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchGetJobByCompanyId } from "../Actions/getJobByCompanyId";
const useGetJobByCompanyId = () => {
  const { companyId } = useParams();

  const jobByCompanyId: any = useSelector(
    (state: RootState) => state.jobByCompanyId
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetJobByCompanyId(Number(companyId)));
  }, [dispatch, companyId]);

  return { jobByCompanyId, companyId };
};

export default useGetJobByCompanyId;
