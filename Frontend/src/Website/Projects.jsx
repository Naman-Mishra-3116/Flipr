import React from "react";
import { useFetchData } from "../Hooks/useFetchData";
import ProjectCard from "../UI/ProjectCard";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

const Projects = () => {
  const { loading, error, data } = useFetchData("/admin/getAllProject");

  return (
    <div className="bg-white flex flex-col gap-6 text-center items-center justify-center mt-4">
      <h1 className="text-blue-600 font-semibold text-[30px] mt-4">
        Our Projects
      </h1>
      <p className="text-gray-800 text-xl text-center w-[45%] mb-6">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-3/4 mb-10">
        {error && <Error errMessage={error} />}
        {loading && <Loading />}
        {!error &&
          !loading &&
          data.map((item, index) => {
            return (
              <ProjectCard
                image={item.image}
                title={item.name}
                key={index}
                description={"this is the test description"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
