import Header from "@/components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

interface LoaderData {
  isLoggedIn: boolean;
}

const RootLayout = () => {
  const { isLoggedIn } = useLoaderData() as LoaderData;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
    </>
  );
};

export default RootLayout;
