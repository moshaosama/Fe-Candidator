import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Store/store";
import { fetchCreateResume, fetchgetResumeByid } from "../Actions/Resume";
import { useGetToken } from "../../../../Hooks/useGetToken";

const useResumeForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  const onSubmit = (data: any) => {
    // console.log(data?.Resume?.[0]?.name);
    dispatch(
      fetchCreateResume({
        Resume: data?.Resume?.[0]?.name,
        candidate_id: User?.result?.id,
      })
    );
    dispatch(fetchgetResumeByid(User?.result?.id));
  };

  return { onSubmit, register, handleSubmit };
};

export default useResumeForm;
