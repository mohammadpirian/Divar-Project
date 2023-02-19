import El from "../../library/El";
import DivCard from "../DivCard/DivCard";
import SideBar from "../SideBar/SideBar";

const MainBox= () => {
    return El({
        element:'div',
        className:'flex w-full bg-gray-100 gap-4 ',
        child:[SideBar(),DivCard(),]
      
    });
   
  };
  export default MainBox;