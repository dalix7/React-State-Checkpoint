import React from "react";
import Pinfo from "./Pinfo";

const Person = () => {
  return (
    <div>
      <h1> {Pinfo.fullName} </h1>
      <img src={Pinfo.Img_URL} alt="alt" />
      <h2>profession: {Pinfo.profession} </h2>
      <h3> My bio: {Pinfo.bio} </h3>
    </div>
  );
};

export default Person;
