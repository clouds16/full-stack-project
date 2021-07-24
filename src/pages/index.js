import React from 'react'
import { BrowserRouter as Router , Switch , Route, Link } from 'react-router-dom'

import Form from './form/form'
import Home from './home/home'
import About from './about/about'
import Destinations from './destinations/destinations'

const Webpages = () =>{
    return (
        <Router >
            <Route exact path="/" component ={Home} />
            <Route path = "/about" component ={About} />
            <Route path = "/contact" component = {Form} />
            <Route path = '/destinations' component= {Destinations} />
        
        </Router>
    )
}


export default Webpages;