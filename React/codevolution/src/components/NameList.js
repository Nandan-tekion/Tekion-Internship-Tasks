import React from "react";
import Person from "./Person";

function NameList() {
  const personList = [
    {
      id: 1,
      name: "John",
      age: 21,
      skill: "React",
    },
    {
      id: 2,
      name: "Bruce",
      age: 23,
      skill: "React",
    },
    {
      id: 3,
      name: "Tom",
      age: 27,
      skill: "React",
    },
    {
      id: 4,
      name: "Clarke",
      age: 25,
      skill: "React",
    },
  ];

  const personDisplayList = personList.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personDisplayList}</div>;
}

export default NameList;
