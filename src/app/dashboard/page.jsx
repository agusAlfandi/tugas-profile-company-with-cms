// import AboutUs from "./aboutUs/page";
// import Products from "./products/page";
// import Teams from "./teams/page";
import { Logo } from "../../assets/page";

const page = () => {
  return (
    <div className="flex w-full flex-col px-10 pt-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src={Logo}
            alt="Banner"
            height={500}
            width={700}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-1 items-center px-5 pt-5">
          <p className="text-justify text-3xl leading-normal">
            <span className="relative inline-block">
              <span className="absolute left-1 top-5 h-7 w-28 bg-green-200"></span>
              <span className="relative z-10 px-2 text-5xl font-bold">
                TECH.
              </span>
            </span>
            adalah sebuah Toko komputer yang bertujuan memberikan pelayanan
            terbaik dan barang terbaik sesuai keinginan pelanggan dengan garansi
            100% internasional.
          </p>
        </div>
      </div>

      {/* <AboutUs />

      <Products />

      <Teams /> */}
    </div>
  );
};

export default page;
