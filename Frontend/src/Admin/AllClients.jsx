import React from "react";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useFetchData } from "../Hooks/useFetchData";
import useDeleteItem from "../Hooks/useDeleteItem";
import Table from "../UI/Table";

const AllClients = () => {
  const { loading, error, data } = useFetchData("/admin/getAllClient");
  const { deleteById } = useDeleteItem("/admin/allClients");

  return (
    <div className="flex justify-center items-center mt-10">
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && data.length > 0 && (
        <Table
          data={data}
          array={["S.no", "Image", "Name", "Designation", "Action"]}
          deleteById={deleteById}
          isProject={false}
          isClient={true}
        />
      )}
    </div>
  );
};

export default AllClients;
