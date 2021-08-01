import React , {useState} from 'react'
import LoginComponent from './login-components';
import '../../styles/styles.css'

function LoginPage() {
    return (
        <div class="backdrop">
            <h1> this is the login page</h1>
            <LoginComponent />
        
        </div>
    )
}

export default LoginPage;