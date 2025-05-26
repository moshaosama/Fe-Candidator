import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchLogin } from "../Action/Login";
import { useEffect } from "react";

export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const User: any = useSelector((state: RootState) => state.User);

  const OnSubmit = (data: any) => {
    dispatch(fetchLogin(data));
  };

  useEffect(() => {
    if (User?.User?.Token) {
      window.localStorage.setItem("Token", User.User.Token);
      window.localStorage.setItem("User", JSON.stringify(User.User));

      window.location.reload();
    }
  }, [User]);

  return { register, handleSubmit, errors, OnSubmit };
};
