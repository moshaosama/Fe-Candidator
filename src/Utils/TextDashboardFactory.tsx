import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import UseGetCompanyByID from "../features/Jobs/Hooks/UseGetCompanyByID";
import useGetJobById from "../features/Jobs/Hooks/useGetJobById";
const TextDashboardFactory = () => {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState(pathname);

  const { CompanyByID } = UseGetCompanyByID();
  const { jobByID } = useGetJobById();

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  if (pathName === "/") {
    return "Users";
  }

  if (/^\/companies\/\d+$/.test(pathName)) {
    return CompanyByID?.company?.result?.[0]?.Name;
  }

  if (/^\/companies\/\d+\/jobs\/\d+$/.test(pathName)) {
    return `${CompanyByID?.company?.result?.[0]?.Name} / ${jobByID?.jobs?.result?.[0]?.JobTitle}`;
  }

  return (
    pathName.slice(1).charAt(0).toUpperCase() + pathName.slice(2).toLowerCase()
  );
};

export default TextDashboardFactory;
