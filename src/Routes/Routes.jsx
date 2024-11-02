import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import Cofees from "../Page/Cofees";
import Drashbroad from "../Page/Drashbroad";


const routes=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>error</h1>,
        children:[
           
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/coffees',
                element: <Cofees></Cofees>
            },
            {
                path:'/dashboard',
                element: <Drashbroad></Drashbroad>
            }
        ]
    
    }
])
export default routes