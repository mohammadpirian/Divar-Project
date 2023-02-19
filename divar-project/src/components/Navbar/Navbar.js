import El from "../../library/El";
import Button from "../Button/Button";
import logo from "../../img/logo.svg";
import Input from "./../Input/Input";

const Navbar = () => {
  return El({
    element: "nav",
    className: "w-screen px-12 flex shadow fixed z-10 bg-white",
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
              
              child: [
                El({
                  element:'img',
                  className:'w-5 ml-2',
                  src:'./src/img/location.png'
                }),
                '36شهر'],
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
              child: [
                El({
                  element:'img',
                  className:'w-5 ml-1',
                  src:'./src/img/user.png'
                }),
                'دیوار من'],
              className:
                "flex p-3 bg-gray-100 rounded-md w-24 justify-center text-gray-500 text-xs text-black font-semibold",
            }),
          }),
          El({
            child: Button({
              variant: "link",
              child: [
                El({
                  element:'img',
                  className:'w-4 ml-2',
                  src:'./src/img/chat.png'
                }),
                'چت'],
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
