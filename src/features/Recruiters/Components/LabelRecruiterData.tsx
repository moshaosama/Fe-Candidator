
import LabelData from "../../../Components/LabelData";
import NoData from "../../../Components/NoData";
import { RecruiterData } from "../Data/Data";
import useDisplayData from "../Hooks/useDisplayData";
import DisplayData from "./DisplayData";


const LabelRecruiterData = () => {
    const {recruiter} = useDisplayData();
    return (
        <>
        {
            recruiter.length > 0 ? (
                <div>
                    <LabelData labels={RecruiterData}/>
                    <DisplayData/>
                </div>
            ) : (
               <NoData Title="recruiters"/>
            )
        }
        </>
    )
}



export default LabelRecruiterData;