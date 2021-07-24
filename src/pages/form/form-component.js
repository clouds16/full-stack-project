import React from 'react'
import reactDom from 'react-dom'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'


function FormComponent() {

    const testenv ='https://4903938a-af29-4a1a-bec5-592f38ae0653.mock.pstmn.io';
    const localenv = "https://localhost:3001/contact"

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
        axios.post(testenv, user).then((response) => 
            {console.log(response);alert(response)}) .catch( (error) => 
                {console.log(error); alert(error)});

    }

    return(
        <form onSubmit={postData}>
            <label >Name</label>
            <input class="input name-input" type="text"  onChange={updateFname} name="fname" />

            <label >Last Name</label>
            <input class="input lname-input" type="text"   onChange={udpateLname} name= "lname"/>

            <label >email</label>
            <input class="input email-input" type="email" name="email" onChange={updateEmail} />

            <label >Password</label>
            <input type="password" name="password" onChange={updatePassword} />

            <input text="Submit my data!" type="submit" />
        
        </form>
    );
}

export default FormComponent;