import El from "../../library/El";

const Card = ({
  element = "div",
  
  child,
  title,
  condition,
  price,
  date,
  src,
  ...rest
}) => {
  return El({
    child: [
      El({
        element: "div",
        className:
          "flex border border-gray-300 w-80  p-4 rounded-md items-center",
        child: [
          El({
            element: "div",
            className: "w-7/12 flex flex-col gap-4",
            child: [
              El({
                element: "h2",
                child: title,
              }),
              El({
                element: "div",
                className: "flex flex-col gap-1",
                child: [
                  El({
                    element: "p",
                    className: "text-sm text-gray-600",
                    child: condition,
                  }),
                  El({
                    element: "p",
                    className: "text-sm text-gray-600",
                    child: price,
                  }),
                  El({
                    element: "p",
                    className: "text-sm text-gray-600",
                    child: date,
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-5/12",
            child: [
              El({
                element: "img",
                src: src,
                alt: "image",
                className: "rounded-md w-36 h-36",
              }),
            ],
          }),
        ],
      }),
    ],
    ...rest,
  });
};
export default Card;
