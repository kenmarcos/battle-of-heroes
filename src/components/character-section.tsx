"use client";

import CharacterInfo from "./character-info/character-info";

import { useCharactersStore } from "@/store/characters";
import { usePlayersStore } from "@/store/players";

const CharacterSection = () => {
  const characterOnHover = useCharactersStore(
    (state) => state.characterOnHover,
  );
  const player1 = usePlayersStore((state) => state.player1);

  const { name, images, appearance } = characterOnHover;

  const data = appearance
    ? Object.entries(appearance).map(([key, value]) => {
        if (value === null) {
          value = " - ";
        }

        if (typeof value === "object") {
          value = value.join(" / ");
        }

        return [key, value];
      })
    : [];

  return (
    <section className="w-5/12">
      {!Object.keys(characterOnHover).length && (
        <div className="mx-auto flex h-full max-w-[322px] animate-fade-in flex-col items-center justify-center gap-4">
          <p className="text-4xl font-bold">
            {!Object.keys(player1).length ? "Player 1" : "Player 2"}
          </p>

          <p className="text-center text-2xl">
            Choose your hero and get ready for the battle!
          </p>
        </div>
      )}

      {!!Object.keys(characterOnHover).length && (
        <CharacterInfo.Root
          image={images.lg}
          imageAlt={name}
          className="mx-auto w-[390px]"
        >
          <CharacterInfo.Content title={name}>
            {data?.map((item, index) => (
              <CharacterInfo.Item
                key={index}
                itemName={item[0]}
                itemValue={item[1]}
              />
            ))}
          </CharacterInfo.Content>
        </CharacterInfo.Root>
      )}
    </section>
  );
};

export default CharacterSection;
