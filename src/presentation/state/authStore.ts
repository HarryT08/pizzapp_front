import { create } from "zustand";
import type { User } from "../../domain/entities/User";

type AuthState = {
  token: string | null;
  user: User | null;
  setSession: (s: { token: string; user: User }) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setSession: ({ token, user }) => set({ token, user }),
  clear: () => set({ token: null, user: null }),
}));
