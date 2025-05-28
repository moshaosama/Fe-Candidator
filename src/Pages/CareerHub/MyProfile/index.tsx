import AboutProfile from "../../../features/CandidateProfile/Component/AboutProfile";
import DetaiilsProfile from "../../../features/CandidateProfile/Component/DetaiilsProfile";
import EducationProfile from "../../../features/CandidateProfile/Component/EducationProfile";
import HeaderProfile from "../../../features/CandidateProfile/Component/HeaderProfile";
import { ResumesProfile } from "../../../features/CandidateProfile/Component/ResumesProfile";
import SkiilsProfile from "../../../features/CandidateProfile/Component/SkiilsProfile";
import { WorkExperienceProfile } from "../../../features/CandidateProfile/Component/WorkExperienceProfile";

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
