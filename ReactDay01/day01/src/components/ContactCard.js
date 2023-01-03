import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../image/avatar.png"

const CardContact = (props) => {
    const { id, name, email } = props.contact
    // console.log(id);
    return (
        <div>
            <div>
                <img className="material-symbols-outlined" src={Avatar} alt="show"></img>
                <div className="list-group-item">
                    <Link to={{ pathname: `/component/${id}`, state: { contact: props.contact } }}>
                        {name}
                        <div className="list-group-item">
                            {email}
                        </div>
                    </Link>
                </div>
                <i className="bi bi-trash3" style={{ color: 'red', marginTop: "7px" }} onClick={(id) => { props.clickHandler(props.contact.id) }}></i>
            </div>
        </div>
    )

}
export default CardContact;
