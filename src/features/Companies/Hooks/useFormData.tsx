import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateCompany } from "../Actions/CreateCompany";
import { useAddCompanyModalContext } from "../Context/AddModalCompanyContext";
import { fetchGetCompanies } from "../Actions/GetCompanies";
import usetoastify from "../../../Hooks/usetoastify";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { handleTriggerModal } = useAddCompanyModalContext();
  const { notifySuccess } = usetoastify();
  const onSubmit = (data: any) => {
    dispatch(fetchCreateCompany(data));
    dispatch(fetchGetCompanies());
    notifySuccess("Company created successfully!!");
    handleTriggerModal();
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
