import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { useGetRecruiterIDContext } from "../Context/useGetRecruiterIDContext";
import { fetchDeleteRecruiterById } from "../Actions/deleteRecruiterbyid";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
const useDeleteRecruiter = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useGetRecruiterIDContext();

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const handleDeleteRecruiterById = async () => {
    await dispatch(fetchDeleteRecruiterById(id));
    handleChecked();
    dispatch(fetchGetRecruiter());
  };

  return { checked, handleChecked, handleDeleteRecruiterById };
};

export default useDeleteRecruiter;
