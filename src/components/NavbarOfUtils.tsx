// import { SlidersHorizontal } from "lucide-react";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import Button from "./ui/Button";
import { navbarIcons, responsive } from "../data/NavbarData";
import Carsoul from "./ui/Carsoul";

function NavbarOfUtils() {
  const { shadow } = useContext(NavbarContext);

  return (
    <div
      className={`sticky top-0 z-20 w-full bg-white px-5 xl:px-20 py-5 transition-shadow ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <Carsoul
        slidesToShow={6}
        responsive={responsive}
        borderColor="2px solid gainsboro"
      >
        {navbarIcons.map((item, index) => (
          <Button key={index} className="">
            <div>{item.icon}</div>
            <div className="text-sm font-medium ">{item.title}</div>{" "}
          </Button>
        ))}
      </Carsoul>
      {/* <Button className="flex items-center justify-center border py-2 px-2 rounded-lg gap-1 hover:border-black">
        <SlidersHorizontal strokeWidth={3} size={15} />
        <span className="text-sm font-medium">Filter</span>
      </Button> */}
    </div>
  );
}

export default NavbarOfUtils;
