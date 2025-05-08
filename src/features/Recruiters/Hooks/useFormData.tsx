import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateRecruiter } from "../Actions/createRecruiter";

const useFormData = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch<AppDispatch>()


    const handleFormSubmit = (data: any) => {
        dispatch(fetchCreateRecruiter(data))
    }

    return {register, handleSubmit, errors, handleFormSubmit}
}

export default useFormData;
