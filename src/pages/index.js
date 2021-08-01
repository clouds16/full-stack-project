import React from 'react'
import { BrowserRouter as Router , Switch , Route, Link } from 'react-router-dom'

import Form from './form/form'
import Home from './home/home'
import About from './about/about'
import Destinations from './destinations/destinations'
import LoginPage from './login/login-page'

const Webpages = () =>{
    return (
        <Router >
            <Route exact path="/" component ={Home} />
            <Route path = "/about" component ={About} />
            <Route path = "/contact" component = {Form} />
            <Route path = '/destinations' component= {Destinations} />
            <Route path = '/login' component= {LoginPage} />
        
        </Router>
    )
}


export default Webpages;