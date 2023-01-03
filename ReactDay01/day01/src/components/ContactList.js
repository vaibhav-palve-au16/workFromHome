import React from "react";
import CardContact from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
    const deleteContactList = (id) => {
        props.getContactId(id)
    }
    const renderContactList = props.contact.map((contact) => {
        // console.log(contact.id);
        return (
            <CardContact contact={contact} clickHandler={deleteContactList} key={contact.id}></CardContact>
        )
    })
    return (
        <div className="list-group">
            <h2>Contact List</h2>
            <div>
                {renderContactList}
            </div>
            <Link to="/">
                <button >Back</button>
            </Link>
        </div>
    )
}
export default ContactList