import Card from "../Card/Card";
import pic from '../../img/product/1.jpg'
const DivCard = () => {
    return El({
      element: "nav",
      className: "w-screen px-12 flex shadow",
      child: [
        Card({
            title:'اسباب بازی',
            condition:'درحد نو',
            price:'30000 تومان',
            date:' لحظاتی پیش',
            src:pic,
        })
      ]
    })
}
export default DivCard;
