import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { W as WindowChrome } from "./WindowChrome-2P3tuDph.mjs";
import { useState, useCallback, useEffect } from "react";
const container = "_container_4tiw3_1";
const wrapper = "_wrapper_4tiw3_11";
const art = "_art_4tiw3_16";
const cursor = "_cursor_4tiw3_31";
const hidden = "_hidden_4tiw3_43";
const styles = {
  container,
  wrapper,
  art,
  cursor,
  hidden
};
const LOGO = `    ███     ▄██   ▄   ███▄▄▄▄   ████████▄     ▄████████  ▄████████ ████████▄
▀█████████▄ ███   ██▄ ███▀▀▀██▄ ███   ▀███   ███    ███ ███    ███ ███   ▀███
   ▀███▀▀██ ███▄▄▄███ ███   ███ ███    ███   ███    █▀  ███    █▀  ███    ███
    ███   ▀ ▀▀▀▀▀▀███ ███   ███ ███    ███  ▄███▄▄▄    ▄███▄▄▄     ███    ███
    ███     ▄██   ███ ███   ███ ███    ███ ▀▀███▀▀▀   ▀▀███▀▀▀     ███    ███
    ███     ███   ███ ███   ███ ███    ███   ███        ███    █▄  ███    ███
    ███     ███   ███ ███   ███ ███   ▄███   ███        ███    ███ ███   ▄███
   ▄████▀    ▀█████▀   ▀█   █▀  ████████▀    ███        ██████████ ████████▀`;
function AsciiLogo() {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const getTypeDelay = useCallback((char, index) => {
    if (char === "\n") return 20;
    if (char === " ") return 1;
    const burst = Math.sin(index * 0.1) > 0.7;
    return burst ? 0.5 : 2;
  }, []);
  useEffect(() => {
    if (displayedChars >= LOGO.length) {
      setIsComplete(true);
      const timer2 = setTimeout(() => setShowCursor(false), 1500);
      return () => clearTimeout(timer2);
    }
    const char = LOGO[displayedChars];
    const delay = getTypeDelay(char, displayedChars);
    const timer = setTimeout(() => {
      setDisplayedChars((d) => d + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [displayedChars, getTypeDelay]);
  const content = LOGO.slice(0, displayedChars);
  return /* @__PURE__ */ jsx("section", { className: styles.container, children: /* @__PURE__ */ jsx("div", { className: styles.wrapper, children: /* @__PURE__ */ jsxs("pre", { className: styles.art, children: [
    content,
    /* @__PURE__ */ jsx("span", { className: `${styles.cursor} ${isComplete && !showCursor ? styles.hidden : ""}` })
  ] }) }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(WindowChrome, { children: [
    /* @__PURE__ */ jsx(AsciiLogo, {}),
    /* @__PURE__ */ jsxs("footer", { className: "description", children: [
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx(Link, { to: "/projects", className: "project-link", children: "→ View Projects" }) }),
      /* @__PURE__ */ jsxs("div", { className: "contact-info", children: [
        /* @__PURE__ */ jsx("p", { children: "© 2025 Tyndfed. All rights reserved." }),
        /* @__PURE__ */ jsx("p", { children: "CVR: 39125307" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "mailto:kontakt@tyndfed.dk", children: "kontakt@tyndfed.dk" }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "privacy-link", children: "Privacy & Terms" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .description {
          text-align: center;
          padding: 24px 20px 32px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(20, 20, 20, 0.3) 100%
          );
        }
        
        .description nav {
          margin-bottom: 20px;
        }
        
        .project-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: var(--accent-blue, #5eafff);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 12px 24px;
          border-radius: 6px;
          min-height: 44px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border: 1px solid rgba(94, 175, 255, 0.15);
          transition: 
            background 150ms ease,
            border-color 150ms ease,
            transform 150ms ease;
        }
        
        .project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          border-color: rgba(94, 175, 255, 0.25);
          transform: translateY(-1px);
          text-decoration: none;
        }
        
        .project-link:active {
          transform: translateY(0);
        }
        
        .contact-info {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          line-height: 1.8;
        }
        
        .contact-info p {
          margin: 0;
        }
        
        .contact-info a {
          color: var(--text-secondary, #8c8c8c);
          transition: color 150ms ease;
        }
        
        .contact-info a:hover,
        .privacy-link:hover {
          color: var(--accent-blue, #5eafff);
        }
        
        .privacy-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 11px;
        }
        
        @media (max-width: 480px) {
          .description {
            padding: 20px 16px 24px;
          }
          
          .project-link {
            font-size: 12px;
            padding: 10px 20px;
          }
          
          .contact-info {
            font-size: 11px;
          }
        }
      ` })
  ] });
}
export {
  Home as component
};
