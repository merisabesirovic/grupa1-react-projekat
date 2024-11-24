import React from "react";
import "./AboutUs.css";
import persons from "../../common/persons.json";
import PersonsCard from "../../components/PersonsCard/PersonsCard";

export default function AboutUs() {
  return (
    <div className="wrapper">
      <h1>Ovo su članovi naše grupe</h1>
      <div className="aboutUs">
        {persons.map((person) => (
          <PersonsCard
            imageURL={person.imageURL}
            fullName={person.fullName}
            description={person.description}
            location={person.location}
          />
        ))}
      </div>
    </div>
  );
}
