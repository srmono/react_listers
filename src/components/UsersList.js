import React from 'react'
import Person from './Person';

function UsersList() {
    const names = ["venkat", "vasu","gayathri"]
    const namesList = names.map((name, index) => <h2 key={index}>{index + 1} - {name}</h2>);
    const persons = [
        {
            id: 1,
            name: "Bvs Rao",
            age: 32,
            skill: "training"
        },
        {
            id: 2,
            name: "vasu",
            age: 21,
            skill: "dev"
        },
        {
            id: 3,
            name: "gayathri",
            age: 23,
            skill: "react"
        }
    ]
    const personsList = persons.map(person => <Person key={person.id}  person={person} /> )

  return (
    <div>
        {
            namesList
        }
    </div>
  )
}

export default UsersList