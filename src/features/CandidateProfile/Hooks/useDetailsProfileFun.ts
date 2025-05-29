import { useState } from "react";
import { useForm } from "react-hook-form";

export const useDetailsProfileFun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleTriggerOpen = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    isOpen,
    register,
    errors,
    handleSubmit,
    handleTriggerOpen,
    onSubmit,
  };
};
