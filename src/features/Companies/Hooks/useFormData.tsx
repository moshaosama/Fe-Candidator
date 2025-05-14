import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateCompany } from "../Actions/CreateCompany";
import { useAddCompanyModalContext } from "../Context/AddModalCompanyContext";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { handleTriggerModal } = useAddCompanyModalContext();

  const onSubmit = (data: any) => {
    dispatch(fetchCreateCompany(data));
    handleTriggerModal();
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
