"use client";

import { useMemo } from "react";

import CharacterInfo from "./character-info/character-info";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

import { usePlayersStore } from "@/store/players";
import { twMerge } from "tailwind-merge";

const BattleModal = () => {
  const player1 = usePlayersStore((state) => state.player1);
  const player2 = usePlayersStore((state) => state.player2);

  const player1Powerstats = Object.entries(player1.powerstats);
  const player2Powerstats = Object.entries(player2.powerstats);

  const player1TotalPower = useMemo(
    () => player1Powerstats.reduce((acc, [_, value]) => acc + value, 0),
    [player1Powerstats],
  );

  const player2TotalPower = useMemo(
    () => player2Powerstats.reduce((acc, [_, value]) => acc + value, 0),
    [player2Powerstats],
  );

  const winner = player1TotalPower > player2TotalPower ? player1 : player2;

  return (
    <DialogContent className="md:max-w-screen-lg">
      <DialogHeader>
        <DialogTitle className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold uppercase text-transparent">
          The Battle!
        </DialogTitle>
      </DialogHeader>

      <div>
        <div className="mt-4 grid grid-cols-2 justify-items-center">
          <div
            className={twMerge(
              "relative",
              winner === player1 ? "animate-blink" : "animate-darken",
            )}
          >
            {winner === player1 && (
              <p className="drop-shadow-primary absolute -top-11 z-10 w-full animate-pulse text-center text-7xl font-black text-green-800 drop-shadow-md">
                Winner!
              </p>
            )}

            <CharacterInfo.Root
              image={player1.images.md}
              imageAlt={player1.name}
              className="w-80"
            >
              <CharacterInfo.Content title={player1.name}>
                {player1Powerstats.map(([key, value]) => (
                  <CharacterInfo.Item
                    key={key}
                    itemName={key}
                    itemValue={value}
                  />
                ))}

                <CharacterInfo.Item
                  itemName="Total"
                  itemValue={player1TotalPower}
                  className={twMerge(
                    "text-xl font-black",
                    winner === player1 ? "text-green-800" : "",
                  )}
                />
              </CharacterInfo.Content>
            </CharacterInfo.Root>
          </div>

          <div
            className={twMerge(
              "relative",
              winner === player2 ? "animate-blink" : "animate-darken",
            )}
          >
            {winner === player2 && (
              <p className="drop-shadow-primary absolute -top-11 z-10 w-full animate-pulse text-center text-7xl font-black text-green-800 drop-shadow-md">
                Winner!
              </p>
            )}

            <CharacterInfo.Root
              image={player2.images.md}
              imageAlt={player2.name}
              className="w-80"
            >
              <CharacterInfo.Content title={player2.name}>
                {player2Powerstats.map(([key, value]) => (
                  <CharacterInfo.Item
                    key={key}
                    itemName={key}
                    itemValue={value}
                  />
                ))}

                <CharacterInfo.Item
                  itemName="Total"
                  itemValue={player2TotalPower}
                  className={twMerge(
                    "text-xl font-black",
                    winner === player2 ? "text-green-800" : "",
                  )}
                />
              </CharacterInfo.Content>
            </CharacterInfo.Root>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default BattleModal;
