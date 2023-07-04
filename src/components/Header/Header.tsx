import {
  PanelLeft,
  PanelBottom,
  PanelRight,
  LayoutPanelLeft,
} from "lucide-react";
import { BallsActions } from "./BallsActions";

export const Header = () => {
  return (
    <div className="h-8 px-3 flex items-center justify-between">
      <div className="flex gap-2 w-[33%]">
        <BallsActions />
      </div>
      <div className="w-[33%] flex items-center justify-center">
        <span className="text-zinc-300">Header.tsx - portfolio</span>
      </div>
      <div className="h-full w-[33%] gap-2 flex items-center justify-end text-zinc-300">
        <PanelLeft />
        <PanelBottom />
        <PanelRight />
        <LayoutPanelLeft />
      </div>
    </div>
  );
};
