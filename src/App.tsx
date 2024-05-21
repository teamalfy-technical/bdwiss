import cart_icon from "./assets/cart.svg";
import { useState } from "react";
import Register from "./components/Register";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (data: boolean) => {
    setModalOpen(data);
  };

  return (
    <div className="bg-[#141313] max-w-[100vw] relative ">
      {modalOpen ? <Register modalOpen={handleModalOpen} /> : ""}
      <div className="w-screen fixed flex justify-between items-center lg:px-20 px-3 pt-4 z-[99] bg-[#141313]">
        <div className="font-darker_grotesque text-white font-[900] md:text-[1.5rem] text-[1.1rem]">
          BD SWISS
        </div>
        <ul className="md:text-white absolute left-[-45%] w-[45%] md:left-auto h-[20vh] md:h-auto top-0 md:top-auto text-black md:w-auto md:relative flex-col md:flex-row bg-white md:bg-[#141313] flex font-darker_grotesque text-[1rem] px-5 py-5 md:py-auto md:px-[auto]">
          <li className="mr-7 text-[1.2rem] font-semibold">Home</li>
          <li className="mr-7 text-[1.2rem] font-semibold">About Event</li>
          <li className="mr-7 text-[1.2rem] font-semibold">Schedule</li>
        </ul>
        <div className="flex">
          <button
            className="md:py-5 md:px-10 px-3 py-1 text-white border-white border font-darker_grotesque bg-[#7F0000]"
            onClick={() =>
              modalOpen ? setModalOpen(false) : setModalOpen(true)
            }
          >
            REGISTER NOW
          </button>
          <button className="md:py-5 md:px-5 py-1 px-1 border-white border">
            <img src={cart_icon} alt="" className="md:w-auto w-4" />
          </button>
        </div>
      </div>

      <div className="relative top-[5.2rem]">
        <Hero modalOpen={handleModalOpen} />
      </div>
      <div className="relative top-[5.2rem]">
        <About modalOpen={handleModalOpen} />
      </div>
      <div className="relative top-[5.2rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
