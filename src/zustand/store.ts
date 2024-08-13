import { create } from "zustand";

type State = {
  roomEdit: string;
};

type Action = {
  updateRoomEdit: (data: string) => void;
  removeRoomEdit: () => void;
};

export const useRoomEdit = create<State & Action>((set) => ({
  roomEdit: "",
  updateRoomEdit: (data) => set({ roomEdit: data }),
  removeRoomEdit: () => set({ roomEdit: "" }),
}));
