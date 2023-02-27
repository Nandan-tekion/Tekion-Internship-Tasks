import React from 'react'

function Person({person}) {
    //console.log(key);
  return (
    <div>
      <h2>My name is {person.name}</h2>
      <h2>My age is {person.age}</h2>
      <h2>My skill is {person.skill}</h2>
    </div>
  )
}

export default Person
