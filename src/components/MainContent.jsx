import React, { Component } from 'react';
import RegForm from './RegForm.jsx';

export default class MainContent extends Component {
    render() {
        return (
            <main>
                {/* <!-- the header of the main content --> */}
                <header class="reg-header text-center">
                    {/* <!-- the instructions --> */}
                    <p class="header-caption">
                    Please fill in some information and make sure to fill all fields with
                    <span class="red">* </span>sign.
                    </p>
                    {/* <!-- language link -->
                <a href="reg-ar.html" class="lang-link">عربى</a> */}
                </header>
                <div class="container">
                    <section class="form-card">
                        <RegForm />
                    </section>
                </div>
            </main>
        )
    }
} 