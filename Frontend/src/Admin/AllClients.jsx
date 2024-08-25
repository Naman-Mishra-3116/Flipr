import React from "react";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useFetchData } from "../Hooks/useFetchData";
import useDeleteItem from "../Hooks/useDeleteItem";

const AllClients = () => {
  const { loading, error, data } = useFetchData("/admin/getAllClient");
  const { deleteById } = useDeleteItem("/admin/allClients");

  return (
    <div className="flex justify-center items-center mt-10">
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && data.length > 0 && (
        <div className="overflow-x-auto w-full ml-5 mr-5">
          <table className="min-w-max w-full table-auto border-collapse border border-[#E1D7B7]">
            <thead>
              <tr className="bg-[#1E2A5E] text-[#E1D7B7] uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  S.no
                </th>
                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  Image
                </th>
                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  Name
                </th>
                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  Designation
                </th>

                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-black  text-md font-bold">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#E1D7B7] hover:bg-slate-300 hover:text-[#1E2A5E]"
                >
                  <td className="py-3 px-6 text-left">{index + 1}</td>
                  <td className="py-3 px-6 text-left">
                    <figure className="w-[40px] h-[40px] rounded-full  flex-shrink-0 overflow-hidden mr-4">
                      <img
                        src={item.image}
                        alt="Selected file preview"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </td>
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">{item.designation}</td>
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => deleteById(item._id, "client")}
                      className="bg-red-500 px-4 py-2 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllClients;
