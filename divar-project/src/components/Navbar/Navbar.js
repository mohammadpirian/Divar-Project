import El from "../../library/El";
import Button from "../Button/Button";
import logo from "../../img/logo.svg";
import Input from "./../Input/Input";

const Navbar = () => {
  return El({
    element: "nav",
    className: "w-screen px-12 flex shadow",
    child: [
      El({
        element: "div",
        className: "flex py-4 w-1/2 items-center gap-2",
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
              variant: "link2",
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
        className: "flex py-4 w-1/2 items-center  justify-end gap-2",
        child: [
          El({
            child: Button({
              variant: "link2",
              child: "دیوار من",
              className:
                "flex p-3 bg-gray-100 rounded-md w-24 justify-center text-gray-500 text-xs text-black font-semibold",
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
              variant: "link",
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
