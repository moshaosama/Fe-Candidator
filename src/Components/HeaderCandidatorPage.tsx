interface HeaderCandidatorPageProps {
  Title: string;
}

export const HeaderCandidatorPage = (props: HeaderCandidatorPageProps) => {
  return (
    <div>
      <div className="bg-[#432f52] w-full -mt-5 h-32 flex items-center">
        <h1 className="text-4xl font-bold ml-44 text-white">{props.Title}</h1>
      </div>
    </div>
  );
};
