import { BedDouble, Edit3, Image as ImageIcon, IndianRupee, Plus, Trash2, Users, Wifi, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../components/ConfirmModal';
import Skeleton from '../../components/Skeleton';
import { createRoom, deleteRoom, subscribeRooms, updateRoom } from '../../services/roomService';

const fallbackImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80';

const emptyRoom = {
  name: '',
  price: '',
  description: '',
  images: '',
  amenities: '',
};

export default function RoomsManager() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState(emptyRoom);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    return subscribeRooms(
      (rows) => {
        setRooms(rows);
        setLoading(false);
      },
      () => {
        toast.error('Could not load rooms');
        setLoading(false);
      }
    );
  }, []);

  const title = useMemo(() => (editingId ? 'Edit Room' : 'Add Room'), [editingId]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const resetForm = () => {
    setForm(emptyRoom);
    setEditingId(null);
    setShowForm(false);
  };

  const startEdit = (room) => {
    setEditingId(room.id);
    setForm({
      name: room.name || '',
      price: room.price || '',
      description: room.description || '',
      images: Array.isArray(room.images) ? room.images.join('\n') : '',
      amenities: Array.isArray(room.amenities) ? room.amenities.join(', ') : '',
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buildPayload = () => ({
    name: form.name.trim(),
    price: Number(form.price),
    description: form.description.trim(),
    images: form.images
      .split('\n')
      .map((image) => image.trim())
      .filter(Boolean)
      .slice(0, 5),
    amenities: form.amenities
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = buildPayload();

    if (!payload.name || !payload.price || Number.isNaN(payload.price)) {
      toast.error('Room name and valid price are required');
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await updateRoom(editingId, payload);
        toast.success('Room updated');
      } else {
        await createRoom(payload);
        toast.success('Room added');
      }
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error('Room could not be saved');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    setDeletingId(deleteTarget.id);
    try {
      await deleteRoom(deleteTarget.id);
      toast.success('Room deleted');
      setDeleteTarget(null);
    } catch (error) {
      console.error(error);
      toast.error('Room could not be deleted');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F5F43] dark:text-emerald-300">Inventory</p>
          <h2 className="mt-2 text-[2rem] font-black leading-tight text-slate-950 dark:text-white">Rooms & Pricing</h2>
          <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">
            Add rooms, update nightly rates, images and guest amenities.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingId(null);
            setForm(emptyRoom);
            setShowForm(true);
          }}
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#1F5F43] px-6 text-base font-black text-white shadow-lg shadow-emerald-900/20 transition focus:outline-none focus:ring-4 focus:ring-emerald-900/20 active:scale-95 sm:w-auto"
          type="button"
        >
          <Plus size={22} /> Add Room
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D4A95D]">
                {editingId ? 'Update listing' : 'New listing'}
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">
                Keep descriptions short, clear and trust-building for mobile guests.
              </p>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="grid min-h-12 min-w-12 place-items-center rounded-2xl bg-[#F5EFE6] text-slate-700 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 dark:bg-slate-800 dark:text-slate-200"
              aria-label="Close form"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Room Name" icon={BedDouble}>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                placeholder="Deluxe Valley Room"
                autoComplete="off"
              />
            </Field>

            <Field label="Price per night" icon={IndianRupee}>
              <input
                name="price"
                type="number"
                min="0"
                value={form.price}
                onChange={updateField}
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                placeholder="2500"
                inputMode="numeric"
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5">
            <Field label="Description" icon={Users}>
              <textarea
                name="description"
                value={form.description}
                onChange={updateField}
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white min-h-32 resize-none py-4"
                placeholder="Peaceful room with scenic views, hot water and comfortable bedding."
              />
            </Field>

            <Field label="Image URLs, one per line, max 5" icon={ImageIcon}>
              <textarea
                name="images"
                value={form.images}
                onChange={updateField}
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white min-h-36 resize-none py-4"
                placeholder="https://example.com/room-1.jpg"
              />
            </Field>

            <Field label="Amenities, separated by commas" icon={Wifi}>
              <input
                name="amenities"
                value={form.amenities}
                onChange={updateField}
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 text-base font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1F5F43] focus:ring-4 focus:ring-emerald-900/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                placeholder="WiFi, Hot water, Parking, Breakfast"
              />
            </Field>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={resetForm}
              disabled={saving}
              className="min-h-14 rounded-2xl bg-[#F5EFE6] px-6 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="min-h-14 rounded-2xl bg-[#1F5F43] px-6 text-base font-black text-white shadow-lg shadow-emerald-900/20 transition focus:outline-none focus:ring-4 focus:ring-emerald-900/20 active:scale-95 disabled:opacity-60"
            >
              {saving ? 'Saving...' : editingId ? 'Update Room' : 'Save Room'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Skeleton className="h-96 rounded-[2rem]" />
          <Skeleton className="h-96 rounded-[2rem]" />
          <Skeleton className="h-96 rounded-[2rem]" />
        </div>
      ) : rooms.length === 0 ? (
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-[#F5EFE6] text-[#1F5F43] dark:bg-slate-800">
            <BedDouble size={28} />
          </div>
          <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">No rooms added yet</h3>
          <p className="mt-2 text-base leading-7 text-slate-500 dark:text-slate-300">Tap Add Room to create your first room listing.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900 dark:ring-slate-800"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={room.images?.[0] || fallbackImage}
                  alt={room.name || 'Guest house room'}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-base font-black text-[#1F5F43] shadow-lg">
                  ₹{Number(room.price || 0).toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black leading-tight text-slate-950 dark:text-white">{room.name}</h3>
                    <p className="mt-2 text-base font-black text-[#1F5F43] dark:text-emerald-300">
                      ₹{Number(room.price || 0).toLocaleString('en-IN')} / night
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    Active
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {room.description || 'No description added.'}
                </p>

                {room.amenities?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#F5EFE6] px-4 py-2 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => startEdit(room)}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#F5EFE6] px-4 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 dark:bg-slate-800 dark:text-slate-100"
                    type="button"
                  >
                    <Edit3 size={20} /> Edit
                  </button>
                  <button
                    disabled={deletingId === room.id}
                    onClick={() => setDeleteTarget(room)}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-red-50 px-4 text-base font-black text-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 disabled:opacity-60 dark:bg-red-950/40 dark:text-red-300"
                    type="button"
                  >
                    <Trash2 size={20} /> Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete room?"
        message={`Delete ${deleteTarget?.name || 'this room'} from your room listings?`}
        confirmText="Delete Room"
        loading={deletingId === deleteTarget?.id}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </section>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
        <Icon size={18} />
        {label}
      </span>
      {children}
    </label>
  );
}
