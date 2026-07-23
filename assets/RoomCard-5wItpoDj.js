import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, B as BedDouble, L as Link } from "./index-DN0yzujq.js";
import { U as Users } from "./users-D92lYDyc.js";
import { W as Wifi } from "./wifi-CuY-HUPG.js";
import { S as ShieldCheck } from "./shield-check-xlpBIdH-.js";
import { C as CircleCheck } from "./circle-check-DO9K5fvI.js";
import { A as ArrowRight } from "./arrow-right-GHulhS-z.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
const fallbackImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80";
function RoomCard({ room, compact = false, selected = false, onSelect }) {
  var _a;
  const image = room.img || ((_a = room.images) == null ? void 0 : _a[0]) || fallbackImage;
  const rating = room.rating || "4.8";
  const reviews = room.reviews || "120+";
  const bed = room.bed || room.bedType || (room.guests > 3 ? "2 beds" : "Queen bed");
  const description = room.description || "A clean, calm and comfortable room designed for a peaceful Meghalaya stay.";
  const CardContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      whileHover: { y: -6 },
      whileTap: { scale: 0.985 },
      className: `group h-full overflow-hidden rounded-[2rem] border bg-white shadow-soft transition dark:border-slate-800 dark:bg-slate-900 ${selected ? "border-forest ring-4 ring-emerald-700/15" : "border-[#e6e1d8]"} ${compact ? "w-[86vw] max-w-[360px] shrink-0 sm:w-auto sm:max-w-none" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              srcSet: `${image}&w=480 480w, ${image}&w=900 900w, ${image}&w=1200 1200w`,
              sizes: "(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 33vw",
              alt: room.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-white/95 px-4 text-base font-black text-forest shadow-lg backdrop-blur dark:bg-slate-950/90 dark:text-emerald-300", children: [
            "₹",
            Number(room.price || 0).toLocaleString("en-IN"),
            "/night"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute bottom-4 left-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/95 px-4 text-base font-black text-slate-900 shadow-lg backdrop-blur dark:bg-slate-950/90 dark:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, className: "fill-[#d4a95d] text-[#d4a95d]" }),
            " ",
            rating,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-500 dark:text-slate-300", children: [
              "(",
              reviews,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl", children: room.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-50 px-3 py-2 text-sm font-black text-forest dark:bg-emerald-950/40 dark:text-emerald-200", children: "Available" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: Users, label: `Up to ${room.guests || 2} guests` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: BedDouble, label: bed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: Wifi, label: "Fast Wi-Fi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: ShieldCheck, label: "Verified stay" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: (room.amenities || []).slice(0, 4).map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex min-h-9 items-center rounded-full bg-[#f5efe6] px-3 text-sm font-extrabold text-[#143f2c] dark:bg-slate-800 dark:text-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 15, className: "mr-1.5 text-[#d4a95d]" }),
            " ",
            amenity
          ] }, amenity)) }),
          onSelect ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => onSelect(room.id), className: "btn btn-primary w-full", children: [
            selected ? "Selected Room" : "Select Room",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/booking?room=${room.id}`, className: "btn btn-primary w-full", children: [
            "Book Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
          ] })
        ] })
      ]
    }
  );
  return CardContent;
}
function Meta({ icon: Icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-12 items-center gap-2 rounded-2xl bg-slate-50 px-3 text-base font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 19, className: "shrink-0 text-forest dark:text-emerald-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: label })
  ] });
}
export {
  RoomCard as R,
  Star as S
};
