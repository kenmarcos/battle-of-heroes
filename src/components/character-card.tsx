"use client";

import Image from "next/image";

import { useCharactersStore } from "@/store/characters";
import { usePlayersStore } from "@/store/players";
import { Character } from "@/types/character";
import { PLAYER } from "@/types/enums";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const selectCharacter = usePlayersStore((state) => state.selectCharacter);
  const player1 = usePlayersStore((state) => state.player1);

  const handleSelectCharacter = () => {
    if (!!Object.keys(player1).length) {
      selectCharacter(PLAYER.player2, character);
      return;
    }

    selectCharacter(PLAYER.player1, character);

    useCharactersStore.setState({
      characterOnHover: {} as Character,
    });
  };

  const handleHoverCharacter = () => {
    useCharactersStore.setState({
      characterOnHover: character,
    });
  };

  const handleLeaveCharacter = () => {
    useCharactersStore.setState({
      characterOnHover: {} as Character,
    });
  };

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg after:absolute after:bottom-0 after:w-full after:break-words after:bg-info-gradient after:py-3 after:text-center after:text-2xl after:opacity-0 after:duration-700 after:content-[attr(after-dynamic-value)] hover:shadow-lg hover:shadow-primary hover:after:opacity-100"
      after-dynamic-value={character.name}
      onClick={handleSelectCharacter}
      onMouseEnter={handleHoverCharacter}
      onMouseLeave={handleLeaveCharacter}
    >
      <Image
        src={character.images.sm}
        alt={character.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-cover duration-700 group-hover:scale-125"
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
      />
    </div>
  );
};

export default CharacterCard;
