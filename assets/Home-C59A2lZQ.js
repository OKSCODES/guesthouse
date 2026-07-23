import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link, P as Phone, M as MessageCircle } from "./index-DN0yzujq.js";
import { M as MapPinned, R as ResponsiveMap } from "./ResponsiveMap-DuB5JpFn.js";
import { S as Star, R as RoomCard } from "./RoomCard-5wItpoDj.js";
import { r as rooms, a as attractions, g as gallery } from "./siteData-BYS6-c-N.js";
import { u as useSeo } from "./useSeo-DaYmfcYt.js";
import { A as ArrowRight } from "./arrow-right-GHulhS-z.js";
import { S as ShieldCheck } from "./shield-check-xlpBIdH-.js";
import { I as IndianRupee } from "./indian-rupee-XZFz_Ghz.js";
import { U as Users } from "./users-D92lYDyc.js";
import { S as Sparkles, M as Mountain } from "./sparkles-DnkurTc3.js";
import "./wifi-CuY-HUPG.js";
import "./circle-check-DO9K5fvI.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BadgeCheck = createLucideIcon("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};
function Home() {
  useSeo({
    title: "Umpohliew Guest House | Premium Nature Stay in Meghalaya",
    description: "Book a peaceful, affordable guest house stay near Sohra and Cherrapunji attractions in Meghalaya."
  });
  const phone = "+91 7085280528".replace(/\s/g, "");
  const whatsapp = "+91 7085280528".replace(/\D/g, "");
  const text = encodeURIComponent("Hello Umpohliew Guest House, I want to book a room.");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom overflow-hidden bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92dvh] overflow-hidden text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-bg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-[#143f2c]/45 to-[#143f2c]/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx relative flex min-h-[92dvh] flex-col justify-end px-6 pb-10 pt-28 sm:justify-center lg:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, initial: "hidden", animate: "show", className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-white/18 px-4 text-base font-black backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 19, className: "fill-[#d4a95d] text-[#d4a95d]" }),
            " 4.8 guest rated"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-white/18 px-4 text-base font-black backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { size: 19 }),
            " Meghalaya nature stay"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-hero-title text-balance", children: "Experience Peace in Nature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg font-medium leading-8 text-white/92 sm:text-xl", children: "A warm guest house for families, couples and travellers exploring Sohra, waterfalls, caves and the quiet beauty of Meghalaya." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 sm:flex sm:flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", className: "btn bg-white text-forest shadow-2xl shadow-black/20", children: [
            "Book Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 21 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rooms", className: "btn border border-white/45 bg-white/12 text-white backdrop-blur", children: "View Rooms" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-4 sm:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${phone}`, className: "btn bg-white/16 text-white backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20 }),
            " Call"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${whatsapp}?text=${text}`, target: "_blank", rel: "noreferrer", className: "btn bg-[#25D366] text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20 }),
            " WhatsApp"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 -mt-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-4 rounded-[2rem] bg-white p-4 shadow-premium dark:bg-slate-900 sm:grid-cols-3 sm:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trust, { icon: ShieldCheck, title: "Verified stay", text: "Real location and direct booking support." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trust, { icon: IndianRupee, title: "Honest pricing", text: "Rooms from ₹1,800 per night." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trust, { icon: Users, title: "Family friendly", text: "Rooms for couples, groups and families." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 17 }),
            " Popular stays"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "Rooms made for calm Meghalaya mornings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4 max-w-2xl", children: "Choose a clean, cozy room with essential comfort, scenic surroundings and quick direct booking." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 rounded-[2rem] bg-[#f5efe6] p-4 dark:bg-slate-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "3", label: "Room types" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "4.8", label: "Guest score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "24/7", label: "Support" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-6 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3", children: rooms.map((room) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room, compact: true }, room.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-[#f5efe6] dark:bg-slate-900/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 17 }),
          " Why choose us"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "A local stay that feels personal, peaceful and trusted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
        [Mountain, "Scenic surroundings", "Wake up to fresh air, hills and peaceful village atmosphere."],
        [MapPinned, "Near Sohra routes", "Easy access to popular waterfalls, caves and viewpoints."],
        [MessageCircle, "Direct assistance", "Call or WhatsApp the guest house before confirming your stay."]
      ].map(([Icon, title, text2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { whileHover: { y: -5 }, className: "rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-950", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 27 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[20px] font-black", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300", children: text2 })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { size: 17 }),
          " Location"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "Find us easily on Google Maps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4", children: "Open the map on your phone and navigate directly to Umpohliew Guest House." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: attractions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-badge bg-white dark:bg-slate-900", children: item }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveMap, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section bg-white dark:bg-slate-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 17 }),
          " Guest experience"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "app-title mt-4", children: "Simple comfort, local warmth and peaceful nights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4", children: "Guests choose Umpohliew for a calmer base while exploring Meghalaya’s most loved nature spots." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "btn btn-soft mt-6", children: [
          "View Gallery ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: gallery.slice(0, 4).map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: `${item.cat} preview`, loading: "lazy", className: `h-44 w-full rounded-[1.75rem] object-cover shadow-soft ${index % 2 ? "mt-8" : ""}` }, item.src)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx rounded-[2rem] bg-gradient-to-br from-[#1f5f43] to-[#143f2c] p-6 text-white shadow-premium sm:p-10 lg:p-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[32px] font-black leading-tight sm:text-5xl", children: "Ready to reserve your stay?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-8 text-white/85", children: "Send a booking request now. The admin will approve and confirm your room." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", className: "btn bg-white text-forest", children: [
        "Book Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 21 })
      ] })
    ] }) }) })
  ] });
}
function Trust({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-[1.5rem] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf5ef] text-forest dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 25 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-slate-950 dark:text-white", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-6 text-slate-600 dark:text-slate-300", children: text })
    ] })
  ] });
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.5rem] bg-white p-4 text-center shadow-soft dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-forest dark:text-emerald-300", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base font-bold text-slate-600 dark:text-slate-300", children: label })
  ] });
}
export {
  Home as default
};
