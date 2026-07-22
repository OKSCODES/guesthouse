import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReviewForm from '../components/ReviewForm';
import SectionTitle from '../components/SectionTitle';
import Skeleton from '../components/Skeleton';
import useSeo from '../hooks/useSeo';
import { subscribeReviews } from '../services/reviewService';

export default function Reviews() {
  useSeo({ title: 'Reviews | Umpohliew Guest House', description: 'Read guest reviews and share your stay experience.' });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeReviews(
      { approvedOnly: true },
      (items) => {
        setReviews(items);
        setLoading(false);
      },
      () => {
        toast.error('Could not load reviews');
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <main className="section">
      <div className="containerx">
        <SectionTitle eyebrow="Guest Reviews" title="What Guests Say" text="Real experiences from visitors who stayed with us." />
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <section>
            {loading ? (
              <Skeleton className="h-72" />
            ) : reviews.length === 0 ? (
              <div className="rounded-3xl bg-white p-10 text-center shadow-soft dark:bg-slate-900">
                <h3 className="text-xl font-black">No approved reviews yet</h3>
                <p className="mt-2 text-slate-500">Be the first to share your experience.</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review) => (
                  <article className="card p-5" key={review.id}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-black">{review.name}</h3>
                      <span className="text-amber-500">{'★'.repeat(Number(review.rating || 0))}</span>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">{review.comment}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
          <aside>
            <ReviewForm />
          </aside>
        </div>
      </div>
    </main>
  );
}
