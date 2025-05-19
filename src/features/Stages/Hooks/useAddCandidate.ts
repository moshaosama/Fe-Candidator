import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { useForm } from "react-hook-form";
import { fetchUpdateCandidateinStage } from "../../Jobs/Actions/UpdateCandidateinStage";
import { useParams } from "react-router";

const useAddCandidate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { jobId } = useParams();
  const onSubmit = (data: any) => {
    dispatch(
      fetchUpdateCandidateinStage({
        ...data,
        JobID: jobId,
      })
    );
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useAddCandidate;
