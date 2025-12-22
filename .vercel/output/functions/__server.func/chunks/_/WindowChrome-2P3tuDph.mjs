import { jsxs, jsx } from "react/jsx-runtime";
function WindowChrome({ children, title }) {
  return /* @__PURE__ */ jsxs("main", { className: "window", children: [
    /* @__PURE__ */ jsxs("header", { className: "title-bar", children: [
      /* @__PURE__ */ jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ jsx("span", { className: "control-btn close" }),
        /* @__PURE__ */ jsx("span", { className: "control-btn minimize" }),
        /* @__PURE__ */ jsx("span", { className: "control-btn maximize" })
      ] }),
      title && /* @__PURE__ */ jsx("span", { className: "window-title", children: title })
    ] }),
    children
  ] });
}
export {
  WindowChrome as W
};
