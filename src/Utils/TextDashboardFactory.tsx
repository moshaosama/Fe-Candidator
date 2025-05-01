import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const TextDashboardFactory = () => {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState(pathname);

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  switch (pathName) {
    case "/":
      return "Users";
    default:
      return (
        pathName.slice(1).charAt(0).toUpperCase() +
        pathName.slice(2).toLowerCase()
      );
  }
};

export default TextDashboardFactory;
