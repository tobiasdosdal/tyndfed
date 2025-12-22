import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const appCss = "/assets/app-DgyRmK7d.css";
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "color-scheme", content: "dark" },
      { name: "description", content: "Tyndfed - Creative development studio specializing in mobile apps, websites, and digital design." },
      { name: "author", content: "Tobias Dosdal-Feddersen" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tyndfed.dk/" },
      { property: "og:title", content: "Tyndfed - Creative Development Studio" },
      { property: "og:description", content: "Danish development studio creating innovative mobile apps and websites." },
      { property: "og:image", content: "https://tyndfed.dk/images/tyndfed.svg" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/images/tyndfed.svg" },
      { rel: "apple-touch-icon", href: "/images/tyndfed.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./projects-a3EfiCQt.mjs");
const Route$3 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Tyndfed - Projects"
    }, {
      name: "description",
      content: "View Tyndfed's portfolio of innovative projects including Border Genius, Bodegalisten, HabitHero, and more."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./privacy-BsmrDB6c.mjs");
const Route$2 = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Tyndfed - Privacy Policy & Terms of Service"
    }, {
      name: "description",
      content: "Privacy Policy and Terms of Service for Tyndfed apps and services."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./_-B6U8IU0g.mjs");
const Route$1 = createFileRoute("/$")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "404 - Page Not Found | Tyndfed"
    }, {
      name: "robots",
      content: "noindex, follow"
    }]
  })
});
const $$splitComponentImporter = () => import("./index-8M1Jy2Dz.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$4
});
const PrivacyRoute = Route$2.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$4
});
const SplatRoute = Route$1.update({
  id: "/$",
  path: "/$",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  SplatRoute,
  PrivacyRoute,
  ProjectsRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
export {
  getRouter
};
