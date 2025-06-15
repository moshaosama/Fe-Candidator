import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchApplyJob,
  fetchGetApplyJobByCandidate,
} from "../Actions/ApplyJob";
import { useGetToken } from "../../../../Hooks/useGetToken";
import { RootState, AppDispatch } from "../../../../Store/store";
import useGetData from "../../../Jobs/Hooks/useGetData";
import useGetJobById from "../../../Jobs/Hooks/useGetJobById";
import useAddCandidate from "../../../Stages/Hooks/useAddCandidate";

export const useApplyJob = () => {
  const { jobByID, jobId } = useGetJobById();
  const [isLoading, setIsLoading] = useState(false);
  const candidatesString = jobByID?.jobs?.result?.[0]?.Candidates;
  const AppliedJob = useSelector((state: RootState) => state.ApplyJob) as any;
  const [FilterationAppliedJob, setFilterationAppliedJob] = useState<[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const { Jobs } = useGetData();
  const { User } = useGetToken();
  const { onSubmit } = useAddCandidate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    dispatch(fetchGetApplyJobByCandidate(User?.result?.id));
  }, [dispatch]);

  useEffect(() => {
    const filteredJobs = Jobs?.jobs?.result.filter((job) =>
      AppliedJob?.ApplyJob?.result?.some(
        (appliedJob: any) => appliedJob.jobId === job.id
      )
    ) as any;

    setFilterationAppliedJob(filteredJobs);
  }, [Jobs, AppliedJob]);

  useEffect(() => {
    const isLoadingFun = async () => {
      setIsLoading(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(true);
    };

    isLoadingFun();
  }, [jobId]);

  const handleApplyJob = () => {
    dispatch(
      fetchApplyJob({
        jobId: jobId,
        candidateId: User?.result?.id,
      })
    );
  };

  return {
    candidatesString,
    isLoading,
    handleApplyJob,
    FilterationAppliedJob,
    AppliedJob,
    register,
    errors,
    handleSubmit,
  };
};
