import React from 'react'

function Person({person}) {
  return (
    <h2>{person.name} - {person.age} - {person.skill}</h2>
  )
}

export default Person