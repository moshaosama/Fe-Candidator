const useLogout = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("User");
    window.localStorage.removeItem("Token");
    window.location.reload();
  };
  return { handleLogout };
};

export default useLogout;
