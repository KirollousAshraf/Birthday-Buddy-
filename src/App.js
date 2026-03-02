import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image: "https://www.course-api.com/images/people/person-1.jpeg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image: "https://www.course-api.com/images/people/person-2.jpeg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image: "https://www.course-api.com/images/people/person-3.jpeg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image: "https://www.course-api.com/images/people/person-4.jpeg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image: "https://www.course-api.com/images/people/person-5.jpeg",
  },
];
// console.log(data);

export default function App() {
  const [person, setPerson] = useState(data);

  function handleClearAllData() {
    setPerson([]);
  }

  function handleRefreshAllData() {
    setPerson(data);
  }

  function handleDeletePerson(id) {
    setPerson((person) => person.filter((person) => person.id !== id));
  }

  return (
    <main>
      <div className="container">
        <h3>{person.length} birthdays today</h3>
        <Persons person={person} onDeletePerson={handleDeletePerson} />
        <Button onClick={handleClearAllData}>clear all</Button>
        <Button onClick={handleRefreshAllData}>refresh</Button>
      </div>
    </main>
  );
}

function Persons({ person, onDeletePerson }) {
  return (
    <div>
      {person.map((el) => (
        <Person elObj={el} key={el.id} onDeletePerson={onDeletePerson} />
      ))}
    </div>
  );
}

function Person({ elObj, onDeletePerson }) {
  return (
    <div className="person">
      <img src={elObj.image} alt={elObj.name} className="img" />
      <div>
        <h4>{elObj.name}</h4>
        <p>{elObj.age} years</p>
      </div>
      <button
        className="btn delete-button"
        onClick={() => onDeletePerson(elObj.id)}
      >
        ✕
      </button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <div>
      <button className="btn btn-block" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
