import React, {useState, useEffect} from 'react';
import Produce from '../pages/Combined';
import papaya from '../img/papaya.jpg';
import patola from '../img/patola.jpg';
import pechay from "../img/pechay.jpg";
import pechayB from "../img/pechay baguio.jpg";
import potato from "../img/lage potato.jpg";
import medPotato from "../img/medium potato.jpg";
import marble from '../img/potato marballs.jpg';
import radish from "../img/radish.jpg";
import saluyot from "../img/saluyot.jpg";
import sayote from "../img/sayote.jpg";
import sigarilyas from "../img/sigarilyas.jpg";
import labuyo from "../img/sili labuyo.jpg";
import {Col,Row} from 'react-bootstrap';
import Card from './Card'
import axios from 'axios';

function Veggies() {
    
    
    const [veggies,setVeggies] = useState([]);

    useEffect(() => {
        const url = 'http://localhost/farmersHub/veggies.php';
        axios.get(url).then((response) => {
            
            console.log(veggies);
            setVeggies(response.data);
            console.log(veggies);
        })
    }, [])

    
    return(
        <section>
        <Produce/>
        <div className="productField container-fluid">
            {/* <!--Start of Vegetables Gallery--> */}
            <div className="Vegetables">
            <center>
            <div>
            {veggies.map((val)=>{
                return(
                    <Row key={val.veggies_id}>
                        <Col><Card alt={val.veggies_title} title={val.veggies_title} text={val.veggies_text} Price={val.veggies_price}/></Col>
                    </Row>
                    )
            })}
            </div>
            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                <Col><Card img={papaya} alt={"papaya"} id={"papaya"} title={"Papaya Green"} text={"per pc"} priceID={"papayaPrice"} Price={"₱67.50"} qtyId={"papayaQTY"}/></Col>
                <Col><Card img={patola} alt={"patola"} id={"Patola"} title={"Patola"} text={"per pc"} priceID={"PatolaPrice"} Price={"₱67.50"} qtyId={"PatolaQTY"}/></Col>
                <Col><Card img={pechay} alt={"pechay"} id={"Pechay"} title={"Pechay"} text={"per 250g"} priceID={"PechayPrice"} Price={"₱37.50"} qtyId={"PechayQTY"}/></Col>
                <Col><Card img={pechayB} alt={"pechayB"} id={"PechayB"} title={"Pechay Baguio"} text={"per kg"} priceID={"PechayBPrice"} Price={"₱99.00"} qtyId={"PechayBQTY"}/></Col>
            </Row>   
            {/* <!--Start of 2nd row of products gallery--> */}
            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                <Col><Card img={potato} alt={"potato"} id={"Potato"} title={"Potato Large"} text={"per 500g"} priceID={"PotatoPrice"} Price={"₱65.00"} qtyId={"PotatoQTY"}/></Col>
                <Col><Card img={medPotato} alt={"medPotato"} id={"PotatoM"} title={"Potato medium"} text={"per 500g"} priceID={"PotatoMPrice"} Price={"₱65.00"} qtyId={"PotatoMQTY"}/></Col>
                <Col><Card img={marble} alt={"marble"} id={"MarblePotato"} title={"Potato marble"} text={"per 500g"} priceID={"MarblePotatoPrice"} Price={"₱52.00"} qtyId={"MarblePotatoQTY"}/></Col>
                <Col><Card img={radish} alt={"radish"} id={"Radish"} title={"Radish"} text={"per kg"} priceID={"RadishPrice"} Price={"₱59.00"} qtyId={"RadishQTY"}/></Col>
            </Row>
            {/* <!--Start of 3rd row of Products Gallery--> */}
            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                <Col><Card img={saluyot} alt={"saluyot"} id={"Saluyot"} title={"Saluyot"} text={"per bundle"} priceID={"SaluyotPrice"} Price={"₱22.00"} qtyId={"SaluyotQTY"}/></Col>
                <Col><Card img={sayote} alt={"sayote"} id={"sayote"} title={"Sayote"} text={"per 500g"} priceID={"sayotePrice"} Price={"₱35.00"} qtyId={"sayoteQTY"}/></Col>
                <Col><Card img={sigarilyas} alt={"sigarilyas"} id={"sigarilyas"} title={"Sigarilyas"} text={"per 250g"} priceID={"sigarilyasPrice"} Price={"₱85.00"} qtyId={"sigarilyasQTY"}/></Col>
                <Col><Card img={labuyo} alt={"labuyo"} id={"labuyo"} title={"Sili labuyo"} text={"per 100g"} priceID={"labuyoPrice"} Price={"₱54.50"} qtyId={"labuyoQTY"}/></Col>
            </Row>
            </center>
            </div>
            {/* <!--End of Vegetables Gallery--> */}
        </div>
        </section>
    )
}
export default Veggies;