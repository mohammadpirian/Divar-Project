import El from "../../library/El";
import Button from "../Button/Button";
import Input from "../Input/Input";

const BottomNav = () => {
  return El({
    element: "nav",
    className: "w-screen h-12 flex lg:hidden  z-10 bottom-0 fixed",
    child: [
      El({
        element: "div",
        className:
          "flex w-screen justify-between px-4 py-2 items-center bg-white shadow self-end",
        child: [
          El({
            element: "button",
            className:
              "flex flex-col justify-center items-center h-12 w-12 text-xs text-red-800",
            child: [
              El({
                element: "img",
                src: "./src/img/logo.svg",
              }),
              "آگهی‌ها",
            ],
          }),
          El({
            element: "button",
            className:
              "flex flex-col justify-center items-center h-12 w-12 text-xs",
            child: [
              El({
                element: "img",
                src: "./src/img/lists.png",
              }),
              "دسته‌ها",
            ],
          }),
          El({
            element: "button",
            className:
              "flex flex-col justify-center items-center h-12 w-12 text-xs",
            child: [
              El({
                element: "img",
                src: "./src/img/add.png",
              }),
              "ثبت‌آگهی",
            ],
          }),
          El({
            element: "button",
            className:
              "flex flex-col justify-center items-center h-12 w-12 text-xs",
            child: [
              El({
                element: "img",
                className: "w-6",
                src: "./src/img/chat.png",
              }),
              "چت",
            ],
          }),
          El({
            element: "button",
            className:
              "flex flex-col justify-center items-center h-12 w-12 text-xs ",
            child: [
              El({
                element: "img",
                className: "w-6",
                src: "./src/img/user.png",
              }),
              "دیوار‌من",
            ],
          }),
        ],
      }),
    ],
  });
};
export default BottomNav;
