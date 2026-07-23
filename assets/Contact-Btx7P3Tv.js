import { c as createLucideIcon, a as addDoc, b as collection, s as serverTimestamp, d as db, r as reactExports, j as jsxRuntimeExports, M as MessageCircle, P as Phone, z as zt } from "./index-DeB-K_98.js";
import { M as MapPinned, R as ResponsiveMap } from "./ResponsiveMap-C6BXbu1s.js";
import { u as useSeo } from "./useSeo-Bwd8_-Cw.js";
import "./bookingService-BqAVHETE.js";
import "./reviewService-BAy2troC.js";
import { M as Mail } from "./mail-B-sofiwr.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const createContact = async (data) => addDoc(collection(db, "contacts"), { ...data, createdAt: serverTimestamp() });
function Contact() {
  useSeo({ title: "Contact | Umpohliew Guest House", description: "Contact Umpohliew Guest House for bookings and questions." });
  const [f, setF] = reactExports.useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = reactExports.useState(false);
  const phone = "+91 7085280528";
  const cleanPhone = phone.replace(/\s/g, "");
  const wa = "+91 7085280528";
  const email = "umpohliew3@gmail.com";
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.message) return zt.error("Name and message required");
    setLoading(true);
    try {
      await createContact(f);
      zt.success("Message sent");
      setF({ name: "", email: "", phone: "", message: "" });
    } catch {
      zt.error("Could not send message");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 17 }),
          " Contact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-title mt-4", children: "Talk to Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4", children: "Call, WhatsApp or send a message for booking support and location help." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactAction, { href: `tel:${cleanPhone}`, icon: Phone, title: "Call", text: phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactAction, { href: `https://wa.me/${wa}?text=Hello%20Umpohliew%20Guest%20House,%20I%20want%20to%20book%20a%20room.`, icon: MessageCircle, title: "WhatsApp", text: "Direct booking request", external: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactAction, { href: `mailto:${email}`, icon: Mail, title: "Email", text: email })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx grid gap-8 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-[2rem] bg-white p-6 shadow-premium dark:bg-slate-900 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[28px] font-black", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: "We will respond with booking and availability details." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "Your name", autoComplete: "name", value: f.name, onChange: (e) => setF({ ...f, name: e.target.value }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", type: "email", placeholder: "Email address", autoComplete: "email", value: f.email, onChange: (e) => setF({ ...f, email: e.target.value }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", placeholder: "Phone number", inputMode: "tel", autoComplete: "tel", value: f.phone, onChange: (e) => setF({ ...f, phone: e.target.value }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input min-h-36", placeholder: "Tell us your date, room preference or question...", value: f.message, onChange: (e) => setF({ ...f, message: e.target.value }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: loading, className: "btn btn-primary w-full disabled:opacity-60", children: [
            loading ? "Sending..." : "Send Message",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 20 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[28px] font-black", children: "Visit Umpohliew Guest House" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPinned, title: "Address", text: "Umpohliew Guest House, Meghalaya" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Clock, title: "Support hours", text: "Call or WhatsApp for latest room availability." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveMap, {})
      ] })
    ] }) })
  ] });
}
function ContactAction({ href, icon: Icon, title, text, external = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: external ? "_blank" : void 0, rel: external ? "noreferrer" : void 0, className: "group rounded-[2rem] bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium dark:bg-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest transition group-hover:scale-105 dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 27 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-[20px] font-black", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-words text-base leading-7 text-slate-600 dark:text-slate-300", children: text })
  ] });
}
function Info({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-[1.5rem] bg-[#f5efe6] p-4 dark:bg-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "mt-1 shrink-0 text-forest dark:text-emerald-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-7 text-slate-600 dark:text-slate-300", children: text })
    ] })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-sm font-black text-slate-700 dark:text-slate-200", children: label }),
    children
  ] });
}
export {
  Contact as default
};
