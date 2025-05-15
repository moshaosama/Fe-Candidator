import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateJob } from "../Actions/CreateJob";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(fetchCreateJob(data));
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
