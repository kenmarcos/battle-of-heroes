import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface CharacterInfoProps extends ComponentProps<"div"> {
  children?: ReactNode;
  image: string;
  imageAlt: string;
}

const CharacterInfoRoot = ({
  children,
  image,
  imageAlt,
  className,
}: CharacterInfoProps) => {
  return (
    <div
      className={twMerge(
        "relative animate-fade-in overflow-hidden rounded-lg",
        className,
      )}
    >
      <div>
        <Image
          src={image}
          alt={imageAlt}
          width={0}
          height={0}
          className="aspect-[3/4] w-full object-cover"
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
