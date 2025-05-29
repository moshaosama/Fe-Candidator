import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchEditProfile } from "../Actions/EditProfile";
import { useGetToken } from "../../../Hooks/useGetToken";
import { fetchGetCandidateByID } from "../../Candidates/Action/getCandidateById";

export const useDetailsProfileFun = () => {
  const [isOpenDetailsProfile, setIsOpenDetailsProfile] = useState(false);
  const { User } = useGetToken();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const handleTriggerOpen = () => {
    setIsOpenDetailsProfile(!isOpenDetailsProfile);
  };

  const onSubmit = async (data: any) => {
    await dispatch(
      fetchEditProfile({
        candidateId: User?.result?.id,
        data,
      })
    );
    await dispatch(fetchGetCandidateByID(String(User?.result?.id)));

    setIsOpenDetailsProfile(false);
  };

  return {
    isOpenDetailsProfile,
    register,
    errors,
    handleSubmit,
    handleTriggerOpen,
    onSubmit,
  };
};
