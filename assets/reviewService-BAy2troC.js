import { w as where, i as orderBy, o as onSnapshot, q as query, k as updateDoc, l as doc, d as db, n as deleteDoc, b as collection, s as serverTimestamp } from "./index-DeB-K_98.js";
const reviewsRef = collection(db, "reviews");
const mapReview = (snapshotDoc) => ({ id: snapshotDoc.id, ...snapshotDoc.data() });
const subscribeReviews = ({ approvedOnly = false } = {}, onNext, onError) => {
  const constraints = approvedOnly ? [where("approved", "==", true), orderBy("createdAt", "desc")] : [orderBy("createdAt", "desc")];
  return onSnapshot(query(reviewsRef, ...constraints), (snapshot) => onNext(snapshot.docs.map(mapReview)), onError);
};
const approveReview = (id) => updateDoc(doc(db, "reviews", id), {
  approved: true,
  updatedAt: serverTimestamp()
});
const deleteReview = (id) => deleteDoc(doc(db, "reviews", id));
export {
  approveReview as a,
  deleteReview as d,
  subscribeReviews as s
};
