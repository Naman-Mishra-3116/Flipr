import React, { useState } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { server } from "../Utils/server";
import { createToast } from "../Utils/createToast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const resp = await axios.post(
        `${server}/contact/createContact`,
        formData
      );
      const { message } = resp.data;
      createToast(message, "success");
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        city: "",
      });
    } catch (error) {
      console.log(error.response.data.message);
      createToast(error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mr-[8rem] bg-[#202641b2] border border-[#ffffff66] backdrop-blur-md rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="p-8 flex flex-col gap-4 w-[350px] text-black"
      >
        <h1 className="text-white text-center text-lg mb-2 w-[60%] ml-auto mr-auto font-semibold">
          Get a Free Consultation
        </h1>
        <input
          value={formData.fullName}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="Full Name"
          name="fullName"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white shadow-2xl"
        />
        <input
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          required
          placeholder="Email"
          name="email"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <input
          value={formData.mobileNumber}
          onChange={handleInputChange}
          type="tel"
          required
          placeholder="Mobile Number"
          name="mobileNumber"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <input
          value={formData.city}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="City"
          name="city"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-orange-500 w-full rounded-lg hover:bg-orange-400 text-white px-2 py-2"
        >
          {loading ? <HashLoader size={25} color="white" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
