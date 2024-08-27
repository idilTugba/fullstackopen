import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneServices from './services/phonebook.tsx'
import Error from './components/Error.tsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '99-55-12341234'
     }
  ]) 
  const [newPerson, setNewPerson] = useState({name:'', phoneNumber:''})
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [errorMesage, setErrorMesage] = useState(false)
  const [notification, setNotification] = useState(null)
  
  const nameObject = {
    name: newPerson.name,
    phoneNumber: newPerson.phoneNumber
  }
  
  const onSubmitForm = (event) =>{
    event.preventDefault();
    
    if(persons.find(item => item.name.toLowerCase() === nameObject.name.toLowerCase())) {
      const samePerson = persons.find(person => person.name === nameObject.name)
      phoneServices.changePhone(nameObject, samePerson.id).then(res => {
        setPersons(persons.map(person => person.id !== samePerson.id ? person : res.data))
      })
    } else{
      addNewPersonOnBook();
      setNewPerson({name:'', phoneNumber:''});
    }
  }

  const onSearchHandle = (e) => {
    setSearch(e.value)
    const filteredList = persons.filter(person => person.name.slice(0, e.value.length).toLowerCase() === e.value.toLowerCase())
    setList(filteredList)
  }

  useEffect(()=>{
    phoneServices.getList().then(res => {
      const data = res.data; 
      setPersons(data)
    })
  },[])

  const addNewPersonOnBook = () => {
    phoneServices.addNewPhone(nameObject).then(res => {
      setPersons(persons.concat(res.data))
      setNotification(`${res.data.name} added to phonebook succesfly.`)
      setErrorMesage(false)
      setTimeout(()=>{
        setNotification(null)
      },5000)
    })
  }

  const deletePhoneHandle = (id) => {
    const name = persons.find(item => item.id === id);
    if (window.confirm(`Do you really want to delete ${name.name + ' ' + name.phoneNumber } from the phonebook?`)) {
      phoneServices.deletePhone(id).then(res => {
        setPersons(persons.filter(person => person.id !== res.data.id))
      }).catch(error => {
        setNotification(`${name.name + ' ' + name.phoneNumber } already deleted.`)
        setErrorMesage(true)
        setTimeout(()=>{
          setNotification(null)
        },5000)
      })    
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearchHandle={onSearchHandle} />
      <h2>Add a new</h2>
      <Error msg={notification} err={errorMesage}/>
      <PersonForm newPerson={newPerson} setNewPerson={setNewPerson} onSubmitForm={onSubmitForm} />
      <h2>List</h2>
      <Persons list={list} persons={persons} search={search} onDeleteHandle={deletePhoneHandle}/>
     
    </div>
  )
}

export default App