import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactDetails from './ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContact] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [])
  const addContactHandler = (contact) => {
    setContact([...contacts, { id: Math.random().toString(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContact(newContactList)
  }

  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)) }, [contacts])
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path="/" element={
            < Header />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/list" element={<ContactList contact={contacts} getContactId={removeContactHandler} />} />
          <Route path="/component/:id" element={ <ContactDetails /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
