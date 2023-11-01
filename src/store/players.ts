import { Character } from "@/types/character";
import { PLAYER } from "@/types/enums";
import { create } from "zustand";

interface PlayersStore {
  player1: Character;
  player2: Character;
  selectCharacter: (player: 1 | 2, character: Character) => void;
}

export const usePlayersStore = create<PlayersStore>((set) => ({
  player1: {} as Character,
  player2: {} as Character,

  selectCharacter: (player: 1 | 2, character: Character) => {
    set((state) => ({
      ...state,
      [PLAYER[player]]: character,
    }));
  },
}));
