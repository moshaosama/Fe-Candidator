import { useHasAccountContext } from "../Context/useHasAccountContext";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";

const HasAccountFactory = () => {
  const { hasAccount } = useHasAccountContext();

  if (hasAccount) {
    return <Login />;
  } else {
    return <SignUp />;
  }
};

export default HasAccountFactory;
