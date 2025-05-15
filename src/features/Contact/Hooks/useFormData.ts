import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateContact } from "../Actions/CreateContact";
import usetoastify from "../../../Hooks/usetoastify";
import { fetchGetContact } from "../Actions/GetContact";
export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess } = usetoastify();
  const onSubmit = (data: any) => {
    dispatch(fetchCreateContact(data));
    dispatch(fetchGetContact());
    notifySuccess("Contact created successfully!!");
  };

  return { register, handleSubmit, errors, onSubmit };
};
