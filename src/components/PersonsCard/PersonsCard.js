import React from "react";
import "./PersonsCard.css";

export default function PersonsCard({
  imageURL,
  fullName,
  description,
  location,
}) {
  return (
    <div className="card">
      <img src={imageURL}></img>
      <h3>{fullName}</h3>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  );
}
