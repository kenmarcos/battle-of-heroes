import CharacterCard from "@/components/character-card";
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

const Home = async () => {
  const characters = await getData();

  return (
    <>
      <ul className="grid w-1/2 grid-cols-5 gap-4">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
