export const required = (v) => String(v || '').trim().length > 0;
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isPhone = (v) => /^[0-9+\-\s]{7,15}$/.test(v);
export const validateBooking = (f) => {
  const e = {};
  if(!required(f.name)) e.name='Name is required';
  if(!isPhone(f.phone)) e.phone='Valid phone is required';
  if(!isEmail(f.email)) e.email='Valid email is required';
  if(!f.checkIn) e.checkIn='Check-in is required';
  if(!f.checkOut) e.checkOut='Check-out is required';
  if(f.checkIn && f.checkOut && f.checkOut <= f.checkIn) e.checkOut='Check-out must be after check-in';
  if(!f.roomType) e.roomType='Select a room';
  if(Number(f.guests)<1) e.guests='Guests must be at least 1';
  return e;
};
