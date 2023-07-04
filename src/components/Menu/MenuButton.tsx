import { Icon } from "lucide-react";

interface MenuButtonProps {
  icon: Icon;
  isActive?: boolean;
}

export const MenuButton = ({
  icon: Icon,
  isActive = false,
}: MenuButtonProps) => {
  return (
    <button
      data-active={isActive}
      className="h-12 w-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
    >
      <Icon size={29} color={isActive ? "#E0DEF2" : "#8F8CA8"} />
    </button>
  );
};
