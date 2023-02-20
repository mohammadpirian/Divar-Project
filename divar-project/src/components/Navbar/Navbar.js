import El from "../../library/El";
import Button from "../Button/Button";
import logo from "../../img/logo.svg";
import Input from "./../Input/Input";
import Input2 from "../input/Input2";

const Navbar = () => {
  return El({
    element: "nav",
    className: "w-screen lg:px-12 xsm:py-2 flex xsm:flex-col justify-center shadow fixed z-10 bg-white ",
    child: [
      El({
        element: "div",
        className: "flex py-4 w-1/2 items-center gap-2 xsm:hidden",
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
        className: "flex py-4 w-1/2 items-center  justify-end gap-2 xsm:hidden",
        child: [
          El({
            child: Button({
              variant: "link4",
              child: [
                El({
                  element:'img',
                  className:'w-5 ml-1',
                  src:'./src/img/user.png'
                }),
                'دیوار من'],
              // className:
              //   "flex p-3 bg-gray-100 rounded-md w-24 justify-center text-gray-500 text-xs text-black font-semibold",
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
      El({
        element:'div',
        className:'lg:hidden w-full px-2 py-1',
        child:[ Input2({
            element: "input",
            variant: "search",}),
            El({
              element:'button',
              className:'absolute left-8 top-5 text-gray-500',
              child:"| تهران"
            }),
            El({
              element:'img',
              className:'absolute left-3 top-[21px] w-5',
              src:'./src/img/location.png'
            })


        ]
      }),
      El({
        element:'div',
        className:'lg:hidden w-full px-2 py-1 flex gap-2 overflow-x-scroll',
        child:[ Button({
          variant:'outlined',
          child:'فیلتر ها'
        }),
        Button({
          variant:'outlined',
          child:'دسته ها'
        }),
        Button({
          variant:'outlined',
          child:'خودرو سازی'
        }),
        Button({
          variant:'outlined',
          child:'فروش آپارتمان'
        }),
        Button({
          variant:'outlined',
          child:'اجاره آپارتمان'
        }),
        Button({
          variant:'outlined',
          child:'موبایل'
        }),
        Button({
          variant:'outlined',
          child:'صندلی و نیمکت'
        }),
          ]
      })
    ],
  });
};
export default Navbar;
