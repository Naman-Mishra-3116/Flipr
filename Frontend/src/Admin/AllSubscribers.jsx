import React from "react";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useFetchData } from "../Hooks/useFetchData";

const AllSubscribers = () => {
  const { data, error, loading } = useFetchData("/subscriber/getAllSubscriber");

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
                  Email
                </th>
                <th className="py-3 px-6 text-left border-b border-[#E1D7B7]">
                  Date
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
                  <td className="py-3 px-6 text-left">{item.email}</td>
                  <td className="py-3 px-6 text-left">{item.createdAt}</td>
                  <td className="py-3 px-6 text-left">{"Delete"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllSubscribers;
