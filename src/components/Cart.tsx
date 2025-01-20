import { Link } from "react-router-dom";
import Carsoul from "./ui/Carsoul";
import Image from "./ui/Image";
import { images } from "../data";
import { FaStar } from "react-icons/fa6";
function Cart() {
  return (
    <Link
      to={`/properties/1`}
      className="block  w-[300px] md:w-[354px] lg:w-[314px] xl:w-[305px] 2xl:w-[365px]"
    >
      <div className="w-full h-[300px]  rounded-md overflow-hidden">
        <Carsoul showDot={true}>
          {images?.map((item: string, index: number) => (
            <Image
              key={index}
              imageUrl={item}
              alt={`Slide ${index}`}
              className="w-full h-[300px] object-cover"
            />
          ))}
        </Carsoul>
      </div>
      <div className="px-2">
        <div className="flex items-center justify-between pt-2">
          <h3 className=" font-bold">Villa Bird</h3>
          <p className="flex gap-1 items-center font-medium">
            <FaStar size={15} />
            <span>5.0</span>
          </p>
        </div>
        <p className="text-stone-500 font-medium">18 kilometers away</p>
        <p className="text-stone-500 font-medium">May 11-15</p>
        <p className="font-medium">500 EGT night</p>
      </div>
    </Link>
  );
}

export default Cart;
