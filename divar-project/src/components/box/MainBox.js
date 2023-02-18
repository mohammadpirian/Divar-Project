import El from "../../library/El";
import DivCard from "../DivCard/DivCard";

const MainBox= () => {
    return El({
        element:'div',
        className:'flex w-9/12 bg-gray-100 gap-4 flex-wrap',
        child:[DivCard(),]
      
    });
   
  };
  export default MainBox;