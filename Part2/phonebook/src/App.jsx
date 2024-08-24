import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '99-55-12341234'
     }
  ]) 
  const [newPerson, setNewPerson] = useState({name:'', phoneNumber:''})


  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  
  const nameObject = {
    name: newPerson.name,
    phoneNumber: newPerson.phoneNumber
  }
  
  const onSubmitForm = (event) =>{
    event.preventDefault();
    if(persons.find(item => item.name.toLowerCase() === nameObject.name.toLowerCase())) {
      alert(`${nameObject.name} is already exist in list.`)
    } else{
      setPersons(persons.concat(nameObject))
      setNewPerson({name:'', phoneNumber:''});
    }
  }

  const onSearchHandle = (e) => {
    setSearch(e.value)
    const filteredList = persons.filter(person => person.name.slice(0, e.value.length).toLowerCase() === e.value.toLowerCase())
    setList(filteredList)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearchHandle={onSearchHandle} />
      <h2>Add a new</h2>
      <PersonForm newPerson={newPerson} setNewPerson={setNewPerson} onSubmitForm={onSubmitForm} />
      
      <h2>List</h2>
      <Persons list={list} persons={persons} search={search}/>
     
    </div>
  )
}

export default App