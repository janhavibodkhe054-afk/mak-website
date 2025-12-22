import { Outlet, useNavigation } from "react-router-dom";

import Footer from "./Footer"; // ✅ works
import Header from "./Header";
import Loading from "./Loading"; // default export

// default export
  // default export


const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
