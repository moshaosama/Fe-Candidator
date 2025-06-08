import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useGetToken } from "../../../Hooks/useGetToken";
import { fetchGetSkill } from "../Actions/GetSkills";
import { fetchCreateSkill } from "../Actions/CreateSkill";
import { SkillData } from "../../../Types/CreateSkill";

const useSkillsData = () => {
  const [isOpenSkillModel, setIsOpenSkillModel] = useState(true);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const Skills = useSelector((state: RootState) => state.Skill) as SkillData;
  const dispatch = useDispatch<AppDispatch>();
  const { User } = useGetToken();

  useEffect(() => {
    dispatch(fetchGetSkill(User?.result?.id));
  }, []);

  const { register, handleSubmit } = useForm();

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
    dispatch(
      fetchCreateSkill({
        Skill: data.Skill,
        candidator_id: User?.result?.id,
      })
    );
    dispatch(fetchGetSkill(User?.result?.id));
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
    Skills,
  };
};

export default useSkillsData;
