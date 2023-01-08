import React, {useState, useEffect} from 'react';
import Produce from '../pages/Combined'
import basil from '../img/basil.png'
import chives from '../img/chives.png'
import cilantro from '../img/cilantro.png'
import laurel from '../img/laurel.png'
import himalayan from '../img/himalayan.png'
import mint from '../img/mint.png'
import honey from '../img/honey.png'
import seasalt from '../img/roack sesalt.png'
import star from '../img/star.png'
import salay from '../img/salay.png'
import turmeric from '../img/turmeric.png'
import pepper from '../img/pepp.png'
import {Col,Row} from 'react-bootstrap';
import Card from './Card'

function SHerbs(){
    const [quantity, setQuantity] = useState(1);
    const decQuantity =() =>{
        if(quantity > 0) {
        setQuantity(prevCount => prevCount - 1);
        }
    }

    const incQuantity =() =>{
        setQuantity(prevCount => prevCount + 1);
    }

    return(
        <section>
        <Produce/>
        <div className="productField container-fluid">
        {/* <!--Start of Spices Gallery--> */}
        <center>
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={basil} alt={"basil"} id={"basil"} title={"Basil"} text={"per 250g"} priceID={"basilPrice"} Price={"₱27.50"} qtyId={"basilQTY"}/></Col>
            <Col><Card img={chives} alt={"chives"} id={"chives"} title={"Chives"} text={"per 50g"} priceID={"chivesPrice"} Price={"₱32.00"} qtyId={"chivesQTY"}/></Col>
            <Col><Card img={cilantro} alt={"cilantro"} id={"cilantro"} title={"Cilantro"} text={"per 50g"} priceID={"cilantroPrice"} Price={"₱45.00"} qtyId={"cilantroQTY"}/></Col>
            <Col><Card img={laurel} alt={"laurel"} id={"laurel"} title={"Laurel"} text={"per pack"} priceID={"laurelPrice"} Price={"₱15.00"} qtyId={"laurelQTY"}/></Col>
        </Row>   
        {/* <!--Start of 2nd row of products gallery--> */}
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={himalayan} alt={"himalayan"} id={"himalayan"} title={"Himalayan Salt"} text={"per 200g"} priceID={"himalayanPrice"} Price={"₱225.00"} qtyId={"himalayanQTY"}/></Col>
            <Col><Card img={mint} alt={"mint"} id={"mint"} title={"Mint leaves"} text={"per 50g"} priceID={"mintPrice"} Price={"₱35.00"} qtyId={"mintQTY"}/></Col>
            <Col><Card img={honey} alt={"honey"} id={"honey"} title={"Pure Honey"} text={"per 1L bottle"} priceID={"honeyPrice"} Price={"₱250.00"} qtyId={"honeyQTY"}/></Col>
            <Col><Card img={seasalt} alt={"seasalt"} id={"seasalt"} title={"Sea Salt"} text={"per kg"} priceID={"seasaltPrice"} Price={"₱65.00"} qtyId={"seasaltQTY"}/></Col>
        </Row>
        {/* <!--Start of 3rd row of Products Gallery--> */}
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={star} alt={"anise"} id={"Anise"} title={"Star Anise"} text={"per 50g"} priceID={"anisePrice"} Price={"₱35.00"} qtyId={"aniseQTY"}/></Col>
            <Col><Card img={salay} alt={"salay"} id={"salay"} title={"Tanglad"} text={"per 50g"} priceID={"salayPrice"} Price={"₱12.00"} qtyId={"salayQTY"}/></Col>
            <Col><Card img={turmeric} alt={"turmeric"} id={"turmeric"} title={"Turmeric Powder"} text={"per 50g"} priceID={"turmericPrice"} Price={"₱49.00"} qtyId={"turmericQTY"}/></Col>
            <Col><Card img={pepper} alt={"pepper"} id={"pepper"} title={"Pamintang Buo"} text={"per 500g"} priceID={"pepperPrice"} Price={"₱65.00"} qtyId={"pepperQTY"}/></Col>
        </Row>
        </center> 
        </div>
        {/* <!--End of Spices Gallery--> */}
        </section>
    )
}
export default SHerbs;