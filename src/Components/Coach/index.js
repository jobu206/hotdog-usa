import React from "react";

const Coach = ({ image, altText, bio }) => (
  <div className="col-4">
    <img src={image} alt={altText} />
    <p>{bio}</p>
  </div>
);

export default Coach;
