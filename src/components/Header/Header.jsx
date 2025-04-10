import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoonFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { SongsContext } from "../../contexts/SongsContext";
import Button from "../Button/Button";

const Header = () => {
  const { value, setValue, ligthMode, setLigthMode } = useContext(SongsContext);

  return (
    <header className="container flex justify-between mx-auto mt-5 items-center flex-col-reverse sm:flex-row gap-3">
      <h1 className="text-gray-500 text-3xl border-b border-green-600 p-2">
        Songs
      </h1>

      <div className="flex items-center gap-2 bg-white rounded-full py-3 px-5 w-72 sm:w-96 border-l-4 border-r-4 border-green-500">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <AiOutlineSearch className="text-xl" />
      </div>
      <Button onClick={() => setLigthMode((prev) => !prev)}>
        {ligthMode ? <BsMoonFill /> : <CiLight className="text-2xl" />}
      </Button>
    </header>
  );
};

export default Header;
