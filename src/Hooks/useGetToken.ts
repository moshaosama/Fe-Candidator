export const useGetToken = () => {
  const Token = window.localStorage.getItem("Token");
  let User = null;

  try {
    const userFromStorage = window.localStorage.getItem("User");
    if (userFromStorage) {
      User = JSON.parse(userFromStorage);
    }
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
  }

  return { Token, User };
};
