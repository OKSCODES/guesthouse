import { signOut } from 'firebase/auth';
import { CheckCircle2, Clock3, DoorOpen, MessageSquare, Search, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminBookingCard from '../../components/AdminBookingCard';
import ConfirmModal from '../../components/ConfirmModal';
import Skeleton from '../../components/Skeleton';
import { deleteBooking, subscribeBookings, updateBookingStatus } from '../../services/bookingService';
import { auth } from '../../services/firebase';
import { approveReview, deleteReview, subscribeReviews } from '../../services/reviewService';
import RoomsManager from './RoomsManager';

const tabs = [
  { id: 'bookings', label: 'Bookings', icon: Clock3 },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare },
  { id: 'rooms', label: 'Rooms', icon: DoorOpen },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingId, setLoadingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    if (tab !== 'bookings') return undefined;
    setLoading(true);
    return subscribeBookings(
      { status: statusFilter, search },
      (rows) => { setBookings(rows); setLoading(false); },
      () => { toast.error('Could not load bookings'); setLoading(false); }
    );
  }, [tab, statusFilter, search]);

  useEffect(() => {
    if (tab !== 'reviews') return undefined;
    setLoading(true);
    return subscribeReviews(
      {},
      (rows) => { setReviews(rows); setLoading(false); },
      () => { toast.error('Could not load reviews'); setLoading(false); }
    );
  }, [tab]);

  const stats = useMemo(() => ({
    pending: bookings.filter((booking) => booking.status === 'pending').length,
    approved: bookings.filter((booking) => booking.status === 'approved').length,
    rejected: bookings.filter((booking) => booking.status === 'rejected').length,
  }), [bookings]);

  const getRowId = (booking) => booking?.firestoreId || booking?.documentId || booking?.id || '';

  const changeStatus = async (booking, status) => {
    const rowId = getRowId(booking);
    setLoadingId(rowId);
    try {
      await updateBookingStatus(booking, status);
      toast.success(status === 'approved' ? 'Booking approved' : 'Booking rejected');
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Status could not be updated');
    } finally {
      setLoadingId(null);
    }
  };

  const confirmDeleteBooking = async () => {
    if (!deleteTarget) return;
    setLoadingId(getRowId(deleteTarget));
    try {
      await deleteBooking(deleteTarget);
      toast.success('Booking deleted');
      setDeleteTarget(null);
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Booking could not be deleted');
    } finally {
      setLoadingId(null);
    }
  };

  const handleReviewApprove = async (id) => {
    setLoadingId(id);
    try { await approveReview(id); toast.success('Review approved'); }
    catch { toast.error('Review could not be approved'); }
    finally { setLoadingId(null); }
  };

  const handleReviewDelete = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    setLoadingId(id);
    try { await deleteReview(id); toast.success('Review deleted'); }
    catch { toast.error('Review could not be deleted'); }
    finally { setLoadingId(null); }
  };

  const logout = async () => {
    await signOut(auth);
    navigate('/admin/login', { replace: true });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 p-4 pb-24 dark:bg-slate-950 dark:text-white">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">Control Panel</p>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">Umpohliew Admin</h1>
          </div>
          <button onClick={logout} className="btn btn-soft px-5">Logout</button>
        </div>

        <div className="my-5 grid grid-cols-3 gap-2">
          <Stat icon={Clock3} label="Pending" value={stats.pending} tone="bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" />
          <Stat icon={CheckCircle2} label="Approved" value={stats.approved} tone="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" />
          <Stat icon={XCircle} label="Rejected" value={stats.rejected} tone="bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300" />
        </div>

        <div className="sticky top-20 z-30 mb-5 grid grid-cols-3 gap-2 rounded-3xl bg-white/95 p-2 shadow-soft backdrop-blur dark:bg-slate-900/95">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)} className={`min-h-14 rounded-2xl text-xs font-black capitalize transition active:scale-95 sm:text-sm ${tab === id ? 'bg-emerald-700 text-white' : 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>
              <Icon className="mx-auto mb-1" size={18} /> {label}
            </button>
          ))}
        </div>

        {tab === 'bookings' && (
          <section>
            <div className="mb-4 grid gap-3 md:grid-cols-[1fr_220px]">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="input pl-11" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, phone, email" />
              </label>
              <select className="input" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {loading ? <Skeleton className="h-80" /> : bookings.length === 0 ? <Empty text="No bookings found" /> : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {bookings.map((booking) => (
                  <AdminBookingCard
                    key={booking.id}
                    booking={booking}
                    loading={loadingId === getRowId(booking)}
                    onApprove={(id) => changeStatus(id, 'approved')}
                    onReject={(id) => changeStatus(id, 'rejected')}
                    onDelete={setDeleteTarget}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {tab === 'reviews' && (
          <section>
            {loading ? <Skeleton className="h-72" /> : reviews.length === 0 ? <Empty text="No reviews yet" /> : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {reviews.map((review) => (
                  <article className="card p-5" key={review.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div><h3 className="font-black">{review.name}</h3><p className="text-sm text-slate-500">{review.approved ? 'Approved' : 'Waiting approval'}</p></div>
                      <span className="text-amber-500">{'★'.repeat(Number(review.rating || 0))}</span>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">{review.comment}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {!review.approved && <button disabled={loadingId === review.id} onClick={() => handleReviewApprove(review.id)} className="btn btn-primary disabled:opacity-60">Approve</button>}
                      <button disabled={loadingId === review.id} onClick={() => handleReviewDelete(review.id)} className="btn bg-red-50 text-red-600 disabled:opacity-60 dark:bg-red-950/40">Delete</button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {tab === 'rooms' && <RoomsManager />}
      </div>
      <ConfirmModal open={Boolean(deleteTarget)} title="Delete booking?" message={`Delete booking ${deleteTarget?.bookingId || deleteTarget?.id || ''}?`} loading={loadingId === getRowId(deleteTarget)} onCancel={() => setDeleteTarget(null)} onConfirm={confirmDeleteBooking} />
    </main>
  );
}

function Stat({ label, value, tone, icon: Icon }) {
  return <div className={`rounded-2xl p-3 text-center ${tone}`}><Icon className="mx-auto mb-1" size={20} /><p className="text-2xl font-black">{value}</p><p className="text-[11px] font-bold sm:text-xs">{label}</p></div>;
}

function Empty({ text }) {
  return <div className="rounded-3xl bg-white p-10 text-center shadow-soft dark:bg-slate-900"><h3 className="text-xl font-black">{text}</h3><p className="mt-2 text-slate-500">Real-time data will appear here.</p></div>;
}
