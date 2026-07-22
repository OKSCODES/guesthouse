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

const roomsRef = collection(db, 'rooms');
const mapRoom = (snapshotDoc) => ({ id: snapshotDoc.id, ...snapshotDoc.data() });

const normalizeRoom = (data) => ({
  name: data.name?.trim() || '',
  price: Number(data.price || 0),
  description: data.description?.trim() || '',
  guests: Number(data.guests || 2),
  images: Array.isArray(data.images) ? data.images.slice(0, 5) : [],
  amenities: Array.isArray(data.amenities) ? data.amenities : [],
  updatedAt: serverTimestamp(),
});

export const subscribeRooms = (onNext, onError) =>
  onSnapshot(query(roomsRef, orderBy('createdAt', 'desc')), (snapshot) => onNext(snapshot.docs.map(mapRoom)), onError);

export const createRoom = (data) =>
  addDoc(roomsRef, {
    ...normalizeRoom(data),
    createdAt: serverTimestamp(),
  });

export const updateRoom = (id, data) => updateDoc(doc(db, 'rooms', id), normalizeRoom(data));

export const deleteRoom = (id) => deleteDoc(doc(db, 'rooms', id));
