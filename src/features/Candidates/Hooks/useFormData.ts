import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateCandidator } from "../Action/CreateCandidator";
import usetoastify from "../../../Hooks/useToastify";
import { fetchGetCandidator } from "../Action/getCandidator";
import { useOprenAddModalCandidator } from "../Context/OpenAddModalContext";
export const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess } = usetoastify();
  const { handleCloseAddModalCandidator } = useOprenAddModalCandidator();

  const onSubmit = async (data: any) => {
    try {
      await dispatch(fetchCreateCandidator(data));
      notifySuccess("Candidate created successfully");
      dispatch(fetchGetCandidator());
      handleCloseAddModalCandidator();
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};
