import El from "../../library/El";
import DivCard from "../DivCard/DivCard";
import SideBar from "../SideBar/SideBar";

const MainBox= () => {
    return El({
        element:'div',
        className:'flex w-full',
        child:[SideBar(),DivCard(),]
      
    });
   
  };
  export default MainBox;