import React from "react";
import Avatar from "../image/avatar.png"

const CardContact = (props) => {
    const { name, email } = props.contact
    // console.log(id);
    return (
        <div>
            <div>
                <div className="list-group-item">
                    <img className="material-symbols-outlined" src={Avatar}></img>
                    {name}
                </div>
                <div className="list-group-item">
                    {email}
                </div>
                <i className="bi bi-trash3" style={{ color: 'red', marginTop: "7px" }} onClick={(id) => { props.clickHandler(props.contact.id) }}></i>
            </div>
        </div>
    )

}
export default CardContact;
