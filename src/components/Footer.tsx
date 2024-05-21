import social1 from "../assets/Vector (3).svg";
import social2 from "../assets/Social icon.svg";
import social3 from "../assets/Group.png";

const Footer = () => {
  return (
    <div className="bg-[#141313] lg:px-24 px-3 py-10 lg:pb-0">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-5">
        <div className="">
          <h3 className="font-humane text-white text-[4rem] tracking-wide">
            Important Links
          </h3>
          <div className="">
            <p className="my-2 text-white font-darker_grotesque text-[1.2rem] font-semibold">
              {" "}
              GET IN TOUCH
            </p>
            <p className="my-2 text-white font-darker_grotesque text-[1.2rem] font-normal underline">
              Contact
            </p>
            <p className="my-2 text-white font-darker_grotesque text-[1.2rem] font-medium">
              Kwesi : 0244386471
            </p>
            <p className="my-2 text-white font-darker_grotesque text-[1.2rem] font-medium">
              Richard: 0531130159
            </p>
            <p className="my-2 text-white font-darker_grotesque text-[1.2rem] font-medium">
              Esthella: 0260776612
            </p>
          </div>
        </div>
        <div className="flex mb-5 lg:mb-0">
          <p className="mx-4 cursor-pointer font-darker_grotesque text-white font-semibold text-[1.3rem] lg:text-[1.8rem]">
            Home
          </p>
          <p className="mx-4 cursor-pointer font-darker_grotesque text-white font-semibold text-[1.3rem] lg:text-[1.8rem]">
            About Event
          </p>
          <p className="mx-4 cursor-pointer font-darker_grotesque text-white font-semibold text-[1.3rem] lg:text-[1.8rem]">
            Schedule
          </p>
        </div>
        <div className="bg-white py-16 px-10">
          <h3 className="text-[#7F0000] font-darker_grotesque font-[900] text-[1.4rem]">
            BD SWISS
          </h3>
        </div>
      </div>
      <div className="lg:px-20 px-3 mb-5">
        <hr className="mb-3" />
        <div className="flex justify-between items-center">
          <p className="text-white font-darker_grotesque">
            © 2024 BD SWISS All rights reserved.
          </p>
          <div className="flex">
            <img src={social1} alt="" className="mr-4 w-[1.4rem]" />
            <img src={social2} alt="" className="mr-4 w-[1.4rem]" />
            <img src={social3} alt="" className="mr-4 w-[1.4rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
