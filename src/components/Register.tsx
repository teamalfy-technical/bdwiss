import React, { ChangeEvent, FormEventHandler } from "react";
import BD_swiss from "../assets/BDSwiss.png";
import axios from "axios";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import "../App.css";

interface Props {
  modalOpen: (data: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
}

const Register: React.FC<Props> = ({ modalOpen }) => {
  const toggleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const parentDiv = e.currentTarget as HTMLElement;
    if (!parentDiv.querySelector("div")?.contains(e.target as Node)) {
      modalOpen(false);
    } else {
      return;
    }
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
  });

  const [phone, setPhone] = useState("+233567890123");
  console.log(phone);

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const finalData = {
    ...formData,
    phone,
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        phone.trim() === ""
      ) {
        setError("Some fields are required");
        return;
      }

      if (phone.length < 9) {
        setError("Wrong phone number");
      }

      setLoading(true);
      const submitData = await axios.post(
        import.meta.env.VITE_REACT_APP_MAKE_WEBHOOK_URI || "",
        finalData,
        {
          headers: {
            Authorization: import.meta.env.VITE_REACT_APP_MAKE_API_KEY,
          },
        }
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
      });
      setPhone("");
      setLoading(false);
      setError("");

      console.log(submitData.data);
    } catch (error) {
      return console.log(error);
    }
  };

  const [focused, setFocused] = useState(false);

  // Using a placeholder to guide the phone input form is weird so Im using this function instead
  const handlePhoneFocus = () => {
    if (!focused) {
      setPhone("");
      setFocused(true);
    }
    return;
  };

  return (
    <div
      className="w-full h-screen fixed flex justify-center items-center  lg:pb-0 bg-[#00000060] z-100 backdrop-blur-sm max-w-[100vw]"
      onClick={toggleModal}
    >
      <div className="lg:w-[35%] w-[90%] bg-white px-2 lg:px-10 py-5 box">
        <div className="flex justify-center">
          <img src={BD_swiss} alt="" className="w-[40%]" />
        </div>
        <h3 className="text-center text-[1.5rem] font-darker_grotesque font-semibold">
          THE SMART MONEY CONFERENCE 2024
        </h3>
        <p className="text-center text-[#1a1a1a] text-[1.1rem] font-darker_grotesque leading-[20px] mb-5">
          Join top experts and investors in the world on 31st July, 2024, to
          learn about building wealth, minimizing taxes, and more.
        </p>

        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="flex justify-between mb-2 gap-2 w-full">
            <div className="flex flex-col w-[49%]">
              <label htmlFor="firstName" className="font-darker_grotesque">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                className="border border-[#c4c4c4] px-2 py-1 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label htmlFor="lastName" className="font-darker_grotesque">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                className="border border-[#c4c4c4] px-2 py-1 outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full mb-2 flex flex-col">
            <label htmlFor="email" className="font-darker_grotesque">
              Email
            </label>
            <input
              type="text"
              placeholder="person@example.com"
              id="email"
              value={formData.email}
              name="email"
              className="border border-[#c4c4c4] px-2 py-2 outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col w-[49%]">
              <label htmlFor="company" className="font-darker_grotesque">
                Company Name(Optional)
              </label>
              <input
                type="text"
                placeholder="Example INC"
                id="company"
                name="company"
                value={formData.company}
                className="border border-[#c4c4c4] px-2 py-1 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label htmlFor="company" className="font-darker_grotesque">
                Job Title(Optional)
              </label>
              <input
                type="text"
                placeholder="CTO"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                className="border border-[#c4c4c4] px-2 py-1 outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between mb-5 gap-2 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="font-darker_grotesque">
                Phone
              </label>
              <div className="border border-[#c4c4c4] outline-none phone">
                <PhoneInput
                  className="phone"
                  defaultCountry="gh"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  placeholder="+233567890123"
                  onFocus={handlePhoneFocus}
                />
              </div>
            </div>
          </div>

          <p className="text-rose-500 text-[0.8rem] mb-2">{error}</p>
          <button
            className={`bg-[#7F0000] py-3 w-full text-white ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
