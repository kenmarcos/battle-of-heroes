import CharacterInfo from "@/components/character-info";
import CharacterList from "@/components/character-list";
import Characters from "@/components/characters";

const Home = () => {
  return (
    <Characters>
      <CharacterInfo />

      <CharacterList />
    </Characters>
  );
};

export default Home;
