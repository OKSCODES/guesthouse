import { r as reactExports } from "./index-DN0yzujq.js";
function useSeo({ title, description }) {
  reactExports.useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}
export {
  useSeo as u
};
