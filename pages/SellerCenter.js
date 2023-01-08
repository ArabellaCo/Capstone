import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SellerCenter(){

const [toggleState, setToggleState] = useState(1);
const toggleTab = (index) => {
    setToggleState(index);
  };

const [product_name, setProductName] = useState();
const [unit_price, setUnitPrice] = useState();
const [quantity, setQuantity] = useState();
const [product_img, setProductImage] = useState();
const [products, setProducts] = useState([]);

useEffect(() => {
    const url = 'http://localhost/farmersHub/products.php';
    axios.get(url).then((response) =>{
        setProducts(response.data);
        console.log(products);  
    })
},[])

const submitBtn = function(e){
    e.preventDefault();
    let getData = new FormData();
    getData.append('product_name', product_name);
    getData.append('unit_price', unit_price);
    getData.append('quantity', quantity);
    getData.append('product_img', product_img);
    getData.append('function', 'insert');
    axios({
        method:'POST',
        url: 'http://localhost/farmersHub/products.php',
        data: getData,
        config: 'Content-Type="multipart/form-data"'
    }).then(function(response) {
        const url = 'http://localhost/farmersHub/products.php';
        axios.get(url).then((response)=> {
            setProducts(response.data);
            console.log(products);
        })
    }).catch(function(error){
        alert("error!");
    });
}

const deleteProduct = function(e){
    // alert(e.currentTarget.id);
    let getData = new FormData();
    getData.append('product_id', e.currentTarget.id);
    getData.append('function', 'delete'); //delete
    axios({
        method: 'POST', // get or post
        url: 'http://localhost/farmersHub/products.php', //db link
        data: getData, //data to be transferred
        config: 'Content-Type="multipart/form-data"'
    }).then(function(response){
        const url = 'http://localhost/farmersHub/products.php';
        axios.get(url).then((response) => {
            setProducts(response.data);
            console.log(products);
        })
    }).catch(function(error){
        console.log(error);
        alert("mali!")
    });
}

const updateBtn = function(e){
    alert (e.currentTarget.title);
    let getData = new FormData();
    getData.append('product_id', e.currentTarget.title);
    getData.append('product_name', document.getElementById('product_name'+e.currentTarget.title).value); //update
    getData.append('unit_price', document.getElementById('unit_price'+e.currentTarget.title).value);
    getData.append('quantity', document.getElementById('quantity'+e.currentTarget.title).value);
    getData.append('product_img', document.getElementById('product_img'+e.currentTarget.title).value);
    getData.append('function', 'update');
    axios({
        method: 'POST', // get or post
        url: 'http://localhost/farmersHub/products.php', //db link
        data: getData, //data to be transferred
        config: 'Content-Type="multipart/form-data"'
    }).then(function(response){
        alert ("successfully updated");
    }).catch(function(error){
        console.log(error);
        alert("mali!")
    });
}

    return (
        <div className="container mt-5">
            <h1>Seller Center</h1>

            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        {/* use toggleState on nav-link to toggle the tabs on click */}
                        <Link className={toggleState === 1 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" aria-current="page" to="..." onClick={() => toggleTab(1)}>My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 2 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(2)}>Bank and Cards</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 3 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(3)}>Addresses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 4 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(4)}>My Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 5 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(5)}>Messages</Link>
                    </li>
                </ul>

                <div className="tab-content">
                    {/* use toggleState on tab-pane to toggle the tab-panes on click */}
                    <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"} id="Profile">
                        <div className="row border g-0 shadow-sm">
                            <h3 className="mb-3">My Profile</h3>
                            <div className="col-3 d-block">
                                <div id="profilePic">
                                    <img src="..." alt="" className="img-thumbnail h-25" style={{width:'500px', height:'300px'}} />
                                </div>
                                <div className="input-group">
                                    <label className="input-group-text" htmlFor="inputGroupFile" style={{cursor:'pointer'}}>Change photo</label>
                                    <input type="file" className="form-control" id="inputGroupFile" style={{display: 'none'}} />
                                </div>
                            </div>
                             <div className="col-9 p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="fName">First Name:</span>
                                    <input type="text" className="form-control" id="firstName" placeholder="John" /> 
                                    {/* <!--input id change fName to firstName--> <!--add placeholder--> */}
                                    <span className="input-group-text" id="mName">Middle Initial:</span>
                                    <input type="text" className="form-control" id="middleName" placeholder="F." /> 
                                    {/* <!--add placeholder--> */}
                                    {/* <!--input id change mName to middleName--> */}
                                    <span className="input-group-text" id="lName">Last Name:</span>
                                    <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                                    {/* <!--add placeholder--> */}
                                    {/* <input id change lName to lastName /> */}
                                </div><br/>
                                <div className="input-group mb-3">
                                    <label htmlFor="date" className="input-group-text">Date of Birth:</label>
                                    <input type="date" className="form-control" id="dob" />
                                </div><br/>
                                <div className="input-group mb-3">
                                    <label htmlFor="phoneNum" className="input-group-text">Cellphone number:</label>
                                    <input type="tel" className="form-control" id="phoneNum" placeholder="09XXXXXXXXX" maxLength="11" minLength="11" />
                                </div><br/>
                                <button type="submit" className="btn btn-info text-capitalize btn-sm" >Save Changes</button>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"} id="BankCards">
                        <div className="row border g-0 shadow-sm">
                            <div className="col p-4">
                                <h3 className="mb-3">Banks and Cards</h3>
                                <p>Registered Account:</p> <br/>
                                <p>Bank:  BPI</p>
                                <p>Account Name:  John Doe</p>
                                <p>Account No.:  55** *** ****</p>
                            </div>
                            <div className="col-auto">
                                <img src="img/about 2.png" alt="" className="img-thumbnail" style={{width:'500px', height:'300px'}} />
                            </div>
                        </div>
                    </div>

                    <div className= {toggleState === 3 ? "tab-pane active" : "tab-pane"} id="Addresses">
                        <div className="row border g-0 shadow-sm ">
                            <div className="col p-4 ">
                                <h3 className="mb-3">Addresses</h3>
                                <p className="fw-bold">Current Address: </p>
                                <label id="cAddress"> 253 M.L. Quezon Street,
                                    Santo Niño Tukuran
                                    7019 Zamboanga del Sur,
                                    Philippines</label>
                                <button id="cAdd" className="btn btn-link" data-bs-toggle="modal" 
                                data-bs-target="#editAddress">Edit Address</button>
                                <br/>
                                <p className="fw-bold">Shipping Address: </p>
                                <label id="sAddress"> 253 M.L. Quezon Street,
                                    Santo Niño Tukuran
                                    7019 Zamboanga del Sur,
                                    Philippines</label>
                                <button id="sAdd" className="btn btn-link" data-bs-toggle="modal" 
                                data-bs-target="#editAddressS">Edit Address</button>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 4 ? "tab-pane active" : "tab-pane"} id="Items">
                        <div className="row border g-0 shadow-sm">
                        <h1>Product List</h1>
                        <form>
                            <input type="text" name="product_name" value={product_name} onChange = {(e) => setProductName(e.target.value)}/>
                            <input type="number" name="unit_price" value={unit_price} onChange = {(e) => setUnitPrice(e.target.value)}/>
                            <input type="number" name="quantity" value={quantity} onChange = {(e) => setQuantity(e.target.value)}/>
                            <input type="file" name="product_img" value={product_img} onChange = {(e) => setProductImage(e.target.value)}/>
                            <input type="submit" onClick = {submitBtn}/>
                        
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Unit Price</th>
                                    <th> Quantity</th>
                                    <th> Product Image</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((val) =>{
                                return(
                                <tr key={val.product_id}>
                                    <td><input type="text" defaultValue={val.product_name} id={'product_name'+val.product_id}/></td>
                                    <td><input type="number" defaultValue={val.unit_price} id={'unit_price'+val.product_id}/></td>
                                    <td><input type="number" defaultValue={val.quantity} id={'quantity'+val.product_id}/></td>
                                    <td><img src={val.product_img} alt={product_img} id={'product_img'+val.product_id}/></td>
                                    <td><button id={val.product_id} onClick={deleteProduct}>Delete</button></td>                                  
                                    <td><button title={val.product_id} onClick={updateBtn}>Update</button></td>

                                </tr>
                                )
                            })}
                                
                            </tbody>  

                        </table>
                        </div>
                    </div>

                    <div className={toggleState === 5 ? "tab-pane active" : "tab-pane"} id="Messages">
                        <div className="row border g-0 shadow-sm">
                            <div className="col p-4">
                                <h3 className="mb-3">Messages</h3>
                                <p>Thank you for patronizing our platform.</p>
                                <p>It's a pleasure to serve you.</p>
                            </div>
                            <div className="col-auto">
                                <img src="img/about 2.png" alt="" className="img-thumbnail" style={{width:'500px', height:'300px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellerCenter;