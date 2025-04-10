import React, { useContext } from "react";
import SingerItem from "../SingerItem/SingerItem";
import { SongsContext } from "../../contexts/SongsContext";

const Singer = () => {
  const { singerFilter } = useContext(SongsContext);

  return (
    <div className="container mx-auto my-10  rounded-lg  h-[600px] overflow-auto">
      {singerFilter.length === 0 ? (
        <div className="flex justify-center items-center h-[500px] ">
          <h1 className="text-white text-2xl">
            The desired song was not found
          </h1>
        </div>
      ) : (
        <div className="p-5 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-y-4 ">
          {singerFilter.map((item) => (
            <SingerItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Singer;
