import { useState, useEffect } from 'react'
import axios from 'axios';


import FilterForm from './filter'
import PersonForm from './personform'
import PersonsList from './personlist'







const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching the dataea:', error);
      });
  }, []);









  const handlePersonChange = (event) => {
    event.preventDefault()
    console.log('to be added', event.target)
    setNewName(event.target.value)
   
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    console.log('this is the number to be added:', event.target)
    setNewNumber(event.target.value)

  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    console.log('this is the filter to be added:', event.target)
    setFilter(event.target.value)

  }

 


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length +1

      }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }}


  const peopleToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons



  return (
    <div>
      <h2>Phonebook</h2>
      
      <FilterForm filter={filter} handleFilterChange={handleFilterChange} />
      
      <h2>Add a new</h2>
      
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      
      <PersonsList personsToShow={peopleToShow} />
    </div>
  )

}

export default App