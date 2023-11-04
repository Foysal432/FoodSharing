
import { Outlet } from "react-router-dom";
import MainLayout from "../MsinLayout/MainLayout";

const Main = () => {
    return (
        <div className="">  
         <MainLayout>
         <Outlet></Outlet>
         </MainLayout>
        </div>
    );
};

export default Main;