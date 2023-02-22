import El from "../../library/El";
import DivCard from "../DivCard/DivCard";
import SideBar from "../SideBar/SideBar";
import BottomNav from "../BottomNav/BottomNav";

const MainBox= () => {
    return El({
        element:'div',
        className:'flex w-full',
        child:[SideBar(),DivCard(),BottomNav()]
      
    });
   
  };
  export default MainBox;