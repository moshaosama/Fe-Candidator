import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetSavedJobs } from "../../ApplicationCandidator/Hooks/useGetSavedJobs";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import { fetchCreateSavedJob } from "../../ApplicationCandidator/Action/CreateSavedJobs";

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

  const handleTriggerIsLove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav((prev) => !prev);
    if (!isFav) {
      dispatch(fetchCreateSavedJob(String(jobId!)));
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
