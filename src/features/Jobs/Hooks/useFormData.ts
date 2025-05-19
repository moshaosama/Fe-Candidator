import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateJob } from "../Actions/CreateJob";
import usetoastify from "../../../Hooks/useToastify";
import { useParams } from "react-router";
const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess } = usetoastify();
  const { companyId } = useParams();
  const onSubmit = (data: any) => {
    dispatch(
      fetchCreateJob({
        ...data,
        companyID: companyId,
      })
    );

    notifySuccess("Job created successfully!!");
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
