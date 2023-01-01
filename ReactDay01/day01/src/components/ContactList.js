import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
    const deleteContactList = (id) =>{
        props.getContactId(id) 
    }
    const renderContactList = props.contact.map((contact) =>{
        console.log(contact.id);
        return (
            <CardContact contact={contact} clickHandler={deleteContactList} key={contact.id}></CardContact>
        )
    })
    return (
        <div className="list-group">
            <div>
            {renderContactList}
            </div>
        </div>
    )
}
export default ContactList