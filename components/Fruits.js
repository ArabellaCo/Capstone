import React, {useState, useEffect} from 'react';
import Produce from '../pages/Combined';
import atis from '../img/atis.jpg';
import avocado from '../img/avocado.png';
import lacatan from '../img/banana.png';
import latundan from '../img/latundan.png';
import senyorita from '../img/senyorita.png';
import buko from '../img/buko.png';
import calamansi from '../img/calamansi.png'
import chico from '../img/chico.png';
import corn from '../img/corn.png'
import pipino from '../img/pipino.png'
import dalandan from '../img/dandan.png'
import dragon from '../img/dragon.png'
import {Col,Row} from 'react-bootstrap';
import Card from './Card'

function Fruits(){
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
        {/* <!--Start of Fruits Gallery--> */}
        <center>
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={atis} alt={"atis"} id={"atis"} title={"Atis"} text={"per kg"} priceID={"atisPrice"} Price={"₱67.00"} qtyId={"atisQTY"}/></Col>
            <Col><Card img={avocado} alt={"avocado"} id={"avocado"} title={"Avocado"} text={"per kg"} priceID={"avocadoPrice"} Price={"₱65.00"} qtyId={"avocadoQTY"}/></Col>
            <Col><Card img={lacatan} alt={"lacatan"} id={"lacatan"} title={"Banana Lacatan"} text={"per bundle"} priceID={"lacatanPrice"} Price={"₱70.50"} qtyId={"lacatanQTY"}/></Col>
            <Col><Card img={latundan} alt={"latundan"} id={"latundan"} title={"Banana Latundan"} text={"per kg"} priceID={"latundanPrice"} Price={"₱30.00"} qtyId={"latundanQTY"}/></Col>
        </Row>   
        {/* <!--Start of 2nd row of products gallery--> */}
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={senyorita} alt={"senyorita"} id={"senyorita"} title={"Banana Senorita"} text={"per kg"} priceID={"senyoritaPrice"} Price={"₱30.00"} qtyId={"senyoritaQTY"}/></Col>
            <Col><Card img={buko} alt={"buko"} id={"buko"} title={"Buko"} text={"per pc"} priceID={"bukoPrice"} Price={"₱35.00"} qtyId={"bukoQTY"}/></Col>
            <Col><Card img={calamansi} alt={"calamansi"} id={"calamansi"} title={"Calamansi"} text={"per kg"} priceID={"calamansiPrice"} Price={"₱65.00"} qtyId={"calamansiQTY"}/></Col>
            <Col><Card img={chico} alt={"chico"} id={"chico"} title={"Chico"} text={"per kg"} priceID={"chicoPrice"} Price={"₱53.00"} qtyId={"chicoQTY"}/></Col>
        </Row> 
        {/* <!--Start of 3rd row of Products Gallery--> */}
        <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col><Card img={corn} alt={"corn"} id={"corn"} title={"Corn"} text={"per kg"} priceID={"cornPrice"} Price={"₱20.00"} qtyId={"cornQTY"}/></Col>
            <Col><Card img={pipino} alt={"pipino"} id={"cucumber"} title={"Cucumber"} text={"per kg"} priceID={"cucumberPrice"} Price={"₱50.00"} qtyId={"cucumberQTY"}/></Col>
            <Col><Card img={dalandan} alt={"dalandan"} id={"dalandan"} title={"Dalandan"} text={"per kg"} priceID={"dalandanPrice"} Price={"₱45.00"} qtyId={"dalandanQTY"}/></Col>
            <Col><Card img={dragon} alt={"dragon"} id={"dragon"} title={"Dragon fruit"} text={"per kg"} priceID={"dragonPrice"} Price={"₱85.00"} qtyId={"dragonQTY"}/></Col>
        </Row> 
        </center>
        </div>
        {/* <!--End of Fruits Gallery--> */}

        </section>
    )
}
export default Fruits;