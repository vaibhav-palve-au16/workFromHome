import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContact] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))?JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)):[])
  const addContactHandler = (contact) => {
    setContact([...contacts, {id:Math.random().toString(),...contact}])
  }

  const removeContactHandler =(id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id
    })
    setContact(newContactList)
  }

  // useEffect(() => {
  //   let retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveContacts){
  //     console.log(retriveContacts);
  //     // setContact(retriveContacts)
  //   }
  // }, [])
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)) }, [contacts])
  return (
    <div className='container-fluid'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
