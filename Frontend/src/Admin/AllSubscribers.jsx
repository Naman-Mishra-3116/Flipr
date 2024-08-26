import React from "react";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useFetchData } from "../Hooks/useFetchData";
import useDeleteItem from "../Hooks/useDeleteItem";
import TableHead from "../UI/TableHead";

const AllSubscribers = () => {
  const { data, error, loading } = useFetchData("/subscriber/getAllSubscriber");
  const { deleteById } = useDeleteItem("/admin/subscribers");

  return (
    <div className="flex justify-center items-center mt-10">
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && data.length > 0 && (
        <div className="overflow-x-auto w-full ml-5 mr-5">
          <table className="min-w-max w-full table-auto border-collapse border border-[#E1D7B7]">
            <TableHead array={["S.no", "Email", "Time", "Action"]} />
            <tbody className="text-black text-md font-bold">
              {data.map((item, index) => (
                <tr
                  className="border-b border-orange-400 hover:bg-blue-50 hover:text-gray-800"
                  key={item}
                >
                  <td className="py-3 px-6 text-left">{index + 1}</td>
                  <td className="py-3 px-6 text-left">{item.email}</td>
                  <td className="py-3 px-6 text-left">{item.createdAt}</td>
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => deleteById(item._id, "sub")}
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

export default AllSubscribers;
