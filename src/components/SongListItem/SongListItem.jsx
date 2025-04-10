import React, { useContext } from "react";
import { SongsContext } from "../../contexts/SongsContext";

const SongListItem = ({ song }) => {
  const { ligthMode, songs, setCurrentSong } = useContext(SongsContext);

  const songClick = () => {
    const selectItem = songs[0].filter((item) => item.id === song.id);
    setCurrentSong(selectItem[0]);
    song.active = false;
  };

  return (
    <div
      className="flex flex-col items-center gap-2 justify-center cursor-pointer my-5 transition-all duration-300 hover:-translate-y-2"
      onClick={songClick}
    >
      <img
        src={song.cover}
        className={`w-44 h-44 object-cover rounded-full  ${
          song.active ? "img-animation border-4 border-sky-700" : ""
        }`}
        alt={song.name}
      />
      <p
        className={` ${ligthMode ? "text-green-800 font-bold" : "text-white"}`}
      >
        {song.name}
      </p>
      <p className="text-gray-500 font-bold">{song.artist}</p>
    </div>
  );
};

export default SongListItem;
