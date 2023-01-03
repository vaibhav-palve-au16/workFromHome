import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="input-group-text">
            <div className="ui container center">
                <h2> Contact Manager!! </h2>
            </div>
            <Link to="/add">
                <button > Add Contact</button>
            </Link>
        </div>
    );
}

export default Header;