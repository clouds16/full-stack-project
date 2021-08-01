

import React, {useState} from 'react';
import axios from 'axios'
import { functionDeclaration } from '@babel/types';

function LoginComponent(){
    const url = "http://localhost:3001/login"

    const [loginemail, setEmail] = useState("")
    const [loginpassword, setPassword] = useState("")

    function submitForm(event) {
        event.preventDefault();
        axios.post(url, {email : loginemail, password: loginpassword} ).then(results => console.log(results)).catch(e=>{
        console.log(e)
        })
    }

    function changeEmailState(event) {
        setEmail(event.target.value)
    }

    function changePWState(event) {
        setPassword(event.target.value)
    }

    

    return(
        <div class= "container"> 
            <form onSubmit={submitForm} >
            
                <input name="email" type="email" placeholder="email here" onChange={changeEmailState} />
                <input name="password" type="password" onChange={changePWState}  />
                <input type="submit" text="Submit login" />
            </form>
        </div>

    )
}

export default LoginComponent;