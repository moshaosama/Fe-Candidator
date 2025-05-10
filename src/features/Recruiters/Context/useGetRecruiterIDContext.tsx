import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

const GetRecruiterIDContext = createContext<any>(null);

interface useGetRecruiterIDProviderProps {
  children: ReactNode;
}

const GetRecruiterIDProvider = ({
  children,
}: useGetRecruiterIDProviderProps) => {
  const [id, setId] = useState<number | null>(null);

  const handleGetId = useCallback(
    (id: number) => {
      setId(id);
    },
    [id]
  );
  return (
    <GetRecruiterIDContext.Provider value={{ handleGetId, id }}>
      {children}
    </GetRecruiterIDContext.Provider>
  );
};

export default GetRecruiterIDProvider;

export const useGetRecruiterIDContext = () => useContext(GetRecruiterIDContext);
