import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
