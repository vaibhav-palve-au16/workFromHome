import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === "") {
            alert("something error");
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({
            name: "",
            email: ""
        })
    }
    render() {
        return (
            <div className="input-group mb -3">
                <form className="ui form" onSubmit={this.add}>
                    <div className="form-control">
                        <label> Name:-</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="form-control">
                        <label> email:- </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
                <Link to="/list">
                    <button > Show List of User</button>
                </Link>
            </div>
        )
    }


}
export default AddContact