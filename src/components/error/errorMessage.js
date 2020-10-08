import React from "react";
import "./error.css";
import img from "./error.jpg";

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt="error"></img>
      <span>Something goes wrong :(</span>
    </>
  );
};

//const ErrorMessage = () => {
//return <span>Something goes wrong</span>;
//};

export default ErrorMessage;
