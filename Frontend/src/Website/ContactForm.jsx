import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          type="text"
          required
          placeholder="Full Name"
          name="fullName"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white shadow-2xl"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <input
          type="tel"
          required
          placeholder="Mobile Number"
          name="mobileNumber"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <input
          type="text"
          required
          placeholder="City"
          name="city"
          className="outline-none p-2 border-2 border-[#ffffff66] rounded-lg bg-transparent text-white"
        />
        <button
          type="submit"
          className="bg-orange-500 w-full rounded-lg hover:bg-orange-400 text-white px-2 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
