import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateJob } from "../Actions/CreateJob";
import usetoastify from "../../../Hooks/usetoastify";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess } = usetoastify();
  const onSubmit = (data: any) => {
    dispatch(fetchCreateJob(data));
    notifySuccess("Job created successfully!!");
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
