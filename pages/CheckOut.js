import "./check.css";
import { useState, useEffect} from 'react';
import axios from 'axios';


function Check(){

    const [fullname, setfullName] = useState();
    const [card, setcard] = useState();
    const [address, setaddress] = useState();
    const [email, setemail] = useState();
    const [city, setcity] = useState();
    const [contact, setcontact] = useState();
    const [cardNumber, setcardNumber] = useState();
    const [zip, setzip] = useState();

    const [name, setname] = useState([]); 

    
    useEffect(()=>{
        const url = 'http://localhost/sat-app/check.php'; 
        axios.get(url).then((response)=>{
            setname(response.data);
            // console.log(name);
        })
    },[]) 

    const submitBtn = function(e){
        e.preventDefault();
        let getData = new FormData();
        getData.append('fullname',fullname); 
        getData.append('card',card); 
        getData.append('address', address);
        getData.append('email', email);
        getData.append('city',city); 
        getData.append('contact', contact);
        getData.append('cardNumber', cardNumber);
        getData.append('zip',zip);    

        getData.append('function', 'insert');


        axios({
            method: 'POST', 
            url: 'http://localhost/sat-app/check.php',
            data: getData , 
            config: 'Content-Type ="multipart/form-data"'
        }).then(function(response){
            //alert("successfully deleted!");
            const url = 'http://localhost/sat-app/check.php'; 
            axios.get(url).then((response)=>{
                setname(response.data);
                console.log(name);
            })
        });
    }



return(

        <div>
            <div className="container-fluid" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
    <p className="display-6 text-center text-uppercase" style={{color: "#073418"}}>Checkout</p>
</div>
<br/><br/>
<div className="container confirm" style={{backgroundColor: "#A2DBB7"}}></div>
<div className="container" id="orderConfirmation">
    <table className="table table-hover table-striped" id="orderContents">
        <thead>
            <tr>
                <th scope="col" >Product</th>
                <th scope="col" >Price</th>
                <th scope="col" >Quantity</th>
                <th scope="col" >Subtotal</th>
            </tr>
        </thead>
    </table>
        <br/><br/>
    <div className="container-fluid">
        <div className="row">
            <div className="col ms-3">                
                <label>Special Instructions to the Seller:</label><br/>
                <textarea className="border shadow-sm p-1" rows="5" cols="45" style={{resize:"none"}}></textarea>
            </div>
            <div className="col">
                <br/>
                {/* <!--Summary table--> */}
                <table className="table table-bordered table-hover table-striped" id="cartContents">
                    <thead>
                        <tr className="text-center">
                            <th colSpan="2">Cart Totals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Subtotal
                            </th>
                            <td id="subtotal">₱0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Shipping
                            </th>
                            <td id="shipFee">₱0.00</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Total
                            </th>
                            <th id="totalPrice">₱0.00</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div><br/>

<div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_paddress.php">

        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <hr/>

            <label htmlFor="fullname"><i className="bi bi-person-fill"></i> Fullname</label>
            <input type="text" id="fullname" placeholder="Paulo C. Mendoza" name="fullname" value={fullname} onChange = {(e) => setfullName(e.target.value)} />
        
            <label htmlFor="email"><i className="bi bi-envelope-fill"></i> Email</label>
            <input type="text" id="email" placeholder="paul@example.com" name="email" value={email} onChange = {(e) => setemail(e.target.value)}/>
            

            <label htmlFor="adr"><i className="bi bi-person-vcard"></i> Address</label>
            <input type="text" id="adr" placeholder="542 W. 15th Street" name="address" value={address} onChange = {(e) => setaddress(e.target.value)}/>

            <label htmlFor="city"><i className="bi bi-buildings"></i> City</label>
            <input type="text" id="city" placeholder="Baguio City" name="city" value={city} onChange = {(e) => setcity(e.target.value)}/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="state"><i className="bi bi-phone"></i>Contact Number</label>
                <input type="text" id="state" placeholder="09" name="contact" value={contact} onChange = {(e) => setcontact(e.target.value)}/>

              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="number" id="zip" placeholder="1001" name="zip" value={zip} onChange = {(e) => setzip(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="col-50">

    
            <h3>Payment</h3>
            <hr/>

            <label htmlFor="card" >Accepted Payments:</label>
            <div className="icon-container">
            <div className="form-check ms-5 mt-2" style={{fontSize: "16px"}}>
                <input className="form-check-input" type="radio" name="Payment" id="cod" value="COD"/>
                <label className="form-check-label" for="cod"> Cash on Delivery</label>
            </div>
            <div className="form-check ms-5 mt-2" style={{fontSize: "16px"}}>
                <input className="form-check-input" type="radio" name="Payment" id="card" value="CARD"/>
                <label className="form-check-label" for="card">Card</label>
            </div>            
        
            </div>
            <label htmlFor="card"><i className="bi bi-credit-card" style={{color:"navy"}}></i> &nbsp;Card Name</label>
            <input type="text" placeholder="Johnny" name="card" value={card} onChange = {(e) => setcard(e.target.value)}/>


            <label htmlFor="ccnum">Card Number</label>
            <input type="number" id="ccnum" name="cardNumber" placeholder="1111-2222-3333" value={cardNumber} onChange = {(e) => setcardNumber(e.target.value)}/>
    
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" fullname="sameadr"/> Shipping address same as billing
        </label>

        <input type="submit" name="" onClick={submitBtn} value="Place Order" className="btn"/>
   
        
      

            


</form>
</div>
</div>
</div>
                
        </div>
 
    )
}
export default Check;