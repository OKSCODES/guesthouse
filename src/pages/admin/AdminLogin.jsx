import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'admin@umpohliew.com';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();

    if (!email || !password) {
      toast.error('Enter admin email and password');
      return;
    }

    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result.user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        await signOut(auth);
        toast.error('This account is not allowed to access admin');
        return;
      }

      toast.success('Welcome admin');
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-4 py-6 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
      <Toaster position="top-center" />

      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col justify-center">
        <Link to="/" className="mb-6 text-sm font-black text-emerald-700 dark:text-emerald-300">
          ← Back to website
        </Link>

        <section className="rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-black/5 backdrop-blur dark:bg-slate-900/90 dark:text-white dark:ring-white/10">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-700 text-white shadow-lg">
              <LockKeyhole size={26} />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
              Admin Access
            </p>
            <h1 className="mt-2 text-2xl font-black">Umpohliew Dashboard</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
              Sign in to manage bookings, rooms, prices and reviews.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="admin@umpohliew.com"
                  className="input pl-11"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Password</span>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={updateField}
                  placeholder="Enter password"
                  className="input pl-11 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-xl text-slate-500 active:scale-95"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:opacity-60">
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
