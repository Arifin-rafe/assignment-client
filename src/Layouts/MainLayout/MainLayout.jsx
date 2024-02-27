import { Outlet } from "react-router-dom";
// import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import { NavBarII } from "../../Shared/NavBarII/NavBarII.JSX";

const MainLayout = () => {
    return (
        <div>         
            <NavBarII></NavBarII>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;