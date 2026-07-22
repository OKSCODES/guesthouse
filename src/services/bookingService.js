import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const bookingsRef = collection(db, 'bookings');
const allowedStatuses = ['pending', 'approved', 'rejected'];

const generateBookingId = () =>
  `UG-${Date.now().toString().slice(-6)}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;

// IMPORTANT:
// Some existing Firestore booking documents contain a data field named id: "".
// If that field overwrites the real Firestore document id, Firestore receives only
// doc(db, 'bookings') and throws:
// "Invalid document reference. Document references must have an even number of segments".
const mapBooking = (snapshotDoc) => {
  const data = snapshotDoc.data() || {};

  return {
    ...data,
    id: snapshotDoc.id,
    firestoreId: snapshotDoc.id,
    documentId: snapshotDoc.id,
    bookingId: data.bookingId || data.id || snapshotDoc.id,
  };
};

const resolveBookingDocumentId = (bookingOrId) => {
  if (typeof bookingOrId === 'string') {
    const value = bookingOrId.trim();
    if (value) return value;
  }

  if (bookingOrId && typeof bookingOrId === 'object') {
    const value = String(
      bookingOrId.firestoreId ||
      bookingOrId.documentId ||
      bookingOrId.docId ||
      bookingOrId._id ||
      bookingOrId.id ||
      ''
    ).trim();

    if (value) return value;
  }

  throw new Error('Missing Firestore booking document ID. Refresh the admin dashboard and try again.');
};

export const createBooking = async (data) => {
  const roomValue = data.room || data.roomType || '';

  return addDoc(bookingsRef, {
    bookingId: generateBookingId(),
    name: data.name?.trim() || '',
    phone: data.phone?.trim() || '',
    email: data.email?.trim().toLowerCase() || '',
    room: roomValue,
    roomType: roomValue,
    guests: Number(data.guests || 1),
    checkIn: data.checkIn || '',
    checkOut: data.checkOut || '',
    message: data.message?.trim() || '',
    status: 'pending',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const subscribeBookings = ({ status = 'all', search = '' } = {}, onNext, onError) => {
  const q = query(bookingsRef, orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const value = search.trim().toLowerCase();
      const rows = snapshot.docs
        .map(mapBooking)
        .filter((booking) => (status === 'all' ? true : booking.status === status))
        .filter((booking) => {
          if (!value) return true;
          return [booking.name, booking.email, booking.phone, booking.bookingId, booking.room, booking.roomType]
            .filter(Boolean)
            .some((field) => String(field).toLowerCase().includes(value));
        });

      onNext(rows);
    },
    onError
  );
};

export const subscribeBookingById = (id, onNext, onError) => {
  const documentId = resolveBookingDocumentId(id);

  return onSnapshot(
    doc(db, 'bookings', documentId),
    (snapshot) => {
      onNext(snapshot.exists() ? mapBooking(snapshot) : null);
    },
    onError
  );
};

export const updateBookingStatus = async (bookingOrId, status) => {
  const documentId = resolveBookingDocumentId(bookingOrId);

  if (!allowedStatuses.includes(status)) {
    throw new Error(`Invalid booking status: ${status}`);
  }

  return updateDoc(doc(db, 'bookings', documentId), {
    status,
    updatedAt: serverTimestamp(),
  });
};

export const deleteBooking = async (bookingOrId) => {
  const documentId = resolveBookingDocumentId(bookingOrId);

  return deleteDoc(doc(db, 'bookings', documentId));
};
