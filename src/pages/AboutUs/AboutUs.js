import React from "react";
import "./AboutUs.css";
import persons from "../../common/persons.json";
import PersonsCard from "../../components/PersonsCard/PersonsCard";

export default function AboutUs() {
  return (
    <div>
      {persons.map((person) => (
        <PersonsCard
          imageURL={person.imageURL}
          fullName={person.fullName}
          description={person.description}
          location={person.location}
        />
      ))}
    </div>
  );
}
