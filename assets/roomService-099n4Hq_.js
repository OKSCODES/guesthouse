import { o as onSnapshot, q as query, i as orderBy, b as collection, k as updateDoc, l as doc, d as db, a as addDoc, n as deleteDoc, s as serverTimestamp } from "./index-DeB-K_98.js";
const roomsRef = collection(db, "rooms");
const mapRoom = (snapshotDoc) => ({ id: snapshotDoc.id, ...snapshotDoc.data() });
const normalizeRoom = (data) => {
  var _a, _b;
  return {
    name: ((_a = data.name) == null ? void 0 : _a.trim()) || "",
    price: Number(data.price || 0),
    description: ((_b = data.description) == null ? void 0 : _b.trim()) || "",
    guests: Number(data.guests || 2),
    images: Array.isArray(data.images) ? data.images.slice(0, 5) : [],
    amenities: Array.isArray(data.amenities) ? data.amenities : [],
    updatedAt: serverTimestamp()
  };
};
const subscribeRooms = (onNext, onError) => onSnapshot(query(roomsRef, orderBy("createdAt", "desc")), (snapshot) => onNext(snapshot.docs.map(mapRoom)), onError);
const createRoom = (data) => addDoc(roomsRef, {
  ...normalizeRoom(data),
  createdAt: serverTimestamp()
});
const updateRoom = (id, data) => updateDoc(doc(db, "rooms", id), normalizeRoom(data));
const deleteRoom = (id) => deleteDoc(doc(db, "rooms", id));
export {
  createRoom as c,
  deleteRoom as d,
  subscribeRooms as s,
  updateRoom as u
};
