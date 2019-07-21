import React, { Component } from 'react'
import Formik from 'formik';
import Yup from 'yup';

class RegForm extends Component {
    constructor() {
        super();
        this.state = {
            user : "",
            email : ""
        };
    };
    
    render() {
        return (
            <form id="regForm" novalidate>
                <legend class="h1 text-center card-head">Registeration Form</legend>

                <section class="form-fields">
                    <div class="field half">
                        <label for="name">Full Name <span class="red">* </span></label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="e.g: Mohamed"
                            required
                        />
                    </div>

                    <div class="field half">
                        <label for="email">Your Email Address<span class="red">* </span></label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="e.g: example@example.com"
                            required
                        />
                    </div>
                </section>
            </form>
        )
    }
}

export default RegForm;