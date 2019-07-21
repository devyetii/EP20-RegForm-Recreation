import React, { Component } from 'react'
import logo from '../assets/logo.png'

export default class Header extends Component {
    render() {
        return (
            <header id="main-header" class="reg-header text-center">
              {/* <!-- the logo --> */}
              <a href="/" class="logo-link"><img src={logo} alt="energia logo"/></a>
              
              {/* <!-- simple note --> */}
              <p class="header-caption">
                These questions don't determine your acceptance or rejection, So feel
                free to answer all questions honestly.
              </p>
            </header>
        )
    }
}