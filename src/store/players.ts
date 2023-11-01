import { Character, CharacterOnHover } from "@/types/character";
import { PLAYER } from "@/types/enums";
import { create } from "zustand";

interface PlayersStore {
  player1: Character;
  player2: Character;
  characterOnHover: CharacterOnHover;
  selectCharacter: (player: 1 | 2, character: Character) => void;
}

export const usePlayersStore = create<PlayersStore>((set) => ({
  player1: {} as Character,
  player2: {} as Character,
  characterOnHover: {} as CharacterOnHover,
  setCharacterOnHover: (character: CharacterOnHover) => {
    set((state) => ({
      ...state,
      characterOnHover: character,
    }));
  },

  selectCharacter: (player: 1 | 2, character: Character) => {
    set((state) => ({
      ...state,
      [PLAYER[player]]: character,
    }));
  },
}));
