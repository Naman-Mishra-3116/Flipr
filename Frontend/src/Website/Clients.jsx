import React from "react";
import { useFetchData } from "../Hooks/useFetchData";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import ClientCard from "../UI/ClientCard";

const Clients = () => {
  const { loading, error, data } = useFetchData("/admin/getAllClient");
  return (
    <div
      className="bg-white p-14 flex flex-col gap-6 text-center items-center justify-center mb-10 "
      id="clients"
    >
      <h1 className="text-blue-600 font-semibold text-[30px] mb-10 mt-10">
        Happy Clients
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-4/5">
        {error && <Error errMessage={error} />}
        {loading && <Loading />}
        {!error &&
          !loading &&
          data.map((item, index) => {
            return (
              <ClientCard
                image={item.image}
                name={item.name}
                key={index}
                description={item.description}
                designation={item.designation}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Clients;
