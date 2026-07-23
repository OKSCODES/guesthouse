import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as BedDouble, S as Skeleton, z as zt } from "./index-DeB-K_98.js";
import { S as Star, R as RoomCard } from "./RoomCard-DYSNNjn9.js";
import { r as rooms } from "./siteData-BYS6-c-N.js";
import { u as useSeo } from "./useSeo-Bwd8_-Cw.js";
import { s as subscribeRooms } from "./roomService-099n4Hq_.js";
import { S as ShieldCheck } from "./shield-check-B51roLOn.js";
import "./users-CHngSaTd.js";
import "./wifi-CtD81jFq.js";
import "./circle-check-B8lDKDB6.js";
import "./arrow-right-PPLnOfPb.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
function Rooms() {
  useSeo({ title: "Rooms & Pricing | Umpohliew Guest House", description: "Standard, Deluxe and Family rooms at Umpohliew Guest House." });
  const [rooms$1, setRooms] = reactExports.useState(rooms);
  const [loading, setLoading] = reactExports.useState(true);
  const [guestFilter, setGuestFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    const unsubscribe = subscribeRooms(
      (items) => {
        setRooms(items.length > 0 ? items : rooms);
        setLoading(false);
      },
      () => {
        zt.error("Showing default rooms. Firebase rooms could not load.");
        setRooms(rooms);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);
  const filteredRooms = reactExports.useMemo(() => {
    if (guestFilter === "all") return rooms$1;
    const minGuests = Number(guestFilter);
    return rooms$1.filter((room) => Number(room.guests || 2) >= minGuests);
  }, [rooms$1, guestFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 17 }),
            " Rooms"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-title mt-4", children: "Rooms & Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4 max-w-2xl", children: "Airbnb-style room cards with clear pricing, amenities and direct booking for a peaceful Meghalaya stay." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-4 shadow-soft dark:bg-slate-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "app-label mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { size: 17 }),
            " Filter by guests"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: guestFilter, onChange: (event) => setGuestFilter(event.target.value), className: "input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All rooms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "2+ guests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "3+ guests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5", children: "5+ guests" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 rounded-[2rem] bg-[#f5efe6] p-4 dark:bg-slate-900 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Star, title: "4.8 rated", text: "Guest-friendly stay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: ShieldCheck, title: "Direct booking", text: "Admin approval workflow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: BedDouble, title: "Flexible rooms", text: "Couple and family options" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: [1, 2, 3].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[520px] rounded-[2rem]" }, item)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3", children: filteredRooms.map((room) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room }, room.id)) }) }) })
  ] });
}
function Info({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-[1.5rem] bg-white p-4 shadow-soft dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 23 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate-600 dark:text-slate-300", children: text })
    ] })
  ] });
}
export {
  Rooms as default
};
