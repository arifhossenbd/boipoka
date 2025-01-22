import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root() {
  return (
    <div className="md:w-11/12 lg:w-9/12 mx-auto px-4 space-y-4 md:space-y-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

