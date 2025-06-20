import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchUpdateProfile } from "../Actions/UpdateProfile";
import { useGetToken } from "../../../Hooks/useGetToken";

const useChangeProfileUser = () => {
  const { User } = useGetToken();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      FirstName: User?.result?.FirstName,
      LastName: User?.result?.LastName,
      Email: User?.result?.Email,
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeProfileUser = (data: any) => {
    dispatch(fetchUpdateProfile(data));
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    window.location.reload();
  };

  return { register, handleSubmit, handleChangeProfileUser };
};

export default useChangeProfileUser;
