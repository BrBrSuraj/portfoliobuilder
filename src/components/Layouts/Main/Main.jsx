import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="">
          <Sidebar></Sidebar>
        </div>

        {/* Main content container */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <div className="">
            <Navbar></Navbar>
          </div>

          {/* Content */}
          <div className="flex-1 flex">
            <Outlet></Outlet>
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
