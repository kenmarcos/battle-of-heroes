import { Character } from "@/types/character";
import { create } from "zustand";

interface CharactersStore {
  characters: Character[];
  filteredCharacters: Character[];
  filterCharacters: (name: string) => void;
}

export const useCharactersStore = create<CharactersStore>((set) => ({
  characters: [],
  filteredCharacters: [],

  filterCharacters: (name: string) => {
    set((state) => {
      const filteredCharacters = state.characters.filter((character) => {
        return character.name.toLowerCase().includes(name.toLowerCase());
      });

      return {
        ...state,
        filteredCharacters: filteredCharacters,
      };
    });
  },
}));
