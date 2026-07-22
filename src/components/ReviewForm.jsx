import { useState } from 'react';
import toast from 'react-hot-toast';
import { createReview } from '../services/reviewService';

export default function ReviewForm({ onDone }) {
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      await createReview(form);
      toast.success('Review submitted for approval');
      setForm({ name: '', rating: 5, comment: '' });
      onDone?.();
    } catch {
      toast.error('Could not submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-3xl bg-white p-5 shadow-soft dark:bg-slate-900">
      <input className="input" placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
      <select className="input" value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })}>
        {[5, 4, 3, 2, 1].map((number) => <option key={number} value={number}>{number} stars</option>)}
      </select>
      <textarea className="input min-h-28" placeholder="Share your experience" value={form.comment} onChange={(event) => setForm({ ...form, comment: event.target.value })} />
      <button disabled={loading} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Review'}</button>
    </form>
  );
}
