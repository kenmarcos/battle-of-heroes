import { Character } from "@/types/character";
import { create } from "zustand";

interface CharactersStore {
  characters: Character[];
  filteredCharacters: Character[];
  characterOnHover: Character;

  filterCharacters: (name: string) => void;
}

export const useCharactersStore = create<CharactersStore>((set) => ({
  characters: [],
  filteredCharacters: [],

  characterOnHover: {} as Character,
  setCharacterOnHover: (character: Character) => {
    set((state) => ({
      ...state,
      characterOnHover: character,
    }));
  },

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
