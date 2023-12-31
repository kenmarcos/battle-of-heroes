"use client";

import React from "react";

import BattleModal from "./battle-modal";
import CharacterInfo from "./character-info/character-info";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

import { usePlayersStore } from "@/store/players";
import { Character } from "@/types/character";

const BattlePreparation = () => {
  const player1 = usePlayersStore((state) => state.player1);
  const player2 = usePlayersStore((state) => state.player2);

  const restartGame = () => {
    usePlayersStore.setState({
      player1: {} as Character,
      player2: {} as Character,
    });
  };

  return (
    <section className="container flex items-center justify-evenly gap-4">
      <CharacterInfo.Root
        image={player1.images.md}
        imageAlt={player1.name}
        className="w-96"
      />

      <div className="flex flex-col items-center gap-4">
        <p className="text-9xl font-black text-primary">X</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="w-full font-bold uppercase">
              Let&apos;s go to battle!
            </Button>
          </DialogTrigger>

          <BattleModal />
        </Dialog>

        <Button
          size="lg"
          variant="secondary"
          className="w-full font-bold uppercase"
          onClick={restartGame}
        >
          Restart
        </Button>
      </div>

      <CharacterInfo.Root
        image={player2.images.md}
        imageAlt={player2.name}
        className="w-96"
      />
    </section>
  );
};

export default BattlePreparation;
