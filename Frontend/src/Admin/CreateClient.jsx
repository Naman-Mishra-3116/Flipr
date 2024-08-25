import React from "react";
import { useState } from "react";
import { uploadImageToCloudinary } from "../Utils/uploadCloudinary";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";
import { createToast } from "../Utils/createToast";
import { server } from "../Utils/server";

const CreateClient = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    designation: "",
  });


  const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, image: data.url });
  };

  const handleSubmitbutton = async function (event) {
    try {
      event.preventDefault();
      setLoading(true);
      const resp = await axios.post(`${server}/admin/addClient`, formData);
      createToast(resp.data.message, "success");
      navigate("/admin/allClients");
    } catch (error) {
      console.log(error.message);
      createToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#cecbc0] p-10 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#1E2A5E]">
          Create Client
        </h2>
        <form onSubmit={handleSubmitbutton}>
          <div className="mb-6">
            <label
              className="block text-[#1E2A5E] text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border border-[#1E2A5E] rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-[#1E2A5E] text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border border-[#1E2A5E] rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Enter Description"
              maxLength="200"
              minLength="10"
              required
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              className="block text-[#1E2A5E] text-sm font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <select
              className="shadow appearance-none border border-[#1E2A5E] rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="designation"
              name="designation"
              onChange={handleInputChange}
              required
            >
              <option value="">Select Designation</option>
              <option value="CEO">CEO</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Designer">Designer</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
            </select>
          </div>

          <div className="mb-8 flex items-center">
            {selectedFile && (
              <figure className="w-[60px] h-[60px] rounded-full border-4 border-solid border-slate-700 flex-shrink-0 overflow-hidden mr-4">
                <img
                  src={previewURL}
                  alt="Selected file preview"
                  className="w-full h-full object-cover"
                />
              </figure>
            )}
            <div className="flex-grow">
              <label
                className="block text-[#1E2A5E] text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                className="block w-full text-sm text-gray-700 border border-[#1E2A5E] rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-[#1E2A5E] file:bg-[#1E2A5E] file:text-[#E1D7B7] file:font-bold file:py-2 file:px-4 file:border-0 file:rounded hover:file:bg-[#E1D7B7] hover:file:text-[#1E2A5E]"
                id="image"
                name="image"
                type="file"
                required
                onChange={handleFileInputChange}
                accept=".jpg, .png"
              />
              <p className="mt-2 text-sm text-gray-500">
                Accepted formats: .jpg, .png
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-[#1E2A5E] hover:bg-[#E1D7B7] hover:text-[#1E2A5E] text-[#E1D7B7] font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              {loading ? <HashLoader color="white" size={25} /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClient;
