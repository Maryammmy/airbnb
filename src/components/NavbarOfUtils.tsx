import { House, SlidersHorizontal } from "lucide-react";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import Button from "./ui/Button";

function NavbarOfUtils() {
  const buttons = Array.from({ length: 8 });
  const { shadow } = useContext(NavbarContext);
  return (
    <div
      className={`sticky flex gap-5 sm:gap-12 top-0 z-10 right-0 left-0 w-full items-center bg-white px-5  xl:px-20 py-5 justify-between text-[#49454F] font-medium text-[12px] activityBtn transition-shadow ${
        shadow ? "shadow-lg" : ""
      } overflow-x-auto xl:overflow-x-hidden md:flex-nowrap md:whitespace-nowrap`}
    >
      {buttons.map((_, index) => (
        <button key={index} className={`flex flex-col items-center`}>
          <div className="">
            <House size={20} />
          </div>
          <span>Tiny Homes</span>
        </button>
      ))}
      <Button className="flex items-center justify-center border py-2 px-2 rounded-lg gap-1 hover:border-black">
        <SlidersHorizontal strokeWidth={3} size={15} />
        <span className="text-sm font-medium">Filter</span>
      </Button>
    </div>
  );
}

export default NavbarOfUtils;
