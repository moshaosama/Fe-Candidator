import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";

const useGetIsRegister = () => {
  const { Token } = useGetToken();
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    if (!Token) {
      setIsRegister(false);
    } else {
      setIsRegister(true);
    }
  }, []);

  return { isRegister };
};

export default useGetIsRegister;
