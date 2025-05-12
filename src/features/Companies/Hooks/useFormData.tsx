import { useForm } from "react-hook-form";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useFormData;
