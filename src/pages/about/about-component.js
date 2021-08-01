import React from 'react'
import { useState} from 'react'


function Profile(props){
    return (

        <div class= {props.class } >
            
            <img class ="profiles" src = {props.src} height="100px" width="100px"  border-radius="50%"/>    
            <div class= "summary"> 
                <h1> {props.intro}</h1>
                <p> {props.summary} </p>
            </div>

        </div>
    )
}

export default Profile;