export { createBooking } from './bookingService';
export { createReview, approveReview, deleteReview } from './reviewService';

import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const createContact = async (data) => addDoc(collection(db, 'contacts'), { ...data, createdAt: serverTimestamp() });

export const listCollection = async (name) =>
  (await getDocs(query(collection(db, name), orderBy('createdAt', 'desc')))).docs.map((item) => ({ id: item.id, ...item.data() }));

export const removeDoc = async (name, id) => deleteDoc(doc(db, name, id));
