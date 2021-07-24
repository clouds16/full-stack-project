import React from 'react'

import './styles.css'


function HotDestinations (props) {
    return (
     
            <h2 >
            <a href = {props.link} > {props.name}</a>
            </h2>
            
        
        
    )
}


export default HotDestinations;