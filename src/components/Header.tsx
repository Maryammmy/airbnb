import { Globe, Menu, Search, UserRound } from "lucide-react";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import Button from "./ui/Button";
import DropdownMenu from "./ui/DropdownMenu";

export default function Header() {
  const { setIsDropdownOpen, isDropdownOpen } = useContext(NavbarContext);
  const toggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <header className="border-b">
        <div className="px-5 xl:px-20 m-auto  flex justify-between items-center py-5">
          <div>
            <h1 className="text-2xl text-primary font-bold">airbnb</h1>
          </div>
          <div className="hidden md:flex items-center gap-3 rounded-full py-3 px-5 border shadow hover:shadow-lg">
            <div className="border-r pe-2 font-medium">
              <h2>Anywhere</h2>
            </div>
            <div className="border-r pe-2 font-medium">
              <h2>Any week</h2>
            </div>
            <div className="border-r pe-2 font-medium text-secondary">
              <h2>Add guests</h2>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
              <Search strokeWidth={2.75} size={15} className="text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden xl:block font-semibold py-2 px-4 rounded-full hover:bg-[#F7F7F7]">
              <h3>Airbnb your home</h3>
            </div>
            <div className="hidden xl:block py-2 px-4 rounded-full hover:bg-[#F7F7F7]">
              <Globe size={18} />
            </div>
            <Button
              onClick={toggleMenu}
              className=" relative flex items-center border py-2 px-3 rounded-full gap-1 hover:shadow-lg"
            >
              <div>
                <Menu size={18} />
              </div>
              <div>
                <UserRound />
              </div>
            </Button>
          </div>
        </div>
      </header>
      <DropdownMenu />
    </>
  );
}
