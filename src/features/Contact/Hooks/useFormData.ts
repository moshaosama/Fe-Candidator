import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateContact } from "../Actions/CreateContact";

export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(fetchCreateContact(data));
  };

  return { register, handleSubmit, errors, onSubmit };
};
