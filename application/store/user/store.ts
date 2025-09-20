import { create } from 'zustand';

export interface User {
  userId: string;
  name: string;
  email: string;
  profile: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const UserStore = create<UserState>(set => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));
