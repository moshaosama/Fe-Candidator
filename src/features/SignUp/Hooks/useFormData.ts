import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchSignUp } from "../Action/SignUp";
import { useHasAccountContext } from "../../../Context/useHasAccountContext";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { toggleHasAccount } = useHasAccountContext();

  const onSubmit = (data: any) => {
    dispatch(fetchSignUp(data));
    toggleHasAccount();
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
