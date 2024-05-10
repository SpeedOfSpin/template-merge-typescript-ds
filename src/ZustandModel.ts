import { create } from 'zustand';

export const zustandModel = create((set: any) => ({
  firstName: '',
  updateFirstName: (value: string) => set((state: any) => ({ firstName: (state.firstName = value) })),
}));
