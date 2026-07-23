import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-DeB-K_98.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPinned = createLucideIcon("MapPinned", [
  [
    "path",
    {
      d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
      key: "11u0oz"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
      key: "q8zwxj"
    }
  ]
]);
const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5427459120897!2d91.71784127516659!3d25.28596287765399!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37508d65132ae3d3%3A0xa25a987f6dded73!2sUmpohliew%20Guest%20House!5e0!3m2!1sen!2sin!4v1781605934368!5m2!1sen!2sin";
const OPEN_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Umpohliew%20Guest%20House%20Meghalaya";
function ResponsiveMap({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[1.5rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 sm:flex sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-1 text-sm font-bold text-slate-600 dark:text-slate-300", children: "Umpohliew Guest House, Meghalaya" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: OPEN_MAP_URL, target: "_blank", rel: "noreferrer", className: "btn btn-primary w-full sm:w-auto", children: [
        "Open in Google Maps ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 18 })
      ] })
    ] })
  ] });
}
export {
  ExternalLink as E,
  MapPinned as M,
  ResponsiveMap as R,
  MAP_URL as a
};
