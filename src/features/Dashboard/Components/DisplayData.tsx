import { CardDashboardData } from "../../../Components/CardDashboardData";
import { useGetCandidator } from "../../Candidates/Hooks/useGetCandidator";
import useGetCompany from "../Hooks/ueGetCompany";
import useGetData from "../../Users/Hook/useGetData";
import useGetAppliedCandidate from "../Hooks/useGetAppliedCandidate";

const DisplayData = () => {
  const { Contact, Recruiter } = useGetData();
  const { CompanyData } = useGetCompany();

  const { Candidator } = useGetCandidator();
  const { AppliedCandidate } = useGetAppliedCandidate();
  return (
    <div className="grid grid-cols-5 gap-4 max-sm:mx-5 max-sm:grid-cols-1">
      <CardDashboardData
        Title="Users"
        numofData={
          Contact.contact?.result?.length + Recruiter.recruiter?.length
        }
      />
      <CardDashboardData
        Title="Recruiters"
        numofData={Recruiter.recruiter?.length}
      />
      <CardDashboardData
        Title="Company"
        numofData={CompanyData?.result?.length}
      />
      <CardDashboardData
        Title="Contacts"
        numofData={Contact.contact?.result?.length}
      />
      <CardDashboardData
        Title="Candidates"
        numofData={Candidator?.candidator?.result?.length}
      />
      <CardDashboardData
        Title="Applied Candidate"
        numofData={AppliedCandidate?.ApplyJob?.result?.length}
      />
    </div>
  );
};

export default DisplayData;
