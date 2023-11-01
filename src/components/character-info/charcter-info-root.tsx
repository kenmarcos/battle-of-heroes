import Image from "next/image";
import { ReactNode } from "react";

interface CharacterInfoProps {
  children?: ReactNode;
  image: string;
  imageAlt: string;
}

const CharacterInfoRoot = ({
  children,
  image,
  imageAlt,
}: CharacterInfoProps) => {
  return (
    <div className="relative animate-fade-in overflow-hidden rounded-lg">
      <div>
        <Image
          src={image}
          alt={imageAlt}
          width={0}
          height={0}
          className="h-[500px] w-full object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
        />
      </div>

      {children}
    </div>
  );
};

export default CharacterInfoRoot;
