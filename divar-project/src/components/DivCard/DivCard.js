import Card from "../Card/Card";
import El from "../../library/El";
import img from "../../DB/img/1.jpg";
import DB from "../../DB/data/DB";

const DivCard = () => {
  return El({
      element:'div',
      className:'flex flex-wrap gap-3 w-full py-16 xsm:mr-0 w-9/12 mt-12 xsm:mt-16 mr-72 xsm:mr-0 xsm:justify-center',
    child: DB.map((item)=>Card(item))
  });
  // let database = DB.map((item) => {
    // Card({
      //   title: item.title,
      //   condition: item.condition,
      //   price: item.price,
      //   date: item.date,
      //   src: item.img,
      // }),
  // });
  // console.log(database);
  // return database

  // return El({
  //   element: "nav",
  //   className: "w-screen px-12 flex shadow",
  //   child: [
  //     Card({
  //       title: "اسباب بازی",
  //       condition: "درحد نو",
  //       price: "30000 تومان",
  //       date: " لحظاتی پیش",
  //       src: img,
  //     }),
  //   ],
  // });
};
export default DivCard;
