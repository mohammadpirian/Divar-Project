import Card from "../Card/Card";
import El from "../../library/El";
import img from "../../DB/img/1.jpg";
import DB from "../../DB/data/DB";

const DivCard = () => {
  return El({
      element:'div',
      className:'flex flex-wrap gap-4 w-screen p-4',
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
