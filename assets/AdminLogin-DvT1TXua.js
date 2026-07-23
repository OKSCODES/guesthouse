import { c as createLucideIcon, e as useNavigate, r as reactExports, j as jsxRuntimeExports, F as Fe, L as Link, z as zt, f as signInWithEmailAndPassword, g as auth, h as signOut } from "./index-DeB-K_98.js";
import { M as Mail } from "./mail-B-sofiwr.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EyeOff = createLucideIcon("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eye = createLucideIcon("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LockKeyhole = createLucideIcon("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
const ADMIN_EMAIL = "admin@umpohliew.com";
function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = async (event) => {
    var _a;
    event.preventDefault();
    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();
    if (!email || !password) {
      zt.error("Enter admin email and password");
      return;
    }
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (((_a = result.user.email) == null ? void 0 : _a.toLowerCase()) !== ADMIN_EMAIL.toLowerCase()) {
        await signOut(auth);
        zt.error("This account is not allowed to access admin");
        return;
      }
      zt.success("Welcome admin");
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error(error);
      zt.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen overflow-x-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-4 py-6 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Fe, { position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mb-6 text-sm font-black text-emerald-700 dark:text-emerald-300", children: "← Back to website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-black/5 backdrop-blur dark:bg-slate-900/90 dark:text-white dark:ring-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-700 text-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { size: 26 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300", children: "Admin Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-black", children: "Umpohliew Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300", children: "Sign in to manage bookings, rooms, prices and reviews." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400", size: 18 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  autoComplete: "email",
                  value: form.email,
                  onChange: updateField,
                  placeholder: "admin@umpohliew.com",
                  className: "input pl-11"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400", size: 18 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: showPassword ? "text" : "password",
                  name: "password",
                  autoComplete: "current-password",
                  value: form.password,
                  onChange: updateField,
                  placeholder: "Enter password",
                  className: "input pl-11 pr-12"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword((value) => !value),
                  className: "absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl text-slate-500 active:scale-95",
                  "aria-label": showPassword ? "Hide password" : "Show password",
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "btn btn-primary w-full disabled:opacity-60", children: loading ? "Signing in..." : "Login" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminLogin as default
};
