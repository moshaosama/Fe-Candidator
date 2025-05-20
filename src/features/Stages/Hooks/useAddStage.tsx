import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateStage } from "../Actions/CreateStages";
const useAddStage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { jobId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(fetchCreateStage({ ...data, JobID: jobId }));
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useAddStage;
