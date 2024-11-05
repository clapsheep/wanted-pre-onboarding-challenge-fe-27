import { HomeForNotLogin, Home } from "@/components";
import { useAuth } from "@/contexts/AuthContext";

const HomeElement = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Home /> : <HomeForNotLogin />;
};

export default HomeElement;
