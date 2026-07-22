import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BedDouble, CalendarDays, CheckCircle2, ChevronLeft, Mail, Phone, ShieldCheck, UserRound, Users } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { rooms as fallbackRooms } from '../data/siteData';
import { createBooking, subscribeBookingById } from '../services/bookingService';
import { subscribeRooms } from '../services/roomService';
import { validateBooking } from '../utils/validation';
import BookingCard from './BookingCard';
import RoomCard from './RoomCard';
import StatusBadge from './StatusBadge';

const IDS_KEY = 'umpohliew_booking_ids';
const DRAFT_KEY = 'umpohliew_booking_draft';
const steps = [
  { label: 'Room', icon: BedDouble },
  { label: 'Dates', icon: CalendarDays },
  { label: 'Details', icon: UserRound },
  { label: 'Summary', icon: CheckCircle2 },
];

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  checkIn: '',
  checkOut: '',
  roomType: '',
  guests: 1,
  message: '',
};

const readJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};

const saveBookingId = (id) => {
  const ids = [id, ...readJson(IDS_KEY, []).filter((item) => item !== id)].slice(0, 5);
  localStorage.setItem(IDS_KEY, JSON.stringify(ids));
  return ids;
};

export default function BookingFlow() {
  const [searchParams] = useSearchParams();
  const savedDraft = readJson(DRAFT_KEY, {});
  const [rooms, setRooms] = useState(fallbackRooms);
  const [step, setStep] = useState(0);
  const [savedIds, setSavedIds] = useState(() => readJson(IDS_KEY, []));
  const [customerBookings, setCustomerBookings] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    ...emptyForm,
    ...savedDraft,
    roomType: searchParams.get('room') || savedDraft.roomType || '',
  });

  useEffect(() => {
    const unsubscribe = subscribeRooms(
      (items) => items.length > 0 && setRooms(items),
      () => {}
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    if (savedIds.length === 0) {
      setCustomerBookings([]);
      return undefined;
    }

    const unsubscribers = savedIds.map((id) =>
      subscribeBookingById(
        id,
        (booking) => {
          setCustomerBookings((current) => {
            const rest = current.filter((item) => item.id !== id);
            return booking ? [booking, ...rest].sort((a, b) => savedIds.indexOf(a.id) - savedIds.indexOf(b.id)) : rest;
          });
        },
        () => toast.error('Could not load booking status')
      )
    );

    return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
  }, [savedIds]);

  const selectedRoom = useMemo(
    () => rooms.find((room) => String(room.id) === String(form.roomType)),
    [rooms, form.roomType]
  );

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 1;
    const start = new Date(form.checkIn);
    const end = new Date(form.checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [form.checkIn, form.checkOut]);

  const estimate = selectedRoom ? Number(selectedRoom.price || 0) * nights : 0;

  const set = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const currentStepErrors = () => {
    const all = validateBooking(form);
    const keys = step === 0 ? ['roomType', 'guests'] : step === 1 ? ['checkIn', 'checkOut'] : step === 2 ? ['name', 'phone', 'email'] : Object.keys(all);
    return Object.fromEntries(Object.entries(all).filter(([key]) => keys.includes(key)));
  };

  const goNext = () => {
    const currentErrors = currentStepErrors();
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length) {
      toast.error('Please complete this step');
      return;
    }
    setStep((value) => Math.min(value + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStep((value) => Math.max(value - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationErrors = validateBooking(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      toast.error('Please correct the form');
      return;
    }

    setLoading(true);
    try {
      const doc = await createBooking(form);
      setSavedIds(saveBookingId(doc.id));
      setSuccess({ id: doc.id, ...form, status: 'pending' });
      toast.success('Booking request sent');
      localStorage.removeItem(DRAFT_KEY);
      setForm(emptyForm);
      setStep(0);
    } catch {
      toast.error('Firebase not configured or network error');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2.25rem] bg-white p-6 text-center shadow-premium dark:bg-slate-900 sm:p-8">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
            <CheckCircle2 size={54} />
          </span>
          <h1 className="mt-5 text-[32px] font-black leading-tight sm:text-5xl">Booking Request Sent</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300">Your request is pending admin approval. You can check the live status below from this device.</p>
          <div className="mt-6">
            <BookingCard booking={success} />
          </div>
          <button onClick={() => setSuccess(null)} className="btn btn-primary mt-6 w-full">Make Another Booking</button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl">
      {customerBookings[0] && (
        <div className="mb-6 rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-base font-black text-forest dark:text-emerald-300">Latest booking status</p>
              <p className="mt-1 break-all text-base text-slate-600 dark:text-slate-300">{customerBookings[0].bookingId || customerBookings[0].id}</p>
            </div>
            <StatusBadge status={customerBookings[0].status} />
          </div>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <Stepper step={step} setStep={setStep} />

          <form onSubmit={submit} className="rounded-[2rem] bg-white p-5 shadow-premium dark:bg-slate-900 sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.18 }}>
                {step === 0 && <RoomStep rooms={rooms} form={form} errors={errors} set={set} selectedRoom={selectedRoom} />}
                {step === 1 && <DateStep form={form} errors={errors} set={set} />}
                {step === 2 && <DetailsStep form={form} errors={errors} set={set} />}
                {step === 3 && <ConfirmStep form={form} selectedRoom={selectedRoom} nights={nights} estimate={estimate} />}
              </motion.div>
            </AnimatePresence>

            <div className="sticky bottom-[5.9rem] z-20 mt-6 grid grid-cols-2 gap-3 rounded-[1.75rem] bg-white/96 p-2 shadow-2xl backdrop-blur dark:bg-slate-900/96 lg:static lg:bg-transparent lg:p-0 lg:shadow-none">
              <button type="button" disabled={step === 0 || loading} onClick={goBack} className="btn btn-soft w-full disabled:opacity-40">
                <ChevronLeft size={20} /> Back
              </button>
              {step < steps.length - 1 ? (
                <button type="button" onClick={goNext} className="btn btn-primary w-full">
                  Next <ArrowRight size={20} />
                </button>
              ) : (
                <button disabled={loading} className="btn btn-primary w-full disabled:opacity-60">
                  {loading ? 'Sending...' : 'Confirm Booking'}
                </button>
              )}
            </div>
          </form>
        </div>

        <aside className="lg:sticky lg:top-28">
          <BookingSummary selectedRoom={selectedRoom} form={form} nights={nights} estimate={estimate} />
        </aside>
      </div>

      <section className="mt-8">
        <h3 className="text-[24px] font-black">Your Booking Status</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {customerBookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)}
          {customerBookings.length === 0 && <p className="rounded-[2rem] bg-white p-6 text-base text-slate-500 shadow-soft dark:bg-slate-900">No booking request from this device yet.</p>}
        </div>
      </section>
    </section>
  );
}

function Stepper({ step, setStep }) {
  return (
    <div className="mb-6 rounded-[2rem] bg-white p-2 shadow-soft dark:bg-slate-900">
      <div className="grid grid-cols-4 gap-2">
        {steps.map(({ label, icon: Icon }, index) => {
          const active = index === step;
          const done = index < step;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setStep(index)}
              className={`min-h-[72px] rounded-[1.5rem] px-2 text-sm font-black transition active:scale-95 ${
                active ? 'bg-forest text-white shadow-lg shadow-emerald-900/20' : done ? 'bg-emerald-50 text-forest dark:bg-emerald-950/40 dark:text-emerald-200' : 'bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <Icon className="mx-auto mb-1" size={24} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RoomStep({ rooms, form, errors, set, selectedRoom }) {
  return (
    <div>
      <StepHeader title="Choose your room" text="Select your preferred room before entering dates and guest details." />
      <Field label="Room type" err={errors.roomType}>
        <select className="input" value={form.roomType} onChange={(event) => set('roomType', event.target.value)}>
          <option value="">Select room</option>
          {rooms.map((room) => <option key={room.id} value={room.id}>{room.name} - ₹{room.price}/night</option>)}
        </select>
      </Field>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_220px]">
        {selectedRoom ? <RoomMini room={selectedRoom} /> : <div className="rounded-[2rem] bg-[#f5efe6] p-6 text-base text-slate-600 dark:bg-slate-800 dark:text-slate-300">Choose a room to preview pricing and amenities.</div>}
        <Field label="Guests" err={errors.guests}>
          <select className="input" value={form.guests} onChange={(event) => set('guests', event.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((guest) => <option key={guest} value={guest}>{guest} guest{guest > 1 ? 's' : ''}</option>)}
          </select>
        </Field>
      </div>
    </div>
  );
}

function DateStep({ form, errors, set }) {
  const today = new Date().toISOString().split('T')[0];
  return (
    <div>
      <StepHeader title="Select your dates" text="Use native phone date pickers for faster one-hand booking." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Check-in" err={errors.checkIn}>
          <input type="date" min={today} className="input" value={form.checkIn} onChange={(event) => set('checkIn', event.target.value)} />
        </Field>
        <Field label="Check-out" err={errors.checkOut}>
          <input type="date" min={form.checkIn || today} className="input" value={form.checkOut} onChange={(event) => set('checkOut', event.target.value)} />
        </Field>
      </div>
    </div>
  );
}

function DetailsStep({ form, errors, set }) {
  return (
    <div>
      <StepHeader title="Guest details" text="Autofill is supported for quick booking on mobile." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" err={errors.name} icon={UserRound}>
          <input className="input" autoComplete="name" value={form.name} onChange={(event) => set('name', event.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Phone" err={errors.phone} icon={Phone}>
          <input className="input" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(event) => set('phone', event.target.value)} placeholder="Phone number" />
        </Field>
        <Field label="Email" err={errors.email} icon={Mail}>
          <input type="email" className="input" autoComplete="email" value={form.email} onChange={(event) => set('email', event.target.value)} placeholder="Email address" />
        </Field>
        <Field label="Special request" className="sm:col-span-2">
          <textarea className="input min-h-32" value={form.message} onChange={(event) => set('message', event.target.value)} placeholder="Arrival time, extra bed, food request..." />
        </Field>
      </div>
    </div>
  );
}

function ConfirmStep({ form, selectedRoom, nights, estimate }) {
  return (
    <div>
      <StepHeader title="Review your booking" text="Check every detail before sending your request to the guest house." />
      <div className="grid gap-4 sm:grid-cols-2">
        <Summary label="Room" value={selectedRoom?.name || form.roomType || '-'} />
        <Summary label="Guests" value={`${form.guests || 1} guest${Number(form.guests) > 1 ? 's' : ''}`} />
        <Summary label="Dates" value={`${form.checkIn || '-'} → ${form.checkOut || '-'}`} />
        <Summary label="Nights" value={`${nights} night${nights > 1 ? 's' : ''}`} />
        <Summary label="Estimated price" value={estimate ? `₹${estimate.toLocaleString('en-IN')}` : '-'} />
        <Summary label="Guest" value={form.name || '-'} />
        <Summary label="Phone" value={form.phone || '-'} />
        <Summary label="Email" value={form.email || '-'} />
      </div>
      <div className="mt-5 rounded-[1.5rem] bg-emerald-50 p-5 dark:bg-emerald-950/30">
        <div className="flex gap-3">
          <ShieldCheck className="shrink-0 text-forest dark:text-emerald-200" size={24} />
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">This is a booking request. Final availability is confirmed by the admin after approval.</p>
        </div>
      </div>
    </div>
  );
}

function BookingSummary({ selectedRoom, form, nights, estimate }) {
  const image = selectedRoom?.img || selectedRoom?.images?.[0];
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900">
      <h3 className="text-[22px] font-black">Booking Summary</h3>
      {image ? <img src={image} alt={selectedRoom.name} loading="lazy" className="mt-4 h-44 w-full rounded-[1.5rem] object-cover" /> : <div className="mt-4 flex h-44 items-center justify-center rounded-[1.5rem] bg-[#f5efe6] text-base font-bold text-slate-500 dark:bg-slate-800">Select a room</div>}
      <div className="mt-4 grid gap-3">
        <Summary label="Room" value={selectedRoom?.name || 'Not selected'} />
        <Summary label="Dates" value={form.checkIn && form.checkOut ? `${form.checkIn} → ${form.checkOut}` : 'Select dates'} />
        <Summary label="Guests" value={`${form.guests || 1} guest${Number(form.guests) > 1 ? 's' : ''}`} />
        <div className="rounded-[1.5rem] bg-[#143f2c] p-4 text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">Estimated total</p>
          <p className="mt-1 text-[28px] font-black">{estimate ? `₹${estimate.toLocaleString('en-IN')}` : '—'}</p>
          <p className="mt-1 text-base text-white/75">{nights} night{nights > 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  );
}

function RoomMini({ room }) {
  const image = room.img || room.images?.[0];
  return (
    <article className="overflow-hidden rounded-[2rem] bg-[#f5efe6] dark:bg-slate-800">
      {image && <img src={image} alt={room.name} loading="lazy" className="h-48 w-full object-cover" />}
      <div className="p-5">
        <h3 className="text-[22px] font-black">{room.name}</h3>
        <p className="mt-2 text-lg font-black text-forest dark:text-emerald-300">₹{Number(room.price || 0).toLocaleString('en-IN')}/night</p>
        <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{room.description || 'Comfortable room with essential amenities for a peaceful stay.'}</p>
      </div>
    </article>
  );
}

function StepHeader({ title, text }) {
  return (
    <div className="mb-6">
      <h2 className="text-[28px] font-black leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function Field({ label, err, children, icon: Icon, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-center gap-2 text-sm font-black text-slate-700 dark:text-slate-200">{Icon && <Icon size={17} />} {label}</span>
      {children}
      {err && <p className="mt-2 text-sm font-bold text-red-600">{err}</p>}
    </label>
  );
}

function Summary({ label, value }) {
  return (
    <div className="rounded-[1.5rem] bg-slate-50 p-4 dark:bg-slate-800">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 break-words text-base font-black text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}
