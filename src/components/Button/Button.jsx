import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="bg-transparent text-green-500" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
