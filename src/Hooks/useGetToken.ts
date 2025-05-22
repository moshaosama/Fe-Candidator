export const useGetToken = () => {
  const Token = window.localStorage.getItem("Token");

  return { Token };
};
