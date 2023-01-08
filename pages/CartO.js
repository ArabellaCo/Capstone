// {/* <form id="regForm" action="">

// <h1>Register:</h1>

// {/* <!-- One "tab" for each step in the form: --> */}
// <div class="tab">Name:
//   <p><input placeholder="First name..." oninput="this.className = ''"/></p>
//   <p><input placeholder="Last name..." oninput="this.className = ''"/></p>
// </div>

// <div class="tab">Contact Info:
//   <p><input placeholder="E-mail..." oninput="this.className = ''"/></p>
//   <p><input placeholder="Phone..." oninput="this.className = ''"/></p>
// </div>

// <div class="tab">Birthday:
//   <p><input placeholder="dd" oninput="this.className = ''"/></p>
//   <p><input placeholder="mm" oninput="this.className = ''"/></p>
//   <p><input placeholder="yyyy" oninput="this.className = ''"/></p>
// </div>

// <div class="tab">Login Info:
//   <p><input placeholder="Username..." oninput="this.className = ''"/></p>
//   <p><input placeholder="Password..." oninput="this.className = ''"/></p>
// </div>

// <div style="overflow:auto;">
//   <div style="float:right;">
//     <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
//     <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
//   </div>
// </div>

// {/* <!-- Circles which indicates the steps of the form: --> */}
// <div style="text-align:center;margin-top:40px;">
//   <span class="step"></span>
//   <span class="step"></span>
//   <span class="step"></span>
//   <span class="step"></span>
// </div>

// </form>



   
// <section class="container mt-2 p-3 text-center">
//     <div class="accordion accordion-flush" id="CheckOut">
//         <div class="accordion-item">
//             <h2 class="accordion-header" id="NameHeading">
//                 <button class="accordion-button btn btn-outline fw-bold" 
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#NameBody"
//                         aria-expanded="true"
//                         aria-controls="NameBody">
//                         Contact Details
//                 </button>
//             </h2>
            
//             <div class="accordion-collapsee"
//                 id="NameBody"
//                 aria-labelledby="#AddressHeading"
//                 data-bs-parent="#CheckOut">
//                     <div class="accordion-body text-justify">
//                         <div class="input-group" mb-3>
//                             <label for="custName" class="input-group-text">Full Name:</label>
//                                 <input type="text" class="form-control" id="custName" />
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                                 <label for="Phone" class="input-group-text">Phone number:</label>
//                                 <input type="tel" class="form-control" id="Phone" minlength="11" maxlength="11"/> 
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                             <label for="userEmail" class="input-group-text">Email address:</label>
//                             <input type="email" class="form-control" id="userEmail"/>
//                         </div><br/>
//                     </div>
//             </div>
//         </div>
//         </div>
//         {/* <!--Shipping Address Info--> */}
//         <div class="accordion-item">
//             <h2 class="accordion-header" id="AddressHeading">
//                 <button class="accordion-button btn btn-outline fw-bold" 
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#AddressBody"
//                         aria-expanded="true"
//                         aria-controls="AddressBody">
//                         Shipping Address
//                 </button>
//             </h2>
            
//             <div class="accordion-collapsee"
//                 id="AddressBody"
//                 aria-labelledby="#AddressHeading"
//                 data-bs-parent="#CheckOut">
//                     <div class="accordion-body text-justify">
//                         <div class="input-group" mb-3>
//                             <label for="Housenum" class="input-group-text">House No.:</label>
//                                 <input type="text" class="form-control" id="Housenum" placeholder="Address Line 1"/>
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                                 <label for="Street" class="input-group-text">Street:</label>
//                                 <input type="text" class="form-control" id="Street" placeholder="Address Line 2"/> 
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                             <label for="Barangay" class="input-group-text">Barangay:</label>
//                             <input type="text" class="form-control" id="barangay"/>
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                             <label for="Municipality" class="input-group-text">Municipality:</label>
//                             <input type="text" class="form-control" id="town"/>
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                             <label for="province" class="input-group-text">Province:</label>
//                             <input type="text" class="form-control" id="province"/>
//                         </div><br/>
//                         <div class="input-group" mb-3>
//                             <label for="zipCode" class="input-group-text">Postal Code:</label>
//                             <input type="text" class="form-control" id="zipCode"/>
//                         </div><br/>
//                     </div>
//             </div>
//         </div>
//          {/* <!--Payment Method Info--> */}
//          <div class="accordion-item">
//             <h2 class="accordion-header" id="PayHeading">
//                 <button class="accordion-button btn btn-outline fw-bold" 
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#PayBody"
//                         aria-expanded="true"
//                         aria-controls="PayBody">
//                         Payment Method
//                 </button>
//             </h2>
//             </div>
            
//             <div class="accordion-collapsee"
//                 id="PayBody"
//                 aria-labelledby="#PayHeading"
//                 data-bs-parent="#CheckOut">
//                     <div class="accordion-body text-start d-flex">
//                         {/* <!--put form in div--> */}
//                         <div id="paymentOptions">
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="Payment" id="cod" value="COD"/>
//                                 <label class="form-check-label" for="cod">Cash on Delivery
//                                 </label>
//                             </div>
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="Payment" id="card" value="CARD"/>
//                                 <label class="form-check-label" for="card">Card
//                                 </label>
//                             </div>
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="Payment" id="Gcash" value="GCASH"/>
//                                 <label class="form-check-label" for="Gcash">Gcash
//                                 </label>
//                             </div>
                            
//                             <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="Payment" id="maya" value="MAYA"/>
//                                 <label class="form-check-label" for="maya">Maya
//                                 </label>
//                             </div>
//                         </div>
//                             <div class="vr mx-5"></div> <br/>
//                             {/* <!--created div for payment method selection--> */}
//                             <div id="paymentMethodData"> <br/>
//                                 <div id="paymentMethodDataGrid1"></div>
//                             </div>
//                             <div id="paymentMethodDataGrid"> <br/>
                              
//                                 <div id="paymentMethodDataGrid2"> <br/>
//                                 <div id="paymentMethodDataGrid3"> <br/>
//                                 <div id="paymentMethodDataGrid4"> <br/>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     </div>
//     <br/>
//     <button class="btn" type="submit" style={{borderRadius:"5px", boxShadow:"5px 5px grey", backgroundColor:"#A2DBB7" }}onclick="PlaceOrder();">Place Order</button>

// </section> */}


function CartO (){
    return (
        <div>
            <p class="display-6 text-center text-uppercase" style="color: #073418; background-color: rgba(0, 0, 0, 0.2);">Shopping Cart</p>
<div class="container-fluid" id="cartBox">
    <table class="table table-hover table-striped" id="cartContents">
        
        <thead>
            
            <tr>
                <th scope="col" >Image</th>
                <th scope="col" >Product</th>
                <th scope="col" >Price</th>
                <th scope="col" class="text-center">Quantity</th>
                <th scope="col" >Subtotal</th>
                <th scope="col" class="text-center"></th>
            </tr>
            
        </thead>
        <tbody>
        
        </tbody>
        </table>
        <br/><br/>
    </div>
        </div>
    )
}
export default CartO;



import "./check.css";
import {   useState, useEffect} from 'react';
import axios from 'axios';


function Check(){

    const [fullName, setfullName] = useState();
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
        getData.append('fullName',fullName); 
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

    // const delBtn = function(e){
    //     //alert (e.currentTarget.id);
    //     let getData = new FormData();
    //     getData.append('name_id', e.currentTarget.id);
    //     getData.append('function', 'delete');
    //     axios({
    //         method: 'POST', 
    //         url: 'http://localhost/sat-app/check.php', 
    //         data: getData , 
    //         config: 'Content-Type ="multipart/form-data"'
    //     }).then(function(result){
    //         //alert("successfully deleted!");
    //         const url = 'http://localhost/sat-app/check.php'; 
    //         axios.get(url).then((response)=>{
    //             setname(response.data);
    //             console.log(name);
    //         })
    //     }).catch(function(error){
    //         alert ("mali");
    //         console.log(error);
    //     });
    // }

    // const upBtn = function(e){
    //     // alert (e.currentTarget.title);
        
    //     let getData = new FormData();
    //     getData.append('name_id', e.currentTarget.title);
    //     getData.append('fullName',document.getElementById('fullName'+e.currentTarget.title).value);
    //     getData.append('card',document.getElementById('card'+e.currentTarget.title).value);
    //     getData.append('address',document.getElementById('address'+e.currentTarget.title).value);
    //     getData.append('email',document.getElementById('email'+e.currentTarget.title).value);
    //     getData.append('city',document.getElementById('city'+e.currentTarget.title).value);
    //     getData.append('contact',document.getElementById('contact'+e.currentTarget.title).value);        
    //     getData.append('cardNumber',document.getElementById('cardNumber'+e.currentTarget.title).value);
    //     getData.append('zip',document.getElementById('zip'+e.currentTarget.title).value);
   

    //     getData.append('function', 'update');
    //     axios({
    //         method: 'POST',
    //         url: 'http://localhost/sat-app/check.php',
    //         data: getData ,
    //         config: 'Content-Type ="multipart/form-data"'
    //     }).then(function(result){
    //         alert("successfully updated!");

    //     }).catch(function(error){
    //         alert ("mali");
    //         console.log(error);
    //     })
    // }

    

return(

        <div>
            <div class="container-fluid" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
    <p class="display-6 text-center text-uppercase" style={{color: "#073418"}}>Checkout</p>
</div>
<br/><br/>
<div class="container confirm" style={{backgroundColor: "#A2DBB7"}}></div>
<div class="container" id="orderConfirmation">
    <table class="table table-hover table-striped" id="orderContents">
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
    <div class="container-fluid">
        <div class="row">
            <div class="col ms-3">                
                <label>Special Instructions to the Seller:</label><br/>
                <textarea class="border shadow-sm p-1" rows="5" cols="45" style={{resize:"none"}}></textarea>
            </div>
            <div class="col">
                <br/>
                {/* <!--Summary table--> */}
                <table class="table table-bordered table-hover table-striped" id="cartContents">
                    <thead>
                        <tr class="text-center">
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

<div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_paddress.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <hr/>

                    
                    <input type="submit" className="btn btn-success" onClick={submitBtn} />


            <label for="fullName"><i class="bi bi-person-fill"></i> Full fullName</label>
            <input type="text" id="fullName" placeholder="Paulo C. Mendoza" name="fullName" value={fullName} onChange = {(e) => setfullName(e.target.value)} />
        
            <label for="email"><i class="bi bi-envelope-fill"></i> Email</label>
            <input type="text" id="email" placeholder="paul@example.com" name="email" value={email} onChange = {(e) => setemail(e.target.value)}/>
            

            <label for="adr"><i class="bi bi-person-vcard"></i> Address</label>
            <input type="number" id="adr" placeholder="542 W. 15th Street" name="address" value={address} onChange = {(e) => setaddress(e.target.value)}/>

            <label for="city"><i class="bi bi-buildings"></i> City</label>
            <input type="text" id="city" placeholder="Baguio City" name="city" value={city} onChange = {(e) => setcity(e.target.value)}/>

            <div class="row">
              <div class="col-50">
                <label for="state"><i class="bi bi-phone"></i>Contact Number</label>
                <input type="text" id="state" placeholder="09" name="contact" value={contact} onChange = {(e) => setcontact(e.target.value)}/>

              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="number" id="zip" placeholder="1001" name="zip" value={zip} onChange = {(e) => setzip(e.target.value)}/>
              </div>
            </div>
          </div>

          <div class="col-50">

    
            <h3>Payment</h3>
            <hr/>
            <label for="card">Accepted Cards</label>
            <div class="icon-container">
              <i class="bi bi-credit-card" style={{color:"navy"}}></i> &nbsp;
              <i class="bi bi-wallet" style={{color:"navy"}}></i> &nbsp;
              <i class="bi bi-cash" style={{color:"navy"}}></i>
        
            </div>
            <label for="card">fullName on Card</label>
            <input type="text" placeholder="John More Doe" name="card" value={card} onChange = {(e) => setcard(e.target.value)}/>


            <label for="ccnum">Credit card number</label>
            <input type="number" id="ccnum" name="cardNumber" placeholder="1111-2222-3333-4444" value={cardNumber} onChange = {(e) => setcardNumber(e.target.value)}/>



                    
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" fullName="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" name="" onClick={submitBtn} value="Place Order" class="btn"/>
        {/* <input type="submit" className="btn btn-success" onClick={submitBtn} /> */}


</form>
</div>
</div>
</div>

{/* {name.map((val)=>{
                    return(
                    <tr key={val.name_id}>
                        <td><input id ={'fullName'+val.name_id} defaultValue={val.fullName}  /></td>
                        <td><input defaultValue={val.card}  id ={'card'+val.name_id} /></td>
                        <td><input defaultValue={val.address}  id ={'address'+val.name_id}/></td>
                        <td><input defaultValue={val.email}  id ={'email'+val.name_id}/></td>
                        <td><input defaultValue={val.city}  id ={'city'+val.name_id} /></td>
                        <td><input defaultValue={val.contact}  id ={'contact'+val.name_id}/></td>
                        <td><input defaultValue={val.cardNumber}  id ={'cardNumber'+val.name_id} /></td>
                        <td><input defaultValue={val.zip}  id ={'zip'+val.name_id}/></td>

                        <td><button className="btn btn-danger" id={val.name_id} onClick={delBtn}>Delete</button></td>
                        <td><button className="btn btn-success" title={val.name_id} onClick={upBtn}>Update</button></td>
                    </tr>
                    )
                })}
 */}
                
        </div>
        // document.getElementById("root")
    )
}
export default Check;



// // import {Routes, Route} from 'react-router-dom';
// import {   useState, useEffect} from 'react';
// import axios from 'axios';


// export default function Help(){
//     // const navigate = useNavigate();
            
//     //         const navigateHelp = () => {
//     //         navigate('/');
//     //         };

//     const [nickname, setnickname] = useState();
//     const [email, setemail] = useState();
//     const [message, setmessage] = useState();

//     const [name, setname] = useState([]); 

    
//     useEffect(()=>{
//         const url = 'http://localhost/sat-app/help.php'; 
//         axios.get(url).then((response)=>{
//             setname(response.data);
//             // console.log(name);
//         })
//     },[]) 

//     const submitButtonHelp = function(e){
//         e.preventDefault();
//         let getData = new FormData();
//         getData.append('nickname',nickname); 
//         getData.append('email', email);
//         getData.append('message',message); 

//         getData.append('function', 'insert');

//         axios({
//             method: 'POST', 
//             url: 'http://localhost/sat-app/help.php',
//             data: getData , 
//             config: 'Content-Type ="multipart/form-data"'
//         }).then(function(response){
//             //alert("successfully deleted!");
//             const url = 'http://localhost/sat-app/help.php'; 
//             axios.get(url).then((response)=>{
//                 setname(response.data);
//                 console.log(name);
//             })
//         });
//     }

//     return(      
//         <section>
//                 <h3 className="fw-bold mt-5 ms-3">Frequently Asked Questions</h3>
//         {/* <!--FAQ section--> */}
//         <div className="m-3">
//         <div className="accordion" id="myAccordion">
//             {/* <!--Question #1--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingOne"> 
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
//                 <i class="bi bi-question-diamond-fill" >&nbsp;</i> Where are your fruits and vegetables sourced?
//                 </button> 
//             </h2>
//             <div id="collapseOne" className="accordion-collapse collapse ">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4" >
//                 We get our products from farmers all over the country. We import fruits and vegetables that are not grown locally. </p>
//                 <br/>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #1-->
//             <!--Question #2--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingTwo">
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"> <i class="bi bi-question-diamond-fill" >&nbsp;</i> How should your products be stored? </button>
//             </h2>
//             <div id="collapseTwo" className="accordion-collapse collapse">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4" > This varies depending on the product. In general, store leafy vegetables in the refrigerator. Root crops, such as potatoes and onions, can be stored at room temperature in a cool, dry place. Fruits should be refrigerated. </p>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #2-->
//             <!--Question #3--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingThree">
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree"> <i class="bi bi-question-diamond-fill" >&nbsp;</i> How quickly can you deliver? </button>
//             </h2>
//             <div id="collapseThree" className="accordion-collapse collapse ">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4"> We have our own delivery service and can deliver to your door the next day (except Sundays) if you place your order before the daily cutoff time of 8 p.m. </p>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #3-->
//             <!--Question #4--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingFour">
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour"> <i class="bi bi-question-diamond-fill" >&nbsp;</i> How do you deliver our orders? </button>
//             </h2>
//             <div id="collapseFour" className="accordion-collapse collapse ">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4"> We deliver your orders using our fleet of refrigerated vans to ensure the freshness of your order. </p>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #4-->
//             <!--Question #5--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingFive">
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive"> <i class="bi bi-question-diamond-fill" >&nbsp;</i> If I am not satisfied with my orders, what are my options? </button>
//             </h2>
//             <div id="collapseFive" className="accordion-collapse collapse ">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4"> Due to the nature of our products, it is our policy that once the items are received and accepted, it is assumed that you have inspected and are satisfied with our products. We do allow you to reject items on the spot if you are dissatisfied with them. As a result, we strongly recommend that you or your representative inspect the delivered items one by one. </p>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #5-->
//             <!--Question #6--> */}
//             <div className="accordion-item">
//             <h2 className="accordion-header" id="headingSix">
//                 <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSix"> <i class="bi bi-question-diamond-fill" >&nbsp;</i> Do you accept bulk orders? </button>
//             </h2>
//             <div id="collapseSix" className="accordion-collapse collapse ">
//                 <div className="card-body">
//                 <p className="ms-5 mt-4"> We certainly do! Large orders for businesses, restaurants, and parties are welcome. If you have any further questions, please contact us via email and we will get back to you. </p>
//                 </div>
//             </div>
//             </div>
//             {/* <!--Question #6--> */}
//         </div>
//         {/* <!--FAQ section-->
//         <!--Contact Us Form--> */}
//         <div className="form-area">
//             <div className="container">
//             <div className="row single-form g-0">
//                 <div className="col-sm-12 col-lg-6">
//                 <div className="left">
//                     <h2>
//                     <span>Get in</span>
//                     <br/>touch with us!
//                     </h2>
//                 </div>
//                 </div>
//                 <div className="col-sm-12 col-lg-6">
//                 <div className="right">
//                     <i className="bi bi-caret-right-fill" style={{color: '#A2DBB7'}}></i>
//                     <form action="" get="POST">
//                     <div className="mb-3">
//                         <label for="name" className="form-label">Your Name</label>
//                         {/* <input type="text" className="form-control" id="nickname" aria-describedby="emailHelp"/> */}
//                         <input type="text" className="form-control"  id="nickname" placeholder="Paula Joyce" name="nickname" value={nickname} onChange = {(e) => setnickname(e.target.value)}/>
//                     </div>
//                     <div className="mb-3">
//                         <label for="InputEmail" className="form-label">Email address</label>
//                         {/* <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/> */}
//                         <input type="email" className="form-control" id="InputEmail" placeholder="paula@example.com"  name="email" value={email} onChange = {(e) => setemail(e.target.value)}/>

//                     </div>
//                     <div className="mb-3">
//                         <label for="exampleInputPassword1" className="form-label">Message</label>
//                         <textarea type="password" className="form-control" id="exampleInputPassword1" style={{resize:'none'}} name="message" value={message} onChange = {(e) => setmessage(e.target.value)}></textarea>
//                         {/* <input type="text" id="email" nickname="messsage" value={messsage} onChange = {(e) => setmessage(e.target.value)}/> */}

//                     </div>
//                     <button type="submit" className="btn btn-success" onclick={submitButtonHelp}>Submit</button>
//                     </form>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>


// {name.map((val)=>{
//                     return(
//                     <tr key={val.name_id}>
//                         <td><input id ={'nickname'+val.name_id} defaultValue={val.nickname}  /></td>
//                         <td><input defaultValue={val.email}  id ={'email'+val.name_id}/></td>
//                         <td><input defaultValue={val.message}  id ={'message'+val.name_id} /></td>
                 

//                     </tr>
//                     )
//                 })}

                


//         {/* {/* <!--Contact Us Form--> */}
//         </div>
//         </section>
//     )
// }


// {/* <Routes>
// <Route path="/" />
// </Routes> */}



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