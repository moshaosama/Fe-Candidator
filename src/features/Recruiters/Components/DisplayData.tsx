import useDisplayData from "../Hooks/useDisplayData";
import { RecruiterData } from "../Types/RecruiterData";




const DisplayData = () => {
    const {recruiter} = useDisplayData();
    return (
       <>
       {
        recruiter.map((recruiter: RecruiterData, index: number) => (
            <div className=" bg-[#272727ab] mt-3 py-5 px-4 rounded-lg cursor-pointer">
                <div key={index} className="grid grid-cols-4 text-white">
                    <h1 className="flex items-center gap-2">
                        <input id="Data" type="checkbox" className="w-4 h-4 rounded-full" />
                        {recruiter.FirstName}
                    </h1>
                    <h1>{recruiter.LastName}</h1>
                    <h1>{recruiter.Email}</h1>
                    <h1>{recruiter.Role}</h1>
               </div>
            </div>
        ))
       }
       </>
    )
}


export default DisplayData;