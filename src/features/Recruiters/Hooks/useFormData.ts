import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateRecruiter } from "../Actions/createRecruiter";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
import { useAddRecruiterModalContext } from "../Context/AddRecruiterModalContext";

const useFormData = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {handleClickAddModel} = useAddRecruiterModalContext()
    const dispatch = useDispatch<AppDispatch>()


    const handleFormSubmit = async (data: any) => {
        await dispatch(fetchCreateRecruiter(data));
        dispatch(fetchGetRecruiter());
        handleClickAddModel();
    }

    return {register, handleSubmit, errors, handleFormSubmit}
}

export default useFormData;
