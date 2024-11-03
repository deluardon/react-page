import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Componets/Banner";
import Hedding from "../Componets/Hedding";
import Category from "../Componets/Category";



const Home = () => {
    const category=useLoaderData();
    return (
  
  
    <div className="w-full mx-auto">
        <Banner ></Banner>
    
    <Hedding tittle={"Our Coffee"} subtittle={"What's New"}></Hedding>

    <Category category={category}></Category>
    <Outlet></Outlet>





    </div>
     
     
     
    
      
    );
};

export default Home;