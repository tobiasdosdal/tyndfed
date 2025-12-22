import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { W as WindowChrome } from "./WindowChrome-2P3tuDph.mjs";
function NotFound() {
  return /* @__PURE__ */ jsxs(WindowChrome, { children: [
    /* @__PURE__ */ jsxs("section", { className: "error-content", children: [
      /* @__PURE__ */ jsx("div", { className: "error-code", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "error-message", children: "Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "The page you're looking for doesn't exist or has been moved." }),
      /* @__PURE__ */ jsx("pre", { className: "ascii-art", "aria-hidden": "true", children: `
    _______  _______  _______  _______  _______ 
   |       ||       ||       ||       ||       |
   |  _____||    ___||    ___||    ___||    ___|
   | |_____ |   |___ |   |___ |   |___ |   |___ 
   |_____  ||    ___||    ___||    ___||    ___|
    _____| ||   |___ |   |___ |   |___ |   |___
   |_______||_______||_______||_______||_______|
` }),
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "home-link", children: "← Back to Home" }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .error-content {
          text-align: center;
          padding: 40px 20px;
        }
        .error-code {
          font-size: 72px;
          font-weight: bold;
          color: #ff5f56;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(255, 95, 86, 0.5);
        }
        .error-message {
          font-size: 18px;
          margin-bottom: 10px;
          color: #ccc;
          font-weight: 500;
        }
        .error-content > p {
          color: #888;
          margin-bottom: 20px;
        }
        .ascii-art {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          line-height: 1.2;
          color: #666;
          margin: 20px 0;
        }
        .home-link {
          display: inline-block;
          color: #0088ff;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 4px;
          border: 1px solid #0088ff;
          transition: all 0.3s ease;
        }
        .home-link:hover {
          background: rgba(0, 136, 255, 0.1);
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .error-code { font-size: 48px; }
          .error-message { font-size: 16px; }
          .home-link { font-size: 14px; padding: 10px 20px; }
        }
      ` })
  ] });
}
export {
  NotFound as component
};
