import React, { useContext, useEffect, useState } from "react";
import SongListItem from "../SongListItem/SongListItem";
import { SongsContext } from "../../contexts/SongsContext";

const Songs = () => {
  const { songFilter } = useContext(SongsContext);

  return (
    <div className="container mx-auto my-10  rounded-lg  h-[600px] overflow-auto">
      {songFilter.length === 0 ? (
        <div className="flex justify-center items-center h-[500px] ">
          <h1 className="text-white text-2xl">
            The desired song was not found
          </h1>
        </div>
      ) : (
        <div className="p-5 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-y-4 ">
          {songFilter.map((song) => (
            <SongListItem key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Songs;
