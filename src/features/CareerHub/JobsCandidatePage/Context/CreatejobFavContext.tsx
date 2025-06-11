import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetSavedJobs } from "../../ApplicationCandidator/Hooks/useGetSavedJobs";

import { useDispatch } from "react-redux";
import {
  fetchCreateSavedJob,
  fetchDeleteSavedJob,
} from "../../ApplicationCandidator/Action/CreateSavedJobs";
import { fetchGetSavedJobs } from "../../ApplicationCandidator/Action/getSavedJobs";
import { AppDispatch } from "../../../../Store/store";
import useGetJobById from "../../../Jobs/Hooks/useGetJobById";

interface CreateJobFavContextType {
  isFav: boolean;
  handleTriggerIsLove: (e: any) => void;
}

const CreateJobFavContext = createContext<CreateJobFavContextType | null>(null);

interface CreatejobFavContextProps {
  children: ReactNode;
}

export const CreateJobFavProvider = ({
  children,
}: CreatejobFavContextProps) => {
  const [isFav, setIsFav] = useState(false);
  const { savedJobs } = useGetSavedJobs();
  const { jobByID, jobId } = useGetJobById();
  const dispatch = useDispatch<AppDispatch>();

  const handleTriggerIsLove = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav((prev) => !prev);
    if (!isFav) {
      dispatch(fetchCreateSavedJob(String(jobId!)));
    } else {
      dispatch(fetchDeleteSavedJob(Number(jobId!)));
      await dispatch(fetchGetSavedJobs());
    }
  };

  useEffect(() => {
    const result = savedJobs?.savedJobs?.result?.filter(
      (savedjobs) => jobByID?.jobs?.result?.[0]?.JobTitle === savedjobs.JobTitle
    );
    if (result?.length > 0) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [jobId, jobByID]);

  return (
    <>
      <CreateJobFavContext.Provider value={{ handleTriggerIsLove, isFav }}>
        {children}
      </CreateJobFavContext.Provider>
    </>
  );
};

export const useCreateJobFav = () => {
  const context = useContext(CreateJobFavContext);
  if (!context) {
    throw new Error(
      "useCreateJobFav must be used within a CreateJobFavProvider"
    );
  }
  return context;
};
