import CharacterCard from "./character-card";

import { Character } from "@/types/character";

const getData = async (): Promise<Character[]> => {
  const res = await fetch(
    "http://homologacao3.azapfy.com.br/api/ps/metahumans",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CharacterList = async () => {
  const characters = await getData();

  return (
    <section className="h-[500px] flex-1 overflow-auto rounded-lg bg-muted p-4">
      <ul className="grid grid-cols-5 gap-4 bg-muted p-4">
        {characters.map((character) => (
          <li key={character.id} className="basis-60">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
