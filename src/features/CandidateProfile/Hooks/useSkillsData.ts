import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchEditProfile } from "../Actions/EditProfile";
import { useGetToken } from "../../../Hooks/useGetToken";

const useSkillsData = () => {
  const [isOpenSkillModel, setIsOpenSkillModel] = useState(true);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  const handleTriggerOpen = () => {
    setIsOpenSkillModel(!isOpenSkillModel);
  };

  const handleOpenInput = (e: any) => {
    e.preventDefault();
    setIsOpenInput(true);
  };
  const handleCloseInput = () => {
    setIsOpenInput(false);
  };

  const OnSubmit = (data: any) => {
    const payload = {
      candidateId: User?.result?.id,
      data: {
        ...data,
        Skills: JSON.stringify(data),
      },
    };

    dispatch(fetchEditProfile(payload));
  };
  return {
    isOpenSkillModel,
    handleTriggerOpen,
    handleOpenInput,
    handleCloseInput,
    isOpenInput,
    register,
    handleSubmit,
    OnSubmit,
    errors,
  };
};

export default useSkillsData;
