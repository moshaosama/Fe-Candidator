import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { fetchGetRecruiter } from "../Actions/getRecruiters";
import { useEffect } from "react";

const useDisplayData = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {recruiter} = useSelector((state: RootState) => state.recruiter)

    useEffect(() => {
        if (recruiter.length === 0) {
            dispatch(fetchGetRecruiter());
        }
    }, []);

    return {recruiter}
}

export default useDisplayData;