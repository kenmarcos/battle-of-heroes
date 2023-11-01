interface CharacterInfoItemProps {
  itemName: string;
  itemValue: string;
}

const CharacterInfoItem = ({ itemName, itemValue }: CharacterInfoItemProps) => {
  return (
    <li className="flex gap-4">
      <p className="capitalize">{itemName}:</p>
      <p>{itemValue}</p>
    </li>
  );
};

export default CharacterInfoItem;
