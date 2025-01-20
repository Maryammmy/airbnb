import { X } from "lucide-react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import Select from "./ui/Select";
import { buttons, countryOptions } from "../data";

function LoginModal() {
  const { isLoggedIn, setIsLoggedIn } = useContext(NavbarContext);
  return (
    <Modal
      className="text-lg text-center p-4 border-b font-semibold"
      title="Login or signup"
      close={() => setIsLoggedIn(false)}
      isOpen={isLoggedIn}
    >
      <Button
        onClick={() => setIsLoggedIn(false)}
        className="absolute top-5 right-4 text-gray-500 hover:text-black"
      >
        <X className="text-black" size={20} />
      </Button>
      <div className="p-6">
        <div className="pb-4">
          <h2 className="text-lg font-semibold">Welcome to Airbnb</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Country code</label>
          <Select options={countryOptions} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone number</label>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <Button className="w-full bg-primary text-white py-2 rounded-lg font-bold">
          Continue
        </Button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">or</p>
          <div className="flex flex-col gap-2 mt-2">
            {buttons.map((button) => (
              <Button
                key={button.id}
                className="w-full border font-semibold border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
