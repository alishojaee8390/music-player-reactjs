import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[600px] overflow-hidden flex flex-col justify-center items-center gap-10">
      <h1 className="text-red-700 text-9xl ">404</h1>
      <p className="text-gray-600 text-2xl">Page Is Not Found</p>
      <Link
        to={"/"}
        className="text-green-500 border rounded-lg p-2 border-green-500 hover:bg-green-500 hover:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
