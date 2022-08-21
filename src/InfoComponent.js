import React from "react";

const InfoComponent = ({ title, value }) => {

  console.log(`infocomponent rendering for ${title}`)
  return (
    <>
      <h3>{title}</h3>
      <h5>{value}</h5>
    </>
  );
};

export default InfoComponent;
