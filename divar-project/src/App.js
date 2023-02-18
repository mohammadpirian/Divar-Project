import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import DivCard from "./components/DivCard/DivCard";
import BoxCards from "./components/box/MainBox";

import El from "./library/El";
const App = () => {
  const app = El({
    element: "div",
    classNme: "w-screen ",
    child: [Navbar(), BoxCards()],
  });
  return Container(app);
};

export default App;
