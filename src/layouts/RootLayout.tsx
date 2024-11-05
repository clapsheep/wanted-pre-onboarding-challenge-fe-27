import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header isLoggedIn={isAuthenticated} />
      <Outlet />
    </>
  );
};

export default RootLayout;
