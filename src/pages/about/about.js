import React from 'react'
import { useState } from 'react'
import "../../styles/styles.css"
import './about-styles.css'
import Profile from "./about-component"
import Person1 from '../../images/people/person1.jpeg'
import Person2 from '../../images/people/person2.jpeg'
import Person3 from '../../images/people/person3.jpeg'
import Person4 from '../../images/people/person4.jpeg'
import axios from 'axios'

 const About = () => {

    const localenv = 'http://localhost:3001/contact'

    const intro = "This started with a dream"
    const summary1 = "Richard started this company with a vision.."
    const [username, setName] = useState('')

    function getTasks(){
        axios.get(localenv).then((response)=>{
            setName(response.data[0].fname) ;console.log(response) ; console.log(response.data[0].fname)
        }).catch((error)=>{
            console.log(error)
        })
    }


    return (
        <div class= "backdrop">
            <div class="about-container">
                <p>{username}</p>
                <button onClick= {getTasks} >Get Tasks</button>
                <Profile class="main boss"  src= {Person1} intro={intro} summary={summary1} />
                <Profile class="sub employee1"  src= {Person2} intro={intro} summary={summary1} />
                <Profile class="sub employee2"  src= {Person3} intro={intro} summary={summary1} />
                
                
            </div>
            
        </div>
    )
}

export default About;