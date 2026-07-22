import StatusBadge from './StatusBadge';

export default function BookingTable({ rows = [], loadingId, onApprove, onReject, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white shadow-soft dark:bg-slate-900">
      <table className="w-full min-w-[980px] text-left">
        <thead className="bg-emerald-50 text-sm uppercase tracking-wide text-forest dark:bg-slate-800 dark:text-emerald-300">
          <tr>
            {['Booking ID', 'Guest', 'Room', 'Dates', 'Guests', 'Status', 'Actions'].map((heading) => (
              <th className="p-4" key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((booking) => {
            const isLoading = loadingId === booking.id;
            const roomName = booking.room || booking.roomType || 'Not selected';

            return (
              <tr className="border-t border-slate-100 align-top dark:border-slate-800" key={booking.id}>
                <td className="p-4 font-black">{booking.bookingId || booking.id}</td>
                <td className="p-4">
                  <span className="font-bold">{booking.name}</span>
                  <br />
                  <span className="text-sm text-slate-500">{booking.phone}</span>
                  <br />
                  <span className="text-sm text-slate-500">{booking.email}</span>
                </td>
                <td className="p-4 font-semibold">{roomName}</td>
                <td className="p-4 text-sm">
                  <span className="font-bold">{booking.checkIn}</span>
                  <span className="mx-2">→</span>
                  <span className="font-bold">{booking.checkOut}</span>
                </td>
                <td className="p-4">{booking.guests}</td>
                <td className="p-4"><StatusBadge status={booking.status} /></td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={isLoading || booking.status === 'approved'}
                      onClick={() => onApprove(booking.id)}
                      className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-500/15 dark:text-emerald-300"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      disabled={isLoading || booking.status === 'rejected'}
                      onClick={() => onReject(booking.id)}
                      className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-amber-500/15 dark:text-amber-300"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => onDelete(booking)}
                      className="rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-500/15 dark:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 && (
        <div className="p-10 text-center">
          <h3 className="text-xl font-black">No bookings found</h3>
          <p className="mt-2 text-slate-500">New booking requests will appear here instantly.</p>
        </div>
      )}
    </div>
  );
}
