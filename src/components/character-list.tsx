"use client";

import CharacterCard from "./character-card";
import CharacterSearch from "./character-search";

import { api } from "@/services/api";
import { useCharactersStore } from "@/store/characters";
import { Character } from "@/types/character";
import { useQuery } from "@tanstack/react-query";

const CharacterList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const { data } = await api.get("/metahumans");

      useCharactersStore.setState({
        characters: data,
      });

      return data as Character[];
    },
  });

  const filteredCharacters = useCharactersStore(
    (state) => state.filteredCharacters,
  );

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="max-h-[520px] overflow-auto rounded-lg bg-muted p-4">
      <CharacterSearch />

      <ul className="grid grid-cols-5 gap-4 bg-muted p-4">
        {!filteredCharacters.length &&
          data?.map((character) => (
            <li key={character.id} className="basis-60">
              <CharacterCard character={character} />
            </li>
          ))}

        {filteredCharacters.length &&
          filteredCharacters?.map((character) => (
            <li key={character.id} className="basis-60">
              <CharacterCard character={character} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CharacterList;
