"use client";

import React from "react";

import CharacterInfo from "./character-info";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { usePlayersStore } from "@/store/players";
import { Character } from "@/types/character";
import { PLAYER } from "@/types/enums";

const BattlePreparation = () => {
  const restartGame = () => {
    usePlayersStore.setState({
      player1: {} as Character,
      player2: {} as Character,
    });
  };

  return (
    <section className="container flex items-center justify-between gap-4">
      <CharacterInfo player={PLAYER.player1} />

      <div className="flex flex-col items-center gap-4">
        <p className="text-9xl font-black text-primary">X</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="w-full font-bold uppercase">
              Let&apos;s go to battle!
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold uppercase">
                The Battle!
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
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

      <CharacterInfo player={PLAYER.player2} />
    </section>
  );
};

export default BattlePreparation;
