

import { Outlet } from "react-router-dom";
import Footer from "../Componets/Footer";
import Navber from "../Componets/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="hero min-h-[calc(100vh-136px)] w-11/12 mx-auto pb-14">
            <Outlet></Outlet>
            </div>
          
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;