
import LabelData from "../../../Components/LabelData";
import { RecruiterData } from "../Data/Data";
import DisplayData from "./DisplayData";


const LabelRecruiterData = () => {
    return (
        <div>
            <LabelData labels={RecruiterData}/>
            <DisplayData/>
        </div>
    )
}



export default LabelRecruiterData;