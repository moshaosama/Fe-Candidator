import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { useGetRecruiterIDContext } from "../Context/useGetRecruiterIDContext";
import { fetchDeleteRecruiterById } from "../Actions/deleteRecruiterbyid";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
import usetoastify from "../../../Hooks/useToastify";
const useDeleteRecruiter = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useGetRecruiterIDContext();

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  const { notifyError, notifySuccess } = usetoastify();

  const handleDeleteRecruiterById = async () => {
    await dispatch(fetchDeleteRecruiterById(id));
    handleChecked();
    try {
      await dispatch(fetchGetRecruiter()).unwrap();
      notifySuccess("Recruiter deleted successfully!!");
    } catch (err) {
      notifyError("Recruiter added, but failed to fetch recruiters list.");
    }
  };

  return { checked, handleChecked, handleDeleteRecruiterById };
};

export default useDeleteRecruiter;
function notifyError(arg0: string) {
  throw new Error("Function not implemented.");
}
