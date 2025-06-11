import AboutProfile from "../../../features/CareerHub/CandidateProfile/Component/AboutProfile";
import DetaiilsProfile from "../../../features/CareerHub/CandidateProfile/Component/DetaiilsProfile";
import EducationProfile from "../../../features/CareerHub/CandidateProfile/Component/EducationProfile";
import HeaderProfile from "../../../features/CareerHub/CandidateProfile/Component/HeaderProfile";
import { ResumesProfile } from "../../../features/CareerHub/CandidateProfile/Component/ResumesProfile";
import SkiilsProfile from "../../../features/CareerHub/CandidateProfile/Component/SkiilsProfile";
import { WorkExperienceProfile } from "../../../features/CareerHub/CandidateProfile/Component/WorkExperienceProfile";


const MyProfile = () => {
  return (
    <>
      <div className="mx-44">
        <HeaderProfile />
        <div className="flex gap-5">
          <div className="w-[70%]">
            <DetaiilsProfile />
            <AboutProfile />
            <SkiilsProfile />
            <WorkExperienceProfile />
            <EducationProfile />
          </div>
          <div className="w-[30%]">
            <ResumesProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
