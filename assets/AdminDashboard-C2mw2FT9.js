import { c as createLucideIcon, j as jsxRuntimeExports, X, m as motion, r as reactExports, B as BedDouble, I as Image, S as Skeleton, z as zt, e as useNavigate, F as Fe, h as signOut, g as auth } from "./index-DN0yzujq.js";
import { S as StatusBadge } from "./StatusBadge-4W1BqE0N.js";
import { a as subscribeBookings, u as updateBookingStatus, d as deleteBooking } from "./bookingService-bbxFbzhW.js";
import { s as subscribeReviews, a as approveReview, d as deleteReview } from "./reviewService-_us2OKN8.js";
import { s as subscribeRooms, u as updateRoom, c as createRoom, d as deleteRoom } from "./roomService-BH7ysV2g.js";
import { I as IndianRupee } from "./indian-rupee-XZFz_Ghz.js";
import { U as Users } from "./users-D92lYDyc.js";
import { W as Wifi } from "./wifi-CuY-HUPG.js";
import { C as CircleCheck } from "./circle-check-DO9K5fvI.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleX = createLucideIcon("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock3 = createLucideIcon("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DoorOpen = createLucideIcon("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PenLine = createLucideIcon("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
function AdminBookingCard({ booking, loading, onApprove, onReject, onDelete }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black", children: booking.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: booking.bookingId || booking.id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: booking.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 dark:text-white", children: "Phone:" }),
        " ",
        booking.phone
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 dark:text-white", children: "Email:" }),
        " ",
        booking.email
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 dark:text-white", children: "Room:" }),
        " ",
        booking.roomType || booking.room
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 dark:text-white", children: "Stay:" }),
        " ",
        booking.checkIn,
        " → ",
        booking.checkOut
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 dark:text-white", children: "Guests:" }),
        " ",
        booking.guests
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: loading, onClick: () => onApprove(booking), className: "btn min-h-12 rounded-2xl bg-emerald-600 px-3 text-white disabled:opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18 }),
        " Approve"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: loading, onClick: () => onReject(booking), className: "btn min-h-12 rounded-2xl bg-amber-500 px-3 text-white disabled:opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }),
        " Reject"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: loading, onClick: () => onDelete(booking), className: "btn col-span-2 min-h-12 rounded-2xl bg-red-50 px-3 text-red-600 disabled:opacity-60 dark:bg-red-950/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }),
        " Delete"
      ] })
    ] })
  ] });
}
function ConfirmModal({ open, title = "Are you sure?", message, confirmText = "Delete", loading, onCancel, onConfirm }) {
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-end bg-slate-950/60 p-4 backdrop-blur-sm sm:place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 28, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      className: "w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-white",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "confirm-modal-title",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "confirm-modal-title", className: "text-2xl font-black leading-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300", children: message || "This action cannot be undone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onCancel,
              disabled: loading,
              className: "min-h-14 rounded-2xl bg-[#F5EFE6] px-5 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onConfirm,
              disabled: loading,
              className: "min-h-14 rounded-2xl bg-red-600 px-5 text-base font-black text-white transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 disabled:opacity-60",
              children: loading ? "Processing..." : confirmText
            }
          )
        ] })
      ]
    }
  ) });
}
const fallbackImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80";
const emptyRoom = {
  name: "",
  price: "",
  description: "",
  images: "",
  amenities: ""
};
function RoomsManager() {
  const [rooms, setRooms] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(emptyRoom);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [deletingId, setDeletingId] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setLoading(true);
    return subscribeRooms(
      (rows) => {
        setRooms(rows);
        setLoading(false);
      },
      () => {
        zt.error("Could not load rooms");
        setLoading(false);
      }
    );
  }, []);
  const title = reactExports.useMemo(() => editingId ? "Edit Room" : "Add Room", [editingId]);
  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const resetForm = () => {
    setForm(emptyRoom);
    setEditingId(null);
    setShowForm(false);
  };
  const startEdit = (room) => {
    setEditingId(room.id);
    setForm({
      name: room.name || "",
      price: room.price || "",
      description: room.description || "",
      images: Array.isArray(room.images) ? room.images.join("\n") : "",
      amenities: Array.isArray(room.amenities) ? room.amenities.join(", ") : ""
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const buildPayload = () => ({
    name: form.name.trim(),
    price: Number(form.price),
    description: form.description.trim(),
    images: form.images.split("\n").map((image) => image.trim()).filter(Boolean).slice(0, 5),
    amenities: form.amenities.split(",").map((item) => item.trim()).filter(Boolean)
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = buildPayload();
    if (!payload.name || !payload.price || Number.isNaN(payload.price)) {
      zt.error("Room name and valid price are required");
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await updateRoom(editingId, payload);
        zt.success("Room updated");
      } else {
        await createRoom(payload);
        zt.success("Room added");
      }
      resetForm();
    } catch (error) {
      console.error(error);
      zt.error("Room could not be saved");
    } finally {
      setSaving(false);
    }
  };
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeletingId(deleteTarget.id);
    try {
      await deleteRoom(deleteTarget.id);
      zt.success("Room deleted");
      setDeleteTarget(null);
    } catch (error) {
      console.error(error);
      zt.error("Room could not be deleted");
    } finally {
      setDeletingId(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black uppercase tracking-[0.18em] text-[#1F5F43] dark:text-emerald-300", children: "Inventory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-[2rem] font-black leading-tight text-slate-950 dark:text-white", children: "Rooms & Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: "Add rooms, update nightly rates, images and guest amenities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingId(null);
            setForm(emptyRoom);
            setShowForm(true);
          },
          className: "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#1F5F43] px-6 text-base font-black text-white shadow-lg shadow-emerald-900/20 transition focus:outline-none focus:ring-4 focus:ring-emerald-900/20 active:scale-95 sm:w-auto",
          type: "button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 22 }),
            " Add Room"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black uppercase tracking-[0.18em] text-[#D4A95D]", children: editingId ? "Update listing" : "New listing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-black text-slate-950 dark:text-white", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-600 dark:text-slate-300", children: "Keep descriptions short, clear and trust-building for mobile guests." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: resetForm,
            className: "grid min-h-12 min-w-12 place-items-center rounded-2xl bg-[#F5EFE6] text-slate-700 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 dark:bg-slate-800 dark:text-slate-200",
            "aria-label": "Close form",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Room Name", icon: BedDouble, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "name",
            value: form.name,
            onChange: updateField,
            className: "min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white",
            placeholder: "Deluxe Valley Room",
            autoComplete: "off"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Price per night", icon: IndianRupee, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "price",
            type: "number",
            min: "0",
            value: form.price,
            onChange: updateField,
            className: "min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white",
            placeholder: "2500",
            inputMode: "numeric"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Description", icon: Users, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "description",
            value: form.description,
            onChange: updateField,
            className: "min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white min-h-32 resize-none py-4",
            placeholder: "Peaceful room with scenic views, hot water and comfortable bedding."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Image URLs, one per line, max 5", icon: Image, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "images",
            value: form.images,
            onChange: updateField,
            className: "min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white min-h-36 resize-none py-4",
            placeholder: "https://example.com/room-1.jpg"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amenities, separated by commas", icon: Wifi, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "amenities",
            value: form.amenities,
            onChange: updateField,
            className: "min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white",
            placeholder: "WiFi, Hot water, Parking, Breakfast"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: resetForm,
            disabled: saving,
            className: "min-h-14 rounded-2xl bg-[#F5EFE6] px-6 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: saving,
            className: "min-h-14 rounded-2xl bg-[#1F5F43] px-6 text-base font-black text-white shadow-lg shadow-emerald-900/20 transition focus:outline-none focus:ring-4 focus:ring-emerald-900/20 active:scale-95 disabled:opacity-60",
            children: saving ? "Saving..." : editingId ? "Update Room" : "Save Room"
          }
        )
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-[2rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-[2rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-[2rem]" })
    ] }) : rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-white p-10 text-center shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-[#F5EFE6] text-[#1F5F43] dark:bg-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 28 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-black text-slate-950 dark:text-white", children: "No rooms added yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-7 text-slate-500 dark:text-slate-300", children: "Tap Add Room to create your first room listing." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: rooms.map((room) => {
      var _a, _b;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900 dark:ring-slate-800",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: ((_a = room.images) == null ? void 0 : _a[0]) || fallbackImage,
                  alt: room.name || "Guest house room",
                  className: "h-full w-full object-cover transition duration-500 hover:scale-105",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-base font-black text-[#1F5F43] shadow-lg", children: [
                "₹",
                Number(room.price || 0).toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black leading-tight text-slate-950 dark:text-white", children: room.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-base font-black text-[#1F5F43] dark:text-emerald-300", children: [
                    "₹",
                    Number(room.price || 0).toLocaleString("en-IN"),
                    " / night"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300", children: "Active" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300", children: room.description || "No description added." }),
              ((_b = room.amenities) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: room.amenities.slice(0, 5).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full bg-[#F5EFE6] px-4 py-2 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",
                  children: item
                },
                item
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => startEdit(room),
                    className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#F5EFE6] px-4 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 dark:bg-slate-800 dark:text-slate-100",
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 20 }),
                      " Edit"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    disabled: deletingId === room.id,
                    onClick: () => setDeleteTarget(room),
                    className: "inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-red-50 px-4 text-base font-black text-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 disabled:opacity-60 dark:bg-red-950/40 dark:text-red-300",
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 20 }),
                      " Delete"
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        room.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        open: Boolean(deleteTarget),
        title: "Delete room?",
        message: `Delete ${(deleteTarget == null ? void 0 : deleteTarget.name) || "this room"} from your room listings?`,
        confirmText: "Delete Room",
        loading: deletingId === (deleteTarget == null ? void 0 : deleteTarget.id),
        onCancel: () => setDeleteTarget(null),
        onConfirm: confirmDelete
      }
    )
  ] });
}
function Field({ label, icon: Icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }),
      label
    ] }),
    children
  ] });
}
const tabs = [
  { id: "bookings", label: "Bookings", icon: Clock3 },
  { id: "reviews", label: "Reviews", icon: MessageSquare },
  { id: "rooms", label: "Rooms", icon: DoorOpen }
];
function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState("bookings");
  const [bookings, setBookings] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [loadingId, setLoadingId] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (tab !== "bookings") return void 0;
    setLoading(true);
    return subscribeBookings(
      { status: statusFilter, search },
      (rows) => {
        setBookings(rows);
        setLoading(false);
      },
      () => {
        zt.error("Could not load bookings");
        setLoading(false);
      }
    );
  }, [tab, statusFilter, search]);
  reactExports.useEffect(() => {
    if (tab !== "reviews") return void 0;
    setLoading(true);
    return subscribeReviews(
      {},
      (rows) => {
        setReviews(rows);
        setLoading(false);
      },
      () => {
        zt.error("Could not load reviews");
        setLoading(false);
      }
    );
  }, [tab]);
  const stats = reactExports.useMemo(() => ({
    pending: bookings.filter((booking) => booking.status === "pending").length,
    approved: bookings.filter((booking) => booking.status === "approved").length,
    rejected: bookings.filter((booking) => booking.status === "rejected").length
  }), [bookings]);
  const getRowId = (booking) => (booking == null ? void 0 : booking.firestoreId) || (booking == null ? void 0 : booking.documentId) || (booking == null ? void 0 : booking.id) || "";
  const changeStatus = async (booking, status) => {
    const rowId = getRowId(booking);
    setLoadingId(rowId);
    try {
      await updateBookingStatus(booking, status);
      zt.success(status === "approved" ? "Booking approved" : "Booking rejected");
    } catch (error) {
      console.error(error);
      zt.error(error.message || "Status could not be updated");
    } finally {
      setLoadingId(null);
    }
  };
  const confirmDeleteBooking = async () => {
    if (!deleteTarget) return;
    setLoadingId(getRowId(deleteTarget));
    try {
      await deleteBooking(deleteTarget);
      zt.success("Booking deleted");
      setDeleteTarget(null);
    } catch (error) {
      console.error(error);
      zt.error(error.message || "Booking could not be deleted");
    } finally {
      setLoadingId(null);
    }
  };
  const handleReviewApprove = async (id) => {
    setLoadingId(id);
    try {
      await approveReview(id);
      zt.success("Review approved");
    } catch {
      zt.error("Review could not be approved");
    } finally {
      setLoadingId(null);
    }
  };
  const handleReviewDelete = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    setLoadingId(id);
    try {
      await deleteReview(id);
      zt.success("Review deleted");
    } catch {
      zt.error("Review could not be deleted");
    } finally {
      setLoadingId(null);
    }
  };
  const logout = async () => {
    await signOut(auth);
    navigate("/admin/login", { replace: true });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen overflow-x-hidden bg-slate-50 p-4 pb-24 dark:bg-slate-950 dark:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fe, { position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300", children: "Control Panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black leading-tight sm:text-3xl", children: "Umpohliew Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: logout, className: "btn btn-soft px-5", children: "Logout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Clock3, label: "Pending", value: stats.pending, tone: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: CircleCheck, label: "Approved", value: stats.approved, tone: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: CircleX, label: "Rejected", value: stats.rejected, tone: "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 mb-5 grid grid-cols-3 gap-2 rounded-3xl bg-white/95 p-2 shadow-soft backdrop-blur dark:bg-slate-900/95", children: tabs.map(({ id, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(id), className: `min-h-14 rounded-2xl text-xs font-black capitalize transition active:scale-95 sm:text-sm ${tab === id ? "bg-emerald-700 text-white" : "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto mb-1", size: 18 }),
        " ",
        label
      ] }, id)) }),
      tab === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid gap-3 md:grid-cols-[1fr_220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400", size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input pl-11", value: search, onChange: (event) => setSearch(event.target.value), placeholder: "Search name, phone, email" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: statusFilter, onChange: (event) => setStatusFilter(event.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "approved", children: "Approved" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rejected", children: "Rejected" })
          ] })
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80" }) : bookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No bookings found" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: bookings.map((booking) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdminBookingCard,
          {
            booking,
            loading: loadingId === getRowId(booking),
            onApprove: (id) => changeStatus(id, "approved"),
            onReject: (id) => changeStatus(id, "rejected"),
            onDelete: setDeleteTarget
          },
          booking.id
        )) })
      ] }),
      tab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72" }) : reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No reviews yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: reviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black", children: review.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: review.approved ? "Approved" : "Waiting approval" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500", children: "★".repeat(Number(review.rating || 0)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-600 dark:text-slate-300", children: review.comment }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
          !review.approved && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loadingId === review.id, onClick: () => handleReviewApprove(review.id), className: "btn btn-primary disabled:opacity-60", children: "Approve" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loadingId === review.id, onClick: () => handleReviewDelete(review.id), className: "btn bg-red-50 text-red-600 disabled:opacity-60 dark:bg-red-950/40", children: "Delete" })
        ] })
      ] }, review.id)) }) }),
      tab === "rooms" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoomsManager, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmModal, { open: Boolean(deleteTarget), title: "Delete booking?", message: `Delete booking ${(deleteTarget == null ? void 0 : deleteTarget.bookingId) || (deleteTarget == null ? void 0 : deleteTarget.id) || ""}?`, loading: loadingId === getRowId(deleteTarget), onCancel: () => setDeleteTarget(null), onConfirm: confirmDeleteBooking })
  ] });
}
function Stat({ label, value, tone, icon: Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-3 text-center ${tone}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto mb-1", size: 20 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold sm:text-xs", children: label })
  ] });
}
function Empty({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white p-10 text-center shadow-soft dark:bg-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-slate-500", children: "Real-time data will appear here." })
  ] });
}
export {
  AdminDashboard as default
};
