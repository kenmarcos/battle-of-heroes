"use client";

import BattlePreparation from "@/components/battle-preparation";
import Characters from "@/components/characters";
import { usePlayersStore } from "@/store/players";

const Home = () => {
  const player2 = usePlayersStore((state) => state.player2);

  return (
    <>
      {!Object.keys(player2).length && <Characters />}

      {!!Object.keys(player2).length && <BattlePreparation />}
    </>
  );
};

export default Home;
