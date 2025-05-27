const JobInsights = () => {
  return (
    <>
      <div className="text-white mt-3 border-2 border-[#432f52] w-[29pc] py-8 rounded-xl  px-10 flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold">Job Insights</h1>
          <p>Based on previously hired candidates</p>
        </div>
        <p className="font-semibold">Years of Experience of previous hires</p>

        <div className="flex flex-col gap-3">
          <p className="font-semibold">Job titles of previous hires</p>
          <div className="text-sm">
            <p>Technical</p>
            <p>Software Engineer</p>
            <p>Senior Software Engineer</p>
            <p>Software Developer</p>
            <p>Senior Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInsights;
