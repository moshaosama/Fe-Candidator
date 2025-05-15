import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateRecruiter } from "../Actions/createRecruiter";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
import { useAddRecruiterModalContext } from "../Context/AddRecruiterModalContext";
import usetoastify from "../../../Hooks/usetoastify";

const useFormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleClickAddModel } = useAddRecruiterModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess, notifyError } = usetoastify();

  const handleFormSubmit = async (data: any) => {
    try {
      await dispatch(fetchCreateRecruiter(data)).unwrap();
      notifySuccess("Recruiter created successfully!!");

      try {
        await dispatch(fetchGetRecruiter()).unwrap();
      } catch (err) {
        notifyError("Recruiter added, but failed to fetch recruiters list.");
      }
      handleClickAddModel();
    } catch (err) {
      if (err) {
        notifyError("Something went wrong while creating recruiter!");
      }
    }
  };

  return { register, handleSubmit, errors, handleFormSubmit };
};

export default useFormData;
