import React, { useState } from "react";
import axios from "axios";
import { server } from "./../Utils/server";
import { createToast } from "./../Utils/createToast";

const SubscriberForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const resp = await axios.post(`${server}/subscriber/createSubscriber`, {
        email,
      });
      const { message } = resp.data;
      createToast(message, "success");
      setEmail("");
    } catch (error) {
      console.log(error.response.data.message);
      createToast(error.response.data.message, "error");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form className="flex items-center mr-4 gap-5" onSubmit={handleSubmit}>
        <p className="text-white">Subscribe Us</p>
        <div className="rounded-lg">
          <input
            type="email"
            required
            className="bg-blue-600 w-[250px] px-4 py-2 text-white outline-none border-white border-2 border-solid"
            placeholder="Email"
            onChange={handleInputChange}
            value={email}
          />
          <button
            disabled={loading}
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
