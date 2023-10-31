"use client";

import Image from "next/image";

import { usePlayersStore } from "@/store/players";

const CharacterInfo = () => {
  const character = usePlayersStore((state) => state.characterOnHover);

  const { name, images, appearance } = character;

  return (
    <section className="w-5/12">
      {!Object.keys(character).length && (
        <p className="animate-fade-in  mx-auto flex h-full max-w-[322px] items-center text-center text-2xl">
          Choose your hero and get ready for the battle!
        </p>
      )}

      {!!Object.keys(character).length && (
        <div className="animate-fade-in relative overflow-hidden rounded-lg">
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

          <div className="bg-info-gradient absolute bottom-0 w-full space-y-2 p-4 font-bold">
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
