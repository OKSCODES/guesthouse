import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-DeB-K_98.js";
import { M as MapPinned, a as MAP_URL, E as ExternalLink } from "./ResponsiveMap-C6BXbu1s.js";
import { a as attractions } from "./siteData-BYS6-c-N.js";
import { u as useSeo } from "./useSeo-Bwd8_-Cw.js";
import { S as ShieldCheck } from "./shield-check-B51roLOn.js";
import { U as Users } from "./users-CHngSaTd.js";
import { S as Sparkles, M as Mountain } from "./sparkles-CrOjMz5q.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HeartHandshake = createLucideIcon("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "4oyue0"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
]);
const GOOGLE_MAPS_OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Umpohliew%20Guest%20House%2C%20Meghalaya";
function MapSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[2rem] bg-white p-5 shadow-premium dark:bg-slate-900 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { size: 17 }),
        " Find Us"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-[28px] font-black leading-tight sm:text-4xl", children: "Umpohliew Guest House" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: "Umpohliew Guest House, Meghalaya" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[1.75rem] bg-slate-100 dark:bg-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Umpohliew Guest House Google Map",
        src: MAP_URL,
        width: "100%",
        height: "250",
        style: { border: 0 },
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        className: "block h-[250px] w-full sm:h-[320px] lg:h-[400px]"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GOOGLE_MAPS_OPEN_URL, target: "_blank", rel: "noreferrer", className: "btn btn-primary mt-5 w-full", children: [
      "Open in Google Maps ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 20 })
    ] })
  ] });
}
function About() {
  useSeo({ title: "About | Umpohliew Guest House", description: "Story and location advantages of Umpohliew Guest House Meghalaya." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { size: 17 }),
          " About"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-title mt-4", children: "A peaceful home near Sohra" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300", children: "Umpohliew Guest House is designed for travellers who want a calm, nature-connected stay in Meghalaya. The guest house offers clean rooms, friendly hospitality and easy access to Sohra tourist spots." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reason, { icon: ShieldCheck, title: "Clean comfort", text: "Simple, tidy rooms for restful nights." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reason, { icon: Users, title: "Family friendly", text: "Room options for couples, families and groups." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80", alt: "Meghalaya hills", loading: "lazy", className: "h-64 w-full rounded-[2rem] object-cover shadow-soft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80", alt: "Nature surroundings", loading: "lazy", className: "mt-10 h-64 w-full rounded-[2rem] object-cover shadow-soft" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-[#f5efe6] dark:bg-slate-900/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 17 }),
          " Stay experience"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "Local warmth with easy access to Meghalaya nature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4", children: "Stay close to waterfalls, viewpoints, caves and peaceful village surroundings while enjoying direct support from the guest house." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: Mountain, title: "Nature-first stay", text: "Built around calm surroundings, fresh air and a slow travel experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: MapPinned, title: "Near attractions", text: "Convenient base for Sohra routes, waterfalls and viewpoints." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: HeartHandshake, title: "Helpful guidance", text: "Get local guidance for travel timing, food and nearby places." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { size: 17 }),
          " Nearby"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "Explore Sohra and Cherrapunji routes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: attractions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-badge bg-white dark:bg-slate-900", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[24px] font-black", children: "Location advantages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-8 text-slate-700 dark:text-slate-300", children: "The guest house is positioned for travellers who want quick access to Meghalaya’s nature spots while staying away from noisy, crowded areas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-4", children: ["Near popular Sohra / Cherrapunji attractions", "Comfortable rooms for families and groups", "Local food and travel guidance available"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-base font-bold leading-7 text-slate-700 dark:text-slate-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 22, className: "mt-0.5 shrink-0 text-forest dark:text-emerald-300" }),
          " ",
          item
        ] }, item)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapSection, {}) }) })
  ] });
}
function Reason({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: "text-forest dark:text-emerald-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[20px] font-black", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: text })
  ] });
}
function Feature({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 27 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[20px] font-black", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300", children: text })
  ] });
}
export {
  About as default
};
