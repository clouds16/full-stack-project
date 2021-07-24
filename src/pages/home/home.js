import React from 'react'
import { Link} from 'react'
import "../../styles/styles.css"
import "./home.css"
import calendar from './calendar.png'
import beach from '../../images/beach.jpg'


 const Home = () => {
    return (
        <div class = "backdrop">



            <div class="container-home">
                <img class="home-page-img" src={beach} width = "100%" height = "100%" />
                <h1 class ="slogan"> Your Next Vacation Starts Here.</h1>
                <div class="button-container">
                    
                    <button class="mybutton homebutton" > 
                        <a href="/destinations" text-decoration="none"> Get Started!</a>
                    </button>

                    <button class= "mybutton homebutton" > <a  href= "/about" text-decoration= "none"  >About us</a></button>
                </div>
                <img class="calendar" src={calendar} width="30%" height="60%" />
                
            </div>



        </div>
    )
}

export default Home;