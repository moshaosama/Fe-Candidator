import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import {
  fetchChangePassword,
  fetchUpdateProfile,
} from "../Actions/UpdateProfile";
import { useGetToken } from "../../../Hooks/useGetToken";

const useChangeProfileUser = () => {
  const { User } = useGetToken();
  const {
    register: registerChangeProfile,
    handleSubmit: handleSubmitChangeProfile,
  } = useForm({
    defaultValues: {
      FirstName: User?.result?.FirstName,
      LastName: User?.result?.LastName,
      Email: User?.result?.Email,
    },
  });

  const {
    register: registerChangePassword,
    handleSubmit: handleSubmitChangePassword,
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeProfileUser = (data: any) => {
    dispatch(fetchUpdateProfile(data));
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    window.location.reload();
  };

  const handleChangePassword = (data: any) => {
    dispatch(fetchChangePassword(data));
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    window.location.reload();
  };

  return {
    registerChangeProfile,
    handleSubmitChangeProfile,
    handleChangeProfileUser,
    handleChangePassword,
    registerChangePassword,
    handleSubmitChangePassword,
  };
};

export default useChangeProfileUser;
