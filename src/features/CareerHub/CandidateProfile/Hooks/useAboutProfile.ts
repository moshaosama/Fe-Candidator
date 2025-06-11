import { useState } from "react";
import { useGetToken } from "../../../../Hooks/useGetToken";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Store/store";
import { fetchEditProfile } from "../Actions/EditProfile";
import { fetchGetCandidateByID } from "../../../Candidates/Action/getCandidateById";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";

export const useAboutProfile = () => {
  const [isOpenAboutProfile, setIsOpenAboutProfile] = useState(false);
  const { User } = useGetToken();
  const { CandidateById } = useGetCandidateById();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const handleTriggerOpen = () => {
    setIsOpenAboutProfile(!isOpenAboutProfile);
  };

  const onSubmit = async (data: any) => {
    await dispatch(
      fetchEditProfile({
        candidateId: User?.result?.id,
        data,
      })
    );
    await dispatch(fetchGetCandidateByID(String(User?.result?.id)));

    setIsOpenAboutProfile(false);
  };

  return {
    isOpenAboutProfile,
    register,
    errors,
    handleSubmit,
    handleTriggerOpen,
    onSubmit,
    CandidateById,
  };
};
