import React from "react";
import whiteCar from "../../assets/canon1.png";
import car2 from "../../assets/nikon2.png";
import car3 from "../../assets/sony3.png";

const carList = [
  {
    name: "Canon EOS2000D",
    price: 150,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Nikon D780",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-sans mb-3"
        >
          View and Booking
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        A convenient feature allowing customers to easily browse available products or services and secure their reservations in just a few clicks, ensuring a smooth and efficient booking experience.
        </p>
        {/* Cam listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]  image-container ">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[170px]  camera-image   object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <button className="text-primary border bg-black rounded px-2" >Details</button>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  DSLR
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            View More          <i className="fa-solid fa-camera text-2xl text-white-700 px-2"></i>

          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
