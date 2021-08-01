import React from 'react'
import reactDom from 'react-dom'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import "./form.css"


function FormComponent() {

    const testenv ='https://4903938a-af29-4a1a-bec5-592f38ae0653.mock.pstmn.io';
    const localenv = "http://localhost:3001/contact"
 

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") ;

    let user = {
        "fname" : fname,
        "lname" : lname,
        "email" : email,
        "password" : password 
    }

    function updateFname(e) {
        setFname( e.target.value)
    }

    function udpateLname(e){
        setLname(e.target.value)
    }

    function updateEmail(e){
        setEmail(e.target.value)
    }

    function updatePassword(e){
        setPassword(e.target.value)
    }


    function postData(event) {
        
        event.preventDefault();
        console.log(user);
        axios.post(localenv, user).then((response) => 
            {console.log(response);alert("Submission Successful")}) .catch( (error) => 
                {console.log(error); alert(error)});

    }

    return(
        <form class="myform" onSubmit={postData}>
            <label >Name</label>
            <input class="input name-input" type="text"  onChange={updateFname} name="fname" />

            <label >Last Name</label>
            <input class="input lname-input" type="text"   onChange={udpateLname} name= "lname"/>

            <label >email</label>
            <input class="input email-input" type="email" name="email" onChange={updateEmail} />

            <label >Password</label>
            <input  class="input pw-input" type="password" name="password" onChange={updatePassword} />
            <input class="input submit-button" type="submit" value="Submit this form"/>
        
        </form>


    );
}

export default FormComponent;