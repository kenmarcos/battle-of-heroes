"use client";

import CharacterList from "./character-list";
import CharacterSection from "./character-section";

import { usePlayersStore } from "@/store/players";
import { twMerge } from "tailwind-merge";

const Characters = () => {
  const player1 = usePlayersStore((state) => state.player1);

  const divClassName = twMerge(
    "flex gap-6 container",
    !!Object.keys(player1).length
      ? "flex-row-reverse animate-slide-left"
      : "flex-row",
  );

  return (
    <section className={divClassName}>
      <CharacterSection />

      <CharacterList />
    </section>
  );
};

export default Characters;
