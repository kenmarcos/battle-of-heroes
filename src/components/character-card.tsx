import Image from "next/image";
import React from "react";

import { Character } from "@/types/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div
      className="after:bg-name-gradient group relative overflow-hidden rounded-lg after:absolute after:bottom-0 after:w-full after:break-words after:py-3 after:text-center after:text-2xl after:opacity-0 after:duration-700 after:content-[attr(after-dynamic-value)] hover:shadow-lg hover:shadow-primary hover:after:opacity-100"
      after-dynamic-value={character.name}
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
