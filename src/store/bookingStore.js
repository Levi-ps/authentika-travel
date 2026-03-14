'use client';

import create from 'zustand';

const useBookingStore = create((set) => ({
  bookingData: {},
  setBookingData: (data) => set({ bookingData: { ...data } }),
  resetBookingData: () => set({ bookingData: {} }),
}));

export default useBookingStore;
