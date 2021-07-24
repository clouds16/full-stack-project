

import React from 'react';

const  DestinationComponent = (props) =>{
    return (
        <div class= "dest-container">
            <div class= "image-section"> 
                <img src= {props.imgsrc} width="auto" height="100%" object-fit="scale-down" />
            </div>

            <div class= "summary"   >
                <h3> Welcome to {props.name} </h3> 
                <h4> {props.summary} </h4>
            </div>

            <div class = "details" >
                <h3> {props.details}</h3>
            </div>
        </div>
    )
}

export default DestinationComponent;