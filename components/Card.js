import React, {useState, useEffect} from 'react';

function Card(prop){
    
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
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={prop.img} alt={prop.alt} className="card-img" style={{borderRadius: '1rem'}}/> 
                </div>
                <div className="card-body text-center">   
                    <h5 className="card-title fw-bold text-center" id={prop.id}>{prop.title}</h5>
                    <p className="card-text" id={prop.textId}>{prop.text}</p>
                    <p id={prop.priceID}>{prop.Price}</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group mb-3 align-center  mt-auto"  >
                        <span className="input-group-text" onClick={decQuantity}>-</span>
                        <div className="form-control text-center" id={prop.qtyId}>{quantity}</div>
                        <span className="input-group-text" onClick={incQuantity}>+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>              
            </div>
        </section>
    )
}
export default Card;