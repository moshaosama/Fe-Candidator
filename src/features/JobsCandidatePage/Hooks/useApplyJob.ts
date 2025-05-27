import { useEffect, useState } from "react";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";
import { useGetToken } from "../../../Hooks/useGetToken";
import useAddCandidate from "../../Stages/Hooks/useAddCandidate";
import { useForm } from "react-hook-form";

export const useApplyJob = () => {
  const { jobByID, jobId } = useGetJobById();
  const [isApply, setIsApply] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const candidatesString = jobByID?.jobs?.result?.[0]?.Candidates;
  const { User } = useGetToken();
  const { onSubmit } = useAddCandidate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect(() => {
    let candidates = [];
    try {
      if (candidatesString) {
        candidates = JSON.parse(candidatesString);
      }
    } catch (error) {
      console.error("Failed to parse candidates JSON:", error);
      candidates = [];
    }
    const result = candidates.filter((el: any) => el.id === User?.result?.id);

    if (result.length > 0) {
      setIsApply(true);
    } else {
      setIsApply(false);
    }
  }, [candidatesString, jobId]);

  useEffect(() => {
    const isLoadingFun = async () => {
      setIsLoading(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(true);
    };

    isLoadingFun();
  }, [jobId]);

  const handleApplyJob = () => {
    onSubmit({
      CandidateID: String(User?.result?.id),
    });
  };

  return {
    isApply,
    candidatesString,
    isLoading,
    handleApplyJob,
    register,
    errors,
    handleSubmit,
  };
};
