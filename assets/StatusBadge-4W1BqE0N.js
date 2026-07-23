import { j as jsxRuntimeExports } from "./index-DN0yzujq.js";
const styles = {
  pending: "bg-[#FFF6DF] text-[#8A5A00] ring-[#E8C978] dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30",
  approved: "bg-emerald-50 text-[#1F5F43] ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30",
  rejected: "bg-red-50 text-red-700 ring-red-200 dark:bg-red-500/15 dark:text-red-300 dark:ring-red-500/30"
};
const labels = {
  pending: "Pending ⏳",
  approved: "Approved ✅",
  rejected: "Rejected ❌"
};
function StatusBadge({ status = "pending" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex min-h-10 items-center rounded-full px-4 text-sm font-black capitalize ring-1 ${styles[status] || styles.pending}`, children: labels[status] || labels.pending });
}
export {
  StatusBadge as S
};
