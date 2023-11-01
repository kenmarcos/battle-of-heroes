import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

interface CharacterInfoItemProps extends ComponentProps<"li"> {
  itemName: string;
  itemValue: string | number;
}

const CharacterInfoItem = ({
  itemName,
  itemValue,
  className,
}: CharacterInfoItemProps) => {
  return (
    <li className={twMerge("flex gap-2", className)}>
      <p className="capitalize">{itemName}:</p>
      <p>{itemValue}</p>
    </li>
  );
};

export default CharacterInfoItem;
