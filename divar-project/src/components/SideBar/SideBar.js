import El from "../../library/El";
import Button from "../Button/Button";
const SideBar = () => {
  return El({
    element: "div",
    className: "w-2/12 p-8 flex flex-col ml-10 mt-24 fixed",
    child: [
      El({
        element: "div",
        className:'flex flex-col justify-start items-start gap-2',
        child: [El({ element: "button", child: "دسته ها" }), El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/home.png'
            }),
            'املاک']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/car.png'
            }),
            'وسایل نقلیه']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/phone.png'
            }),
            'کالای دیجیتال']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/lamp.png'
            }),
            'خانه و آشپزخانه']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/brush.png'
            }),
            'خدمات']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/watch.png'
            }),
            'وسایل شخصی']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/dice.png'
            }),
            'سرگرمی و فراغت']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/man.png'
            }),
            'اجتماعی']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/mic.png'
            }),
            'تجهیزات و صنعتی']
        }),
        El({
          element:'button',
          className:"text-gray-500 p-2 hover:text-gray-800 text-sm flex gap-2",
          child:[
            El({
              element:'img',
              className:'w-5',
              src:'./src/img/bag.png'
            }),
            'استخدام و کاریابی']
        }),

      ],
      }),
      El({
        element:'div',
        child:[
          El({
            element:'div',
            className:'bg-gray-300 h-[1px] mt-4',
            child:''
          }),
          El({element:'button',
            className:"text-gray-800 p-2 hover:text-gray-900 text-sm",
          child:'قیمت'
        })
        ]
      }),
      El({
        element:'div',
        child:[
          El({
            element:'div',
            className:'bg-gray-300 h-[1px] mt-4',
            child:''
          }),
          El({element:'button',
            className:"text-gray-800 p-2 hover:text-gray-900 text-sm",
          child:'وضیعت آگهی'
        })
        ]
      })
    ],
  });
};
export default SideBar;
