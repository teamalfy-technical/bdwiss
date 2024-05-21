import btc from "../assets/btc.jpg";
import arrow from "../assets/arrow1.png";
import arrow_curved from "../assets/arrow_curved.png";
interface Props {
  modalOpen: (data: boolean) => void;
}
const About: React.FC<Props> = ({ modalOpen }) => {
  return (
    <div className="bg-white lg:pt-7 pt-3 w-full">
      <h2 className="lg:mx-20 mx-3 font-humane text-[4rem]">ABOUT THE EVENT</h2>
      <hr className="lg:mx-20 mx-3 mb-5 border border-black" />
      <p className="lg:mx-20 mx-3 font-medium font-darker_grotesque text-black text-[1.3rem] mb-5">
        This annual conference brings together a lineup of industry-leading
        experts, financial advisors, and successful investors to share their
        proven methods for building wealth, minimizing taxes, planning for
        retirement, and navigating volatile markets
      </p>
      <h3 className="lg:mx-20 mx-3 font-bold font-darker_grotesque text-black text-[1.8rem] mb-2">
        Why Attend?
      </h3>
      <div className="relative flex lg:h-[130vh] h-[49rem]">
        <div className="w-[50%] h-full"></div>
        <div
          className="w-[50%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${btc})` }}
        ></div>
        <div className="absolute w-full">
          <div className="lg:mx-20 mx-3 bg-black py-5 lg:py-14 px-3 lg:px-0 my-3">
            <p className="text-white text-center font-darker_grotesque font-medium lg:text-[1.3rem] text-[1rem]">
              Trade Activation: Learn strategies to kickstart your trading
              journey.
            </p>
          </div>
          <div className="lg:mx-20 mx-3 bg-black py-5 lg:py-14 px-3 lg:px-0 my-3">
            <p className="text-white text-center font-darker_grotesque font-medium lg:text-[1.3rem] text-[1rem]">
              Profitability: Discover how to become profitable in the business.
            </p>
          </div>
          <div className="lg:mx-20 mx-3 bg-black py-5 lg:py-14 px-3 lg:px-0 my-3 mb-10">
            <p className="text-white text-center font-darker_grotesque font-medium lg:text-[1.3rem] text-[1rem]">
              Avoid Scams: Tips to avoid losing money to unscrupulous traders.
            </p>
          </div>
          <div className="bg-[#7F0000] lg:px-20 px-3 w-full py-5 pb-6">
            <h3 className="font-humane text-white text-[5rem] uppercase tracking-wide leading-none">
              Secure Your Spot
            </h3>
            <hr className="border border-white" />
            <div className="flex flex-col lg:flex-row justify-between items-end pt-6 ">
              <div className="relative border-2 border-white lg:py-10 lg:px-28 py-3 px-10 text-white w-full lg:max-w-[38%] mb-3">
                <p className="text-center font-darker_grotesque text-[1.3rem]">
                  Register through our website to confirm your attendance.
                </p>
                <img
                  src={arrow}
                  alt=""
                  className="absolute w-[3rem] right-[-2rem] top-[50%] hidden lg:flex"
                />
              </div>
              <div className="relative border-2 border-white lg:py-10 lg:px-28 py-3 px-10 text-white w-full lg:max-w-[38%] mb-3">
                <p className="text-center font-darker_grotesque text-[1.3rem]">
                  After registration, you will receive a confirmation call.
                </p>
                <img
                  src={arrow_curved}
                  alt=""
                  className="absolute w-[2rem] right-[-2.2rem] top-[30%] hidden lg:flex"
                />
              </div>
              <button
                className="lg:w-[15%] w-full bg-white lg:py-3 py-5"
                onClick={() => modalOpen(true)}
              >
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
