import { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import { menuItems } from "../../data";
import LoginModal from "../LoginModal";

function DropdownMenu() {
  const { isDropdownOpen, setIsDropdownOpen, setIsLoggedIn } =
    useContext(NavbarContext);
  const openLoginModal = () => {
    setIsLoggedIn(true);
    setIsDropdownOpen(false);
  };
  return (
    <>
      {isDropdownOpen && (
        <div className="z-30 absolute right-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  item === "Log in" ? "border-b pb-5" : ""
                } px-4 py-2 hover:bg-gray-100 cursor-pointer`}
                onClick={() =>
                  (item === "Log in" || item === "Sign up") && openLoginModal()
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      <LoginModal />
    </>
  );
}

export default DropdownMenu;
