import React from 'react';

const PersonsList = ({ personsToShow }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  );
};

export default PersonsList;
