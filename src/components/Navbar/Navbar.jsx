import React, { useContext } from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SongsContext } from "../../contexts/SongsContext";
const Navbar = () => {
  const { ligthMode } = useContext(SongsContext);
  return (
    <nav className="container mx-auto mt-10">
      <ul className="flex gap-2 items-center ms-5 sm:ms-0">
        <Link
          to="/"
          className={` flex  items-center gap-1 ${
            ligthMode ? "text-gray-900" : "text-white "
          }  transition-all duration-300 cursor-pointer hover:text-green-500`}
        >
          <IoMdMusicalNote className="text-green-500" />
          Music
        </Link>
        <Link
          to="/Singer"
          className={` flex  items-center gap-1 ${
            ligthMode ? "text-gray-900" : "text-white "
          }  transition-all duration-300 cursor-pointer hover:text-green-500`}
        >
          <GiMicrophone className="text-green-500" />
          Singer
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
