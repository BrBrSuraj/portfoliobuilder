import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block bg-appBackground">
          <Sidebar></Sidebar>
        </div>

        {/* Main content container */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <div className="">
            <Navbar></Navbar>
          </div>

          {/* Content */}
          <div className="flex-1 flex w-full">
            <div className="w-full">
            <Outlet></Outlet>
            </div>
           
          </div>

          {/* Footer */}
          <div className="mt-auto border-">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
