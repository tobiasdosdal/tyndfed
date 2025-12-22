import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { W as WindowChrome } from "./WindowChrome-2P3tuDph.mjs";
const PROJECTS = [{
  name: "PL Showet",
  description: "Komplet videoproduktion for Premier League-podcast med ugentlige episoder, grafik og distribution på Youtube og Spotify.",
  icon: "/images/pllogo.png",
  links: [{
    label: "Youtube",
    url: "https://www.youtube.com/@PLShowet"
  }]
}, {
  name: "Bodegalisten",
  description: "Fællesskabsdrevet platform med over 500 danske bodegaer. Brugerratings, anmeldelser og kortfunktion på tværs af iOS-app og responsive webapp.",
  icon: "/images/Icon-83.5@2x.png",
  links: [{
    label: "App Store",
    url: "https://apps.apple.com/dk/app/bodegalisten/id6476145936"
  }, {
    label: "Web",
    url: "https://bodegalisten.dk"
  }]
}, {
  name: "Baobab-kommunikation.dk",
  description: "Skræddersyet hjemmeside til kommunikationsbureau med fokus på hurtig indlæsning, tilgængelighed og en visuel identitet der afspejler deres brand.",
  icon: "/images/baobab-logo.jpg",
  links: [{
    label: "Web",
    url: "https://web.archive.org/web/20250403102638/https://www.baobab-kommunikation.dk/"
  }]
}];
function Projects() {
  return /* @__PURE__ */ jsxs(WindowChrome, { title: "projects.exe", children: [
    /* @__PURE__ */ jsx("nav", { className: "back-nav", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "back-link", children: "← Back to main" }) }),
    /* @__PURE__ */ jsx("section", { className: "projects", children: PROJECTS.map((project) => /* @__PURE__ */ jsxs("article", { className: "project", children: [
      /* @__PURE__ */ jsxs("header", { className: "project-header", children: [
        /* @__PURE__ */ jsx("img", { src: project.icon, alt: project.name, className: "project-icon", loading: "lazy" }),
        /* @__PURE__ */ jsx("h3", { className: "project-title", children: project.name })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "project-description", children: project.description }),
      /* @__PURE__ */ jsx("div", { className: "project-links", children: project.links.map((link) => /* @__PURE__ */ jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "project-link", children: [
        "→ ",
        link.label
      ] }, link.url)) })
    ] }, project.name)) }),
    /* @__PURE__ */ jsx("style", { children: `
        .back-nav {
          padding: 16px 20px;
          border-bottom: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
        }
        
        .back-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 44px;
          padding: 8px 12px;
          margin: -8px -12px;
          border-radius: 6px;
          transition: 
            color 150ms ease,
            background 150ms ease;
        }
        
        .back-link:hover {
          color: var(--text-primary, #e8e8e8);
          background: var(--bg-hover, rgba(255, 255, 255, 0.05));
          text-decoration: none;
        }
        
        .projects {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        
        .project {
          padding: 16px;
          border-radius: 8px;
          background: var(--bg-elevated, #141414);
          border: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          transition: 
            border-color 150ms ease,
            transform 150ms ease;
        }
        
        .project:hover {
          border-color: var(--chrome-border-strong, rgba(255, 255, 255, 0.12));
          transform: translateY(-2px);
        }
        
        .project-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        
        .project-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .project-title {
          color: var(--accent-green, #5af78e);
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        
        .project-description {
          color: var(--text-secondary, #8c8c8c);
          margin: 0 0 12px;
          font-size: 12px;
          line-height: 1.5;
        }
        
        .project-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .project-link {
          color: var(--accent-blue, #5eafff);
          font-size: 11px;
          font-weight: 500;
          padding: 6px 10px;
          min-height: 32px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border-radius: 4px;
          transition: 
            background 150ms ease,
            color 150ms ease;
        }
        
        .project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          color: #7ec4ff;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .projects {
            padding: 16px;
            gap: 12px;
          }
        }
        
        @media (max-width: 480px) {
          .projects {
            padding: 12px;
            grid-template-columns: 1fr;
          }
          
          .back-nav {
            padding: 12px 16px;
          }
          
          .project {
            padding: 14px;
          }
          
          .project-icon {
            width: 28px;
            height: 28px;
          }
        }
      ` })
  ] });
}
export {
  Projects as component
};
