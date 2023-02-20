import El from "../../library/El";
const variants = {
  search:
    "w-full p-2 bg-gray-100 rounded-md hover:bg-slate-200 focus:border-none",
};
const Input2 = ({ element = "input", child, variant = "search", ...rest }) => {
  return El({
    element: element,
    className: `${variants[variant]} `,
    placeholder: "جستجو در همه آگهی ها",
    type: "text",
    child,
    ...rest,
  });
};
export default Input2;
