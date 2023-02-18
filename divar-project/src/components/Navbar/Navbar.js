import El from "../../library/El";
import Button from "../Button/Button";
import hamber from "../../img/hamburger.png";
import logo from "../../img/logo.svg";
import Input from "./../Input/Input";

const Navbar = () => {
  return El({
    element: "nav",
    className: "w-screen px-12 flex shadow",
    child: [
      El({
        element: "div",
        className: "flex py-4 w-screen items-center ",
        child: [
          El({
            element: "a",
            href: "#",
            className: "px-2",
            child: [
              El({
                element: "img",
                src: logo,
                alt: "divar logo",
                className: "w-12",
              }),
            ],
          }),
          El({
            child: Button({
              element: "button",
              variant: "link",
              child: "36 شهر",
            }),
          }),
          El({
            child: Button({
              element: "button",
              variant: "link3",
              child: "دسته ها ⫸",
            }),
          }),
          El({
            child: Input({
              element: "input",
              variant: "search",
            }),
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex py-4 w-screen items-center  justify-end",
        child: [
          El({
            child: Button({
              variant: "link2",
              child: "دیوار من",
            }),
          }),
          El({
            child: Button({
              variant: "link",
              child: "چت",
            }),
          }),
          El({
            child: Button({
              variant: "link2",
              child: "پشتیبانی",
            }),
          }),
          El({
            child: Button({
              variant: "contained",
              child: "ثبت آگهی",
            }),
          }),
        ],
      }),
    ],
  });
};
export default Navbar;
