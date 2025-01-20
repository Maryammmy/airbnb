import Image from "../components/ui/Image";
import { images } from "../data";

function Property() {
  return (
    <div className="p-2 md:p-5 container mx-auto">
      <div>
        <h2 className="font-bold text-2xl">Tiny house close to Rotterdam</h2>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-[0_0_49%] md:h-[500px]">
          <Image
            imageUrl={images[0]}
            alt="main Image"
            className="w-full  h-full object-cover rounded-l-md"
          />
        </div>
        <div className=" flex-[0_0_49%] flex flex-col md:flex-row flex-wrap gap-5 ">
          {images?.map((image: string, i: number) => (
            <div
              key={i}
              className={`w-full 
                 lg:w-[350px]
             h-[240px] rounded-r-md overflow-hidden`}
            >
              <Image
                className={`w-full h-full object-cover`}
                imageUrl={image}
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="pt-4 text-lg font-medium">
          Tiny home in Poortugaal, Netherlands
        </p>
        <p className="md:pt-4 text-lg font-medium xl:pe-3 2xl:pe-10">
          500 EGP night
        </p>
      </div>
    </div>
  );
}

export default Property;
