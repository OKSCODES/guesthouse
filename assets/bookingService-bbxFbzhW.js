import { o as onSnapshot, l as doc, q as query, i as orderBy, a as addDoc, k as updateDoc, d as db, n as deleteDoc, b as collection, s as serverTimestamp } from "./index-DN0yzujq.js";
const bookingsRef = collection(db, "bookings");
const allowedStatuses = ["pending", "approved", "rejected"];
const generateBookingId = () => `UG-${Date.now().toString().slice(-6)}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
const mapBooking = (snapshotDoc) => {
  const data = snapshotDoc.data() || {};
  return {
    ...data,
    id: snapshotDoc.id,
    firestoreId: snapshotDoc.id,
    documentId: snapshotDoc.id,
    bookingId: data.bookingId || data.id || snapshotDoc.id
  };
};
const resolveBookingDocumentId = (bookingOrId) => {
  if (typeof bookingOrId === "string") {
    const value = bookingOrId.trim();
    if (value) return value;
  }
  if (bookingOrId && typeof bookingOrId === "object") {
    const value = String(
      bookingOrId.firestoreId || bookingOrId.documentId || bookingOrId.docId || bookingOrId._id || bookingOrId.id || ""
    ).trim();
    if (value) return value;
  }
  throw new Error("Missing Firestore booking document ID. Refresh the admin dashboard and try again.");
};
const createBooking = async (data) => {
  var _a, _b, _c, _d;
  const roomValue = data.room || data.roomType || "";
  return addDoc(bookingsRef, {
    bookingId: generateBookingId(),
    name: ((_a = data.name) == null ? void 0 : _a.trim()) || "",
    phone: ((_b = data.phone) == null ? void 0 : _b.trim()) || "",
    email: ((_c = data.email) == null ? void 0 : _c.trim().toLowerCase()) || "",
    room: roomValue,
    roomType: roomValue,
    guests: Number(data.guests || 1),
    checkIn: data.checkIn || "",
    checkOut: data.checkOut || "",
    message: ((_d = data.message) == null ? void 0 : _d.trim()) || "",
    status: "pending",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
};
const subscribeBookings = ({ status = "all", search = "" } = {}, onNext, onError) => {
  const q = query(bookingsRef, orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snapshot) => {
      const value = search.trim().toLowerCase();
      const rows = snapshot.docs.map(mapBooking).filter((booking) => status === "all" ? true : booking.status === status).filter((booking) => {
        if (!value) return true;
        return [booking.name, booking.email, booking.phone, booking.bookingId, booking.room, booking.roomType].filter(Boolean).some((field) => String(field).toLowerCase().includes(value));
      });
      onNext(rows);
    },
    onError
  );
};
const subscribeBookingById = (id, onNext, onError) => {
  const documentId = resolveBookingDocumentId(id);
  return onSnapshot(
    doc(db, "bookings", documentId),
    (snapshot) => {
      onNext(snapshot.exists() ? mapBooking(snapshot) : null);
    },
    onError
  );
};
const updateBookingStatus = async (bookingOrId, status) => {
  const documentId = resolveBookingDocumentId(bookingOrId);
  if (!allowedStatuses.includes(status)) {
    throw new Error(`Invalid booking status: ${status}`);
  }
  return updateDoc(doc(db, "bookings", documentId), {
    status,
    updatedAt: serverTimestamp()
  });
};
const deleteBooking = async (bookingOrId) => {
  const documentId = resolveBookingDocumentId(bookingOrId);
  return deleteDoc(doc(db, "bookings", documentId));
};
export {
  subscribeBookings as a,
  createBooking as c,
  deleteBooking as d,
  subscribeBookingById as s,
  updateBookingStatus as u
};
