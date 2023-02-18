import El from "../../library/El";

const variants = {
  contained:
    "flex justify-center bg-red-700 text-white-me p-3  rounded-md w-28 hover:bg-red-600 hover:font-semibold",
  outlined: " border border-2 text-blue-700 font-bold border-blue-700 text-lg",
  link: "flex bg-transparent p-3 hover:bg-slate-200 rounded-md w-24 justify-center text-gray-500 hover:text-black hover:font-semibold",
  link2:"flex bg-transparent p-3 hover:bg-slate-200 rounded-md w-28 justify-center text-gray-500 hover:text-black hover:font-semibold",
  link3:"flex bg-transparent p-3 hover:bg-slate-200 rounded-md w-32 justify-center text-gray-500 hover:text-black hover:font-semibold",
};

const Button = ({
  element = "button",
  child,
  variant = "contained",
  ...rest
}) => {
  return El({
    element: element,
    className: `${variants[variant]} inline-block rounded-md text-sm py-2 px-6`,
    child,
    ...rest,
  });
};

export default Button;
