"use client";

import { Bug, Files, GitFork, Puzzle, Search } from "lucide-react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ElementType } from "react";
import { clsx } from "clsx";
import { MenuButton } from "./MenuButton";

export const menuItems = [
  {
    id: 1,
    name: "Arquivos",
    icon: "Files",
  },
  {
    id: 2,
    name: "Pesquisa",
    icon: "Search",
  },
  {
    id: 3,
    name: "Git",
    icon: "GitFork",
  },
  {
    id: 4,
    name: "Debug",
    icon: "Bug",
  },
  {
    id: 5,
    name: "Extensões",
    icon: "Puzzle",
  },
];

export const Menu = () => {
  return (
    <div className="h-full w-12 flex flex-col items-center text-zinc-300">
      <MenuButton icon={Files} isActive />
      <MenuButton icon={Search} />
      <MenuButton icon={GitFork} />
      <MenuButton icon={Bug} />
      <MenuButton icon={Puzzle} />
    </div>
  );
};
