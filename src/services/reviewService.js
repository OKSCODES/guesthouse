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
  where,
} from 'firebase/firestore';
import { db } from './firebase';

const reviewsRef = collection(db, 'reviews');
const mapReview = (snapshotDoc) => ({ id: snapshotDoc.id, ...snapshotDoc.data() });

export const createReview = (data) =>
  addDoc(reviewsRef, {
    name: data.name?.trim() || '',
    rating: Number(data.rating || 5),
    comment: data.comment?.trim() || '',
    approved: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

export const subscribeReviews = ({ approvedOnly = false } = {}, onNext, onError) => {
  const constraints = approvedOnly ? [where('approved', '==', true), orderBy('createdAt', 'desc')] : [orderBy('createdAt', 'desc')];
  return onSnapshot(query(reviewsRef, ...constraints), (snapshot) => onNext(snapshot.docs.map(mapReview)), onError);
};

export const approveReview = (id) =>
  updateDoc(doc(db, 'reviews', id), {
    approved: true,
    updatedAt: serverTimestamp(),
  });

export const deleteReview = (id) => deleteDoc(doc(db, 'reviews', id));
