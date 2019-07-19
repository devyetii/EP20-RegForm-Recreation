import React, { Component } from 'react'

class RegForm extends Component {
    constructor() {
        super();
        this.state = {
            user : "",
            pass : ""
        };
        this.handleBlur     = this.handleBlur.bind(this);
        this.handleClick    = this.handleClick.bind(this);
    };
    
    handleBlur(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleClick() {
        alert(`Username: ${this.state.user}, Password: ${this.state.pass}`);
    }

    render() {
        return (
            <form method="post">
                <input type="text" name="user" placeholder="Username" onBlur={this.handleBlur} />
                <input type="password" name = "pass" placeholder="Password" onBlur={this.handleBlur} />
                <input type="button" onClick={this.handleClick} value="Submit" />
            </form>
        )
    }
}

export default RegForm;