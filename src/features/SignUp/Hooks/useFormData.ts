import { useForm } from "react-hook-form";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
