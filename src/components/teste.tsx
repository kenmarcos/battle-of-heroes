"use client";

import React, { ReactNode } from "react";

import { usePlayersStore } from "@/store/players";
import { twMerge } from "tailwind-merge";

interface TesteProps {
  children: ReactNode;
}

const Characters = ({ children }: TesteProps) => {
  const player1 = usePlayersStore((state) => state.player1);

  const divClassName = twMerge(
    "flex gap-6 container",
    !!Object.keys(player1).length ? "flex-row-reverse" : "flex-row",
  );

  return <section className={divClassName}>{children}</section>;
};

export default Characters;
