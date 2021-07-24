import React, { useState } from 'react'

import DestinationComponent from './destination-component'
import './styles.css'
import '../../styles/styles.css'
import HotDestinations from './quicklinks'

import CancunImage from '../../images/destinations/cancun.jpg'
import Image1 from '../../images/destinations/hawaii.jpg'
import CaboImage from '../../images/destinations/cabo.jpg'
import HuatulcoImage from '../../images/destinations/huatulco.jpg'


function DestinationsPage(){

    


    return (
        <div class="backdrop dest-backdrop" >
            <div class = "section-destinations"> 
                <DestinationComponent name="Cancun" summary="Beutiful Beach in Mexico" details= "Price = 500" imgsrc={CancunImage}/>
                <DestinationComponent name= "Huatulco" summary ="Oaxaca Beach " details="Beautiful place" imgsrc= {HuatulcoImage} />
                <DestinationComponent name= "Cabo" summary ="Oaxaca Beach " details="Beautiful place" imgsrc= {CaboImage}/>
                <DestinationComponent name= "Hawaii" summary ="Oaxaca Beach " details="Beautiful place" imgsrc= {Image1}/>
                <DestinationComponent name= "Fiji" summary ="Oaxaca Beach " details="Beautiful place" imgsrc= {Image1}/>
                <DestinationComponent name= "Galapagos" summary ="Oaxaca Beach " details="Beautiful place" imgsrc= {Image1}/>

            </div>

            <div class = "section-hotlinks" >
                <div class="container-popular"> 
                    <HotDestinations name="Cancun" link="www.cancun.com"> </HotDestinations>
                    <HotDestinations name= "Huatulco" link="www.youtube.com" ></HotDestinations>

                </div>
            </div>
            
        </div>
    )
}

export default DestinationsPage;