import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import {
  fetchChangePassword,
  fetchUpdateProfile,
} from "../Actions/UpdateProfile";
import { useGetToken } from "../../../Hooks/useGetToken";
import useLogout from "../../../Hooks/useLogout";
import { useEffect, useState } from "react";

const useChangeProfileUser = () => {
  const { User } = useGetToken();
  const [isChange, setIsChange] = useState(true);
  const { handleLogout } = useLogout();
  const {
    register: registerChangeProfile,
    handleSubmit: handleSubmitChangeProfile,
    watch: watchChangeProfile,
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
    watch: watchChangePassword,
  } = useForm({
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeProfileUser = (data: any) => {
    dispatch(fetchUpdateProfile(data));
    handleLogout();
  };

  useEffect(() => {
    const currentValuesChangeProfile = watchChangeProfile();
    const currentValuesChangePassword = watchChangePassword();

    if (
      currentValuesChangeProfile.FirstName !== User?.result?.FirstName ||
      currentValuesChangeProfile.LastName !== User?.result?.LastName ||
      currentValuesChangeProfile.Email !== User?.result?.Email ||
      (currentValuesChangePassword.old_password !== "" &&
        currentValuesChangePassword.new_password !== "")
    ) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  }, [watchChangeProfile(), watchChangePassword()]);

  const handleChangePassword = (data: any) => {
    dispatch(fetchChangePassword(data));
    handleLogout();
  };

  return {
    registerChangeProfile,
    handleSubmitChangeProfile,
    handleChangeProfileUser,
    handleChangePassword,
    registerChangePassword,
    handleSubmitChangePassword,
    isChange,
  };
};

export default useChangeProfileUser;
