const getAuth = () => {
  const token = localStorage.getItem("accessToken");
  return {
    isLoggedIn: !!token,
    token,
  };
};

export default getAuth;
