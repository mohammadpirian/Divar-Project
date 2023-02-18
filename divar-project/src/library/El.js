const El = ({ element, child, ...reset }) => {
  const el = document.createElement(element);
  for (const key in reset) {
    el[key] = reset[key];
  }
  Array.isArray(child) ? el.append(...child) : el.append(child);
  return el;
};

export default El;

