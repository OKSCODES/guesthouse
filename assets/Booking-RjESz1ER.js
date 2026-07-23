import { c as createLucideIcon, j as jsxRuntimeExports, u as useSearchParams, r as reactExports, m as motion, A as AnimatePresence, B as BedDouble, z as zt, P as Phone, C as CalendarCheck } from "./index-DN0yzujq.js";
import { r as rooms } from "./siteData-BYS6-c-N.js";
import { s as subscribeBookingById, c as createBooking } from "./bookingService-bbxFbzhW.js";
import { s as subscribeRooms } from "./roomService-BH7ysV2g.js";
import { S as StatusBadge } from "./StatusBadge-4W1BqE0N.js";
import { U as Users } from "./users-D92lYDyc.js";
import { C as CircleCheck } from "./circle-check-DO9K5fvI.js";
import { A as ArrowRight } from "./arrow-right-GHulhS-z.js";
import { M as Mail } from "./mail-B0HQlNOP.js";
import { S as ShieldCheck } from "./shield-check-xlpBIdH-.js";
import { u as useSeo } from "./useSeo-DaYmfcYt.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CalendarDays = createLucideIcon("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hotel = createLucideIcon("Hotel", [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UserRound = createLucideIcon("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
const required = (v) => String(v || "").trim().length > 0;
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v) => /^[0-9+\-\s]{7,15}$/.test(v);
const validateBooking = (f) => {
  const e = {};
  if (!required(f.name)) e.name = "Name is required";
  if (!isPhone(f.phone)) e.phone = "Valid phone is required";
  if (!isEmail(f.email)) e.email = "Valid email is required";
  if (!f.checkIn) e.checkIn = "Check-in is required";
  if (!f.checkOut) e.checkOut = "Check-out is required";
  if (f.checkIn && f.checkOut && f.checkOut <= f.checkIn) e.checkOut = "Check-out must be after check-in";
  if (!f.roomType) e.roomType = "Select a room";
  if (Number(f.guests) < 1) e.guests = "Guests must be at least 1";
  return e;
};
function BookingCard({ booking }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 bg-[#F5EFE6] p-6 dark:bg-slate-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black uppercase tracking-[0.16em] text-[#1F5F43] dark:text-emerald-300", children: "Booking Reference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 truncate text-xl font-black text-slate-950 dark:text-white", children: booking.bookingId || booking.id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: booking.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Hotel, label: "Room", value: booking.roomType || booking.room }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Users, label: "Guests", value: booking.guests }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: CalendarDays, label: "Check-in", value: booking.checkIn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: CalendarDays, label: "Check-out", value: booking.checkOut })
      ] })
    ] })
  ] });
}
function Info({ label, value, icon: Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#FAF9F6] p-4 ring-1 ring-slate-100 dark:bg-slate-950 dark:ring-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 21, className: "text-[#1F5F43] dark:text-emerald-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base font-black text-slate-900 dark:text-white", children: value || "-" })
  ] });
}
const IDS_KEY = "umpohliew_booking_ids";
const DRAFT_KEY = "umpohliew_booking_draft";
const steps = [
  { label: "Room", icon: BedDouble },
  { label: "Dates", icon: CalendarDays },
  { label: "Details", icon: UserRound },
  { label: "Summary", icon: CircleCheck }
];
const emptyForm = {
  name: "",
  phone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: 1,
  message: ""
};
const readJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};
const saveBookingId = (id) => {
  const ids = [id, ...readJson(IDS_KEY, []).filter((item) => item !== id)].slice(0, 5);
  localStorage.setItem(IDS_KEY, JSON.stringify(ids));
  return ids;
};
function BookingFlow() {
  const [searchParams] = useSearchParams();
  const savedDraft = readJson(DRAFT_KEY, {});
  const [rooms$1, setRooms] = reactExports.useState(rooms);
  const [step, setStep] = reactExports.useState(0);
  const [savedIds, setSavedIds] = reactExports.useState(() => readJson(IDS_KEY, []));
  const [customerBookings, setCustomerBookings] = reactExports.useState([]);
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    ...emptyForm,
    ...savedDraft,
    roomType: searchParams.get("room") || savedDraft.roomType || ""
  });
  reactExports.useEffect(() => {
    const unsubscribe = subscribeRooms(
      (items) => items.length > 0 && setRooms(items),
      () => {
      }
    );
    return unsubscribe;
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
  }, [form]);
  reactExports.useEffect(() => {
    if (savedIds.length === 0) {
      setCustomerBookings([]);
      return void 0;
    }
    const unsubscribers = savedIds.map(
      (id) => subscribeBookingById(
        id,
        (booking) => {
          setCustomerBookings((current) => {
            const rest = current.filter((item) => item.id !== id);
            return booking ? [booking, ...rest].sort((a, b) => savedIds.indexOf(a.id) - savedIds.indexOf(b.id)) : rest;
          });
        },
        () => zt.error("Could not load booking status")
      )
    );
    return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
  }, [savedIds]);
  const selectedRoom = reactExports.useMemo(
    () => rooms$1.find((room) => String(room.id) === String(form.roomType)),
    [rooms$1, form.roomType]
  );
  const nights = reactExports.useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 1;
    const start = new Date(form.checkIn);
    const end = new Date(form.checkOut);
    const diff = Math.ceil((end - start) / (1e3 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [form.checkIn, form.checkOut]);
  const estimate = selectedRoom ? Number(selectedRoom.price || 0) * nights : 0;
  const set = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: void 0 }));
  };
  const currentStepErrors = () => {
    const all = validateBooking(form);
    const keys = step === 0 ? ["roomType", "guests"] : step === 1 ? ["checkIn", "checkOut"] : step === 2 ? ["name", "phone", "email"] : Object.keys(all);
    return Object.fromEntries(Object.entries(all).filter(([key]) => keys.includes(key)));
  };
  const goNext = () => {
    const currentErrors = currentStepErrors();
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length) {
      zt.error("Please complete this step");
      return;
    }
    setStep((value) => Math.min(value + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    setStep((value) => Math.max(value - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submit = async (event) => {
    event.preventDefault();
    const validationErrors = validateBooking(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      zt.error("Please correct the form");
      return;
    }
    setLoading(true);
    try {
      const doc = await createBooking(form);
      setSavedIds(saveBookingId(doc.id));
      setSuccess({ id: doc.id, ...form, status: "pending" });
      zt.success("Booking request sent");
      localStorage.removeItem(DRAFT_KEY);
      setForm(emptyForm);
      setStep(0);
    } catch {
      zt.error("Firebase not configured or network error");
    } finally {
      setLoading(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, className: "rounded-[2.25rem] bg-white p-6 text-center shadow-premium dark:bg-slate-900 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 54 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-[32px] font-black leading-tight sm:text-5xl", children: "Booking Request Sent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300", children: "Your request is pending admin approval. You can check the live status below from this device." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { booking: success }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSuccess(null), className: "btn btn-primary mt-6 w-full", children: "Make Another Booking" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl", children: [
    customerBookings[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-forest dark:text-emerald-300", children: "Latest booking status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-all text-base text-slate-600 dark:text-slate-300", children: customerBookings[0].bookingId || customerBookings[0].id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: customerBookings[0].status })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { step, setStep }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-[2rem] bg-white p-5 shadow-premium dark:bg-slate-900 sm:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 18 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -18 }, transition: { duration: 0.18 }, children: [
            step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(RoomStep, { rooms: rooms$1, form, errors, set, selectedRoom }),
            step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(DateStep, { form, errors, set }),
            step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(DetailsStep, { form, errors, set }),
            step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmStep, { form, selectedRoom, nights, estimate })
          ] }, step) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-[5.9rem] z-20 mt-6 grid grid-cols-2 gap-3 rounded-[1.75rem] bg-white/96 p-2 shadow-2xl backdrop-blur dark:bg-slate-900/96 lg:static lg:bg-transparent lg:p-0 lg:shadow-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: step === 0 || loading, onClick: goBack, className: "btn btn-soft w-full disabled:opacity-40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 }),
              " Back"
            ] }),
            step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: goNext, className: "btn btn-primary w-full", children: [
              "Next ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, className: "btn btn-primary w-full disabled:opacity-60", children: loading ? "Sending..." : "Confirm Booking" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingSummary, { selectedRoom, form, nights, estimate }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[24px] font-black", children: "Your Booking Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-2", children: [
        customerBookings.map((booking) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { booking }, booking.id)),
        customerBookings.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-[2rem] bg-white p-6 text-base text-slate-500 shadow-soft dark:bg-slate-900", children: "No booking request from this device yet." })
      ] })
    ] })
  ] });
}
function Stepper({ step, setStep }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 rounded-[2rem] bg-white p-2 shadow-soft dark:bg-slate-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: steps.map(({ label, icon: Icon }, index) => {
    const active = index === step;
    const done = index < step;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setStep(index),
        className: `min-h-[72px] rounded-[1.5rem] px-2 text-sm font-black transition active:scale-95 ${active ? "bg-forest text-white shadow-lg shadow-emerald-900/20" : done ? "bg-emerald-50 text-forest dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto mb-1", size: 24 }),
          label
        ]
      },
      label
    );
  }) }) });
}
function RoomStep({ rooms: rooms2, form, errors, set, selectedRoom }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Choose your room", text: "Select your preferred room before entering dates and guest details." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Room type", err: errors.roomType, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: form.roomType, onChange: (event) => set("roomType", event.target.value), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select room" }),
      rooms2.map((room) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: room.id, children: [
        room.name,
        " - ₹",
        room.price,
        "/night"
      ] }, room.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 xl:grid-cols-[1fr_220px]", children: [
      selectedRoom ? /* @__PURE__ */ jsxRuntimeExports.jsx(RoomMini, { room: selectedRoom }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] bg-[#f5efe6] p-6 text-base text-slate-600 dark:bg-slate-800 dark:text-slate-300", children: "Choose a room to preview pricing and amenities." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Guests", err: errors.guests, children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input", value: form.guests, onChange: (event) => set("guests", event.target.value), children: [1, 2, 3, 4, 5, 6].map((guest) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: guest, children: [
        guest,
        " guest",
        guest > 1 ? "s" : ""
      ] }, guest)) }) })
    ] })
  ] });
}
function DateStep({ form, errors, set }) {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Select your dates", text: "Use native phone date pickers for faster one-hand booking." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Check-in", err: errors.checkIn, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", min: today, className: "input", value: form.checkIn, onChange: (event) => set("checkIn", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Check-out", err: errors.checkOut, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", min: form.checkIn || today, className: "input", value: form.checkOut, onChange: (event) => set("checkOut", event.target.value) }) })
    ] })
  ] });
}
function DetailsStep({ form, errors, set }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Guest details", text: "Autofill is supported for quick booking on mobile." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", err: errors.name, icon: UserRound, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", autoComplete: "name", value: form.name, onChange: (event) => set("name", event.target.value), placeholder: "Your name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", err: errors.phone, icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", inputMode: "tel", autoComplete: "tel", value: form.phone, onChange: (event) => set("phone", event.target.value), placeholder: "Phone number" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", err: errors.email, icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "input", autoComplete: "email", value: form.email, onChange: (event) => set("email", event.target.value), placeholder: "Email address" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Special request", className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input min-h-32", value: form.message, onChange: (event) => set("message", event.target.value), placeholder: "Arrival time, extra bed, food request..." }) })
    ] })
  ] });
}
function ConfirmStep({ form, selectedRoom, nights, estimate }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeader, { title: "Review your booking", text: "Check every detail before sending your request to the guest house." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Room", value: (selectedRoom == null ? void 0 : selectedRoom.name) || form.roomType || "-" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Guests", value: `${form.guests || 1} guest${Number(form.guests) > 1 ? "s" : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Dates", value: `${form.checkIn || "-"} → ${form.checkOut || "-"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Nights", value: `${nights} night${nights > 1 ? "s" : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Estimated price", value: estimate ? `₹${estimate.toLocaleString("en-IN")}` : "-" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Guest", value: form.name || "-" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Phone", value: form.phone || "-" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Email", value: form.email || "-" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-[1.5rem] bg-emerald-50 p-5 dark:bg-emerald-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "shrink-0 text-forest dark:text-emerald-200", size: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-7 text-slate-700 dark:text-slate-200", children: "This is a booking request. Final availability is confirmed by the admin after approval." })
    ] }) })
  ] });
}
function BookingSummary({ selectedRoom, form, nights, estimate }) {
  var _a;
  const image = (selectedRoom == null ? void 0 : selectedRoom.img) || ((_a = selectedRoom == null ? void 0 : selectedRoom.images) == null ? void 0 : _a[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[22px] font-black", children: "Booking Summary" }),
    image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: selectedRoom.name, loading: "lazy", className: "mt-4 h-44 w-full rounded-[1.5rem] object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex h-44 items-center justify-center rounded-[1.5rem] bg-[#f5efe6] text-base font-bold text-slate-500 dark:bg-slate-800", children: "Select a room" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Room", value: (selectedRoom == null ? void 0 : selectedRoom.name) || "Not selected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Dates", value: form.checkIn && form.checkOut ? `${form.checkIn} → ${form.checkOut}` : "Select dates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Guests", value: `${form.guests || 1} guest${Number(form.guests) > 1 ? "s" : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.5rem] bg-[#143f2c] p-4 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-wide text-white/70", children: "Estimated total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[28px] font-black", children: estimate ? `₹${estimate.toLocaleString("en-IN")}` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-base text-white/75", children: [
          nights,
          " night",
          nights > 1 ? "s" : ""
        ] })
      ] })
    ] })
  ] });
}
function RoomMini({ room }) {
  var _a;
  const image = room.img || ((_a = room.images) == null ? void 0 : _a[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-[2rem] bg-[#f5efe6] dark:bg-slate-800", children: [
    image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: room.name, loading: "lazy", className: "h-48 w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[22px] font-black", children: room.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-lg font-black text-forest dark:text-emerald-300", children: [
        "₹",
        Number(room.price || 0).toLocaleString("en-IN"),
        "/night"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: room.description || "Comfortable room with essential amenities for a peaceful stay." })
    ] })
  ] });
}
function StepHeader({ title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[28px] font-black leading-tight sm:text-4xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300", children: text })
  ] });
}
function Field({ label, err, children, icon: Icon, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center gap-2 text-sm font-black text-slate-700 dark:text-slate-200", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17 }),
      " ",
      label
    ] }),
    children,
    err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-bold text-red-600", children: err })
  ] });
}
function Summary({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.5rem] bg-slate-50 p-4 dark:bg-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 break-words text-base font-black text-slate-950 dark:text-white", children: value })
  ] });
}
function Booking() {
  useSeo({
    title: "Book Now | Umpohliew Guest House",
    description: "Mobile-first room booking at Umpohliew Guest House Meghalaya."
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "safe-bottom bg-[#faf9f6] dark:bg-slate-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "containerx", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "app-badge", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { size: 17 }),
          " Booking"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "app-title mt-4", children: "Reserve Your Stay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "app-subtitle mt-4", children: "A Booking.com-style request flow with room selection, guest details, summary and live status tracking after submission." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-[2rem] bg-white p-4 shadow-soft dark:bg-slate-900 sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 26 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-black", children: "No instant payment required" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base leading-7 text-slate-600 dark:text-slate-300", children: "Submit your booking request first. The guest house admin will approve and confirm availability." })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "containerx", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingFlow, {}) }) })
  ] });
}
export {
  Booking as default
};
