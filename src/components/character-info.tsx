"use client";

import Image from "next/image";

import { usePlayersStore } from "@/store/players";
import { PLAYER } from "@/types/enums";

interface CharacterInfoProps {
  player?: 1 | 2;
}

const CharacterInfo = ({ player }: CharacterInfoProps) => {
  const characterOnHover = usePlayersStore((state) => state.characterOnHover);
  const player1 = usePlayersStore((state) => state.player1);
  const player2 = usePlayersStore((state) => state.player2);

  let character = characterOnHover;

  if (player) {
    character = player === PLAYER.player1 ? player1 : player2;
  }

  const { name, images, appearance } = character;

  return (
    <section className="w-5/12">
      {!Object.keys(characterOnHover).length && (
        <div className="mx-auto flex h-full max-w-[322px] animate-fade-in flex-col items-center justify-center gap-4 ">
          <p className="text-4xl font-bold">
            {!Object.keys(player1).length ? "Player 1" : "Player 2"}
          </p>

          <p className="text-center text-2xl">
            Choose your hero and get ready for the battle!
          </p>
        </div>
      )}

      {!!Object.keys(characterOnHover).length && (
        <div className="relative animate-fade-in overflow-hidden rounded-lg">
          <div>
            <Image
              src={images.lg}
              alt="teste"
              width={0}
              height={0}
              className="h-[500px] w-full object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
            />
          </div>

          <div className="absolute bottom-0 w-full space-y-2 bg-info-gradient p-4 font-bold">
            <h3 className="text-3xl font-black underline underline-offset-4">
              {name}
            </h3>

            <div className="grid grid-cols-2">
              <div className="flex gap-4">
                <p>Gender:</p>
                <p>{appearance.gender}</p>
              </div>

              <div className="flex gap-4">
                <p>Race:</p>
                <p>{appearance.race}</p>
              </div>

              <div className="flex gap-4">
                <p>Height:</p>
                <p>{appearance.height[1]}</p>
              </div>

              <div className="flex gap-4">
                <p>Weight:</p>
                <p>{appearance.weight[1]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CharacterInfo;
