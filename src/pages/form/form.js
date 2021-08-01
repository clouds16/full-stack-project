import React from 'react'
import { useState } from 'react'
import reactDom from 'react-dom'

import FormComponent from './form-component'

import "./form.css"
import '../../styles/styles.css'


const Form = () => {


    
    return (
        
        <div class = "backdrop form-div">
            <div class= "container">
                <FormComponent />
		
           </div> 
        </div>
        
    )
}




export default Form ;