import React from "react";

const SubscriberForm = () => {
  return (
    <div>
      <form className="flex items-center mr-4 gap-5">
        <p className="text-white">Subscribe Us</p>
        <div className="rounded-lg">
          <input
            type="email"
            required
            className="bg-blue-600 w-[250px] px-4 py-2 text-white outline-none border-white border-2 border-solid"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-white px-4 py-2 text-blue-600 text-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriberForm;
