import React, { useContext } from "react";
import { SongsContext } from "../../contexts/SongsContext";

const SingerItem = ({ id, name, cover, style }) => {
  const { ligthMode } = useContext(SongsContext);
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer my-5 transition-all duration-300 hover:-translate-y-2">
      <img
        src={cover}
        className=" w-44 h-44 object-cover rounded-full"
        alt={name}
      />
      <p
        className={` ${ligthMode ? "text-green-800 font-bold" : "text-white"}`}
      >
        {name}
      </p>
      <p className="text-gray-500 font-bold">{style}</p>
    </div>
  );
};

export default SingerItem;
