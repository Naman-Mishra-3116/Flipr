import React from "react";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useFetchData } from "../Hooks/useFetchData";
import useDeleteItem from "../Hooks/useDeleteItem";
import Table from "../UI/Table";

const AllProjects = () => {
  const { loading, error, data } = useFetchData("/admin/getAllProject");
  const { deleteById } = useDeleteItem("/admin");
  return (
    <div className="flex justify-center items-center mt-10">
      {error && <Error errMessage={error} />}
      {loading && <Loading />}
      {!error && !loading && data.length > 0 && (
        <Table
          deleteById={deleteById}
          data={data}
          array={["S.no", "Image", "Name", "Description", "Action"]}
          isProject={true}
          isClient={false}
        />
      )}
    </div>
  );
};

export default AllProjects;
