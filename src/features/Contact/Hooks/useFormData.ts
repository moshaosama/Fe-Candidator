import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateContact } from "../Actions/CreateContact";
import { fetchGetContact } from "../Actions/GetContact";
export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: any) => {
    dispatch(fetchCreateContact(data));
    dispatch(fetchGetContact());
  };

  return { register, handleSubmit, errors, onSubmit };
};
