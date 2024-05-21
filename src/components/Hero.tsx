import heroImg from "../assets/Frame.jpg";

interface Props {
  modalOpen: (data: boolean) => void;
}

const Hero: React.FC<Props> = ({ modalOpen }) => {
  return (
    <div className="w-full lg:px-20 px-3 bg-[#141313] pt-0 lg:pt-10 pb-5">
      <h1 className="font-humane font-bold text-white lg:text-[11rem] text-[3rem] text-center leading-none tracking-wide">
        SMART MONEY CONFERENCE 2024
      </h1>
      <div className="flex flex-col lg:flex-row items-center w-full mb-10">
        <div className="lg:w-[70%] w-full lg:h-[30rem] h-[16rem] mb-4">
          <img src={heroImg} alt="" className="w-full h-full" />
        </div>
        <div className="lg:w-[30%] w-full lg:pl-5 pl-0">
          <div className="bg-[#7F0000] border border-white py-3 font-semibold ">
            <p className="font-darker_grotesque text-white text-center text-[1.1rem] tracking-wider">
              31ST JULY, 2024
            </p>
          </div>
          <div className="border border-white my-4 py-2">
            <h4 className="font-semibold font-darker_grotesque text-[4rem] text-center leading-[4rem] text-white">
              10
            </h4>
            <p className="font-darker_grotesque text-white text-center">
              Weeks
            </p>
          </div>
          <div className="border border-white my-4 py-2">
            <h4 className="font-semibold font-darker_grotesque text-[4rem] text-center leading-[4rem] text-white">
              74
            </h4>
            <p className="font-darker_grotesque text-white text-center">Days</p>
          </div>
          <div className="border border-white my-4 py-2">
            <h4 className="font-semibold font-darker_grotesque text-[4rem] text-center leading-[4rem] text-white">
              1,776
            </h4>
            <p className="font-darker_grotesque text-white text-center">
              Hours
            </p>
          </div>
        </div>
      </div>
      <hr className="border-white border mb-5" />
      <h4 className="font-humane text-white text-[2rem] lg:mb-0 mb-3 lg:text-[5.1rem] tracking-wide leading-none">
        Elevate Your Trading Skills and Network with Top Financial Experts
      </h4>
      <div className="flex justify-center gap-5 ">
        <button
          className="border border-white w-[45%] lg:py-5 py-2 font-darker_grotesque bg-[#7F0000] text-white font-semibold"
          onClick={() => modalOpen(true)}
        >
          REGISTER NOW
        </button>
        <button className="border border-white w-[45%] lg:py-5 py-2 font-darker_grotesque bg-white text-black font-semibold">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
