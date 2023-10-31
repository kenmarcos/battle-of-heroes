"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { useCharactersStore } from "@/store/characters";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const characterSearchSchema = z.object({
  name: z.string(),
});

type CharacterSearchForm = z.infer<typeof characterSearchSchema>;

const CharacterSearch = () => {
  const filterCharacters = useCharactersStore(
    (state) => state.filterCharacters,
  );

  const filteredCharacters = useCharactersStore(
    (state) => state.filteredCharacters,
  );

  const { register, handleSubmit, reset, watch } = useForm<CharacterSearchForm>(
    {
      resolver: zodResolver(characterSearchSchema),
    },
  );

  const handleOnSubmit = (data: CharacterSearchForm) => {
    filterCharacters(data.name);
  };

  const handleClearInput = () => {
    reset();

    useCharactersStore.setState({
      filteredCharacters: [],
    });
  };

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Input placeholder="Hero's name..." {...register("name")} />
      <Button
        type="submit"
        disabled={!watch("name")}
        className="disabled:pointer-events-auto disabled:cursor-not-allowed"
      >
        Search
      </Button>
      <Button
        type="button"
        onClick={handleClearInput}
        disabled={!filteredCharacters.length}
        className="disabled:pointer-events-auto disabled:cursor-not-allowed"
      >
        All Heroes
      </Button>
    </form>
  );
};

export default CharacterSearch;
