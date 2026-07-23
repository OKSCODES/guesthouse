import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, X } from "./index-DeB-K_98.js";
import { g as gallery } from "./siteData-BYS6-c-N.js";
import { u as useSeo } from "./useSeo-Bwd8_-Cw.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Camera = createLucideIcon("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
const categories = ["All", "Rooms", "Exterior", "Surroundings"];
function Gallery() {
  useSeo({ title: "Gallery | Umpohliew Guest House", description: "Rooms, exterior and surroundings gallery." });
  const [active, setActive] = reactExports.useState("All");
  const [preview, setPreview] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => active === "All" ? gallery : gallery.filter((item) => item.cat === active), [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 17 }),
        " Gallery"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-title mt-4", children: "A Glimpse of Umpohliew" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4 max-w-2xl", children: "Explore rooms, exterior views and the calm surroundings that make the stay feel close to nature." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-7 flex gap-3 overflow-x-auto pb-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActive(cat), className: `min-h-12 shrink-0 rounded-full px-5 text-base font-black transition active:scale-95 ${active === cat ? "bg-forest text-white shadow-lg shadow-emerald-900/20" : "bg-white text-slate-700 shadow-soft dark:bg-slate-900 dark:text-slate-200"}`, children: cat }, cat)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx columns-1 gap-6 sm:columns-2 lg:columns-3", children: filtered.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        type: "button",
        onClick: () => setPreview(item),
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "group mb-6 block w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-soft dark:bg-slate-900",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.cat, loading: "lazy", className: `${index % 3 === 0 ? "h-80" : "h-64"} w-full object-cover transition duration-700 group-hover:scale-105` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-white/90 px-4 text-base font-black text-forest backdrop-blur dark:bg-slate-950/85 dark:text-emerald-200", children: item.cat })
        ] })
      },
      `${item.src}-${index}`
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: preview && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-[80] grid place-items-center bg-black/82 p-5 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPreview(null), className: "absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl", "aria-label": "Close image preview", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 27 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { scale: 0.96, y: 20 }, animate: { scale: 1, y: 0 }, exit: { scale: 0.96, y: 20 }, className: "w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview.src, alt: preview.cat, className: "max-h-[76vh] w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[20px] font-black", children: preview.cat }) })
      ] })
    ] }) })
  ] });
}
export {
  Gallery as default
};
