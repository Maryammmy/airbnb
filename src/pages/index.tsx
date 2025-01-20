import Cart from "../components/Cart";
import NavbarOfUtils from "../components/NavbarOfUtils";

export default function Home() {
  const cartItems = Array.from({ length: 20 });

  return (
    <div className="">
      <NavbarOfUtils />
      <div className="py-5 md:py-10 md:px-5 xl:px-20 flex flex-col md:flex-row flex-wrap  gap-5 justify-center md:justify-start  items-center">
        {cartItems.map((_, index) => (
          // تكرار الـ <Cart /> 20 مرة
          <Cart key={index} />
        ))}
      </div>
    </div>
  );
}
