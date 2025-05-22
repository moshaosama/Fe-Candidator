import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";

const useGetIsRegister = () => {
  const { Token } = useGetToken();
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    if (!Token) {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, []);

  return { isRegister };
};

export default useGetIsRegister;
