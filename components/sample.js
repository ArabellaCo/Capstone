import Produce from '../pages/Combined'
import Card from './Card'
import pakbet from '../img/pinakbet.jpg'
import chopseuy from '../img/chopseuy.jpg'

function BestSellers(){
    return(
        <div>
        <Produce/>
        {/* <!--Nav Tabs--> */}
        <div className="container-fluid mt-2">
            <ul className="nav nav-tabs nav-justified flex-column flex-sm-row">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" aria-current="page" href="#UlamBundles">Ulam Bundles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#FruitsBasket">Fruits Basket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#SaladSet">Salad Set</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#Pantry">Pantry Essentials</a>
                </li>
            </ul>
            <div className="tab-content">
                {/* <!--Ulam Bundles Tab--> */}
                <div className="tab-pane active" id="UlamBundles">
                    <h3 className="mb-3 text-center">Ulam Bundles</h3>
                    <p className="text-center">The Ulam Bundle has all the fresh vegetables, leafy greens and rekados (ginger, tomato, onion, garlic) you need for one ulam, to serve your family or friends. Sulit and convenient.</p>
                    <p className="fst-italic text-center">*meats not included</p>
                    <div className="row g-2 m-1 d-flex justify-content-center">
                        {/* <div className="col-12 col-md-6 col-lg-3 m-2 card shadow card shadow">
                        <div className="inner">
                            <img src="img/pinakbet.jpg" className="card-img img-thumbnail"/> 
                        </div>
                            <div className="card-body text-center">   
                            <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="pakbet">Pakbet</h5>
                            <p className="card-text" id="pakbetPrice">₱35.00</p>
                            </div>
                            <div className="card-footer d-flex flex-column justify-content-between">
                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                        <span className="input-group-text" onclick="pakbetQTY.value = decQuantity(pakbetQTY)">-</span>
                                        <input type="number" id="pakbetQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                        <span className="input-group-text" onclick="pakbetQTY.value = incQuantity(pakbetQTY)">+</span>
                                    </div><br/>     
                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(pakbet, pakbetQTY.value, pakbetPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div> 
                        </div> */}
                        <Card img={pakbet} alt={"pakbet"} id={"pakbet"} title={"Pakbet"} textId={"pakbetPrice"} text={"₱35.00"} qtyId={"pakbetQTY"}/>
                        <Card img={chopseuy} alt={"chopseuy"} id={"chopseuy"} title={"Chop Seuy"} textId={"chopseuyPrice"} text={"₱35.00"} qtyId={"chopQTY"}/>
                        {/* <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/chopseuy.jpg" className="card-img img-thumbnail"/> 
                            </div>
                            <div className="card-body text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="chopseuy">Chop Seuy</h5>  
                                <p className="card-text" id="chopseuyPrice">₱35.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="chopQTY.value = decQuantity(chopQTY)">-</span>
                                    <input type="number" id="chopQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="chopQTY.value = incQuantity(chopQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(chopseuy, chopQTY.value, chopseuyPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>    
                        </div> */}
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/gabi.jpg" className="card-img img-thumbnail"/> 
                            </div>
                            <div className="card-body text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="sigangGabi">Sinigang with Gabi</h5>                 
                                <p className="card-text" id="sigangGabiPrice">₱50.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="sGabiQTY.value = decQuantity(sGabiQTY)">-</span>
                                    <input type="number" id="sGabiQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="sGabiQTY.value = incQuantity(sGabiQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(sigangGabi, sGabiQTY.value, sigangGabiPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>  
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/shrimp.jpg" className="card-img img-thumbnail"/> 
                            </div>
                            <div className="card-body text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="Sigang">Seafood Sinigang</h5>
                                <p className="card-text" id="SigangPrice">₱50.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text"onclick="sigangQTY.value = incQuantity(sigangQTY)">-</span>
                                    <input type="number" id="sigangQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="sigangQTY.value = incQuantity(sigangQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Sigang, sigangQTY.value, SigangPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>  
                        </div>
                    </div>
                    <br/>
                    <div className="row g-2 m-1 d-flex justify-content-center">
                        
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/karekare.jpg" className="card-img img-thumbnail"/>
                            </div> 
                            <div className="card-body">   
                                <h5 className="card-title text-center" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="Kare">Kare Kare</h5> 
                                <p className="card-text" id="KarePrice">₱50.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="kareQTY.value = decQuantity(kareQTY)">-</span>
                                    <input type="number" id="kareQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="chopQTY.value = incQuantity(kareQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Kare, kareQTY.value, KarePrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/monggo.jpg" className="card-img img-thumbnail"/> 
                            </div>
                            <div className="card-body text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="Munggo">Monggo</h5> 
                                <p className="card-text" id="MunggoPrice">₱40.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="munggoQTY.value = decQuantity(munggoQTY)">-</span>
                                    <input type="number" id="munggoQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="munggoQTY.value = incQuantity(munggoQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Munggo, munggoQTY.value, MunggoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/misua.jpg" className="card-img img-thumbnail"/>
                            </div>
                            <div className="card-body  text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="miswa">Miswa</h5>
                                <p className="card-text" id="miswaPrice">₱30.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="miswaQTY.value = decQuantity(miswaQTY)">-</span>
                                    <input type="number" id="miswaQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="miswaQTY.value = incQuantity(miswaQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(miswa, miswaQTY.value, miswaPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                            <div className="inner">
                                <img src="img/nilaga.jpg" className="card-img img-thumbnail"/>
                            </div> 
                            <div className="card-body text-center">   
                                <h5 className="card-title" style={{background: 'rgba(0, 0, 0, 0.1)'}} id="Laga">Nilaga or Bulalo</h5> 
                                <p className="card-text" id="LagaPrice">₱70.00</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="lagaQTY.value = decQuantity(lagaQTY)">-</span>
                                    <input type="number" id="lagaQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="lagaQTY.value = incQuantity(lagaQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Laga, lagaQTY.value, LagaPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

        {/* <!--Start of Fruits Basket Tab--> */}
        <div className="tab-pane" id="FruitsBasket">
            <h3 className="mb-3 text-center">Fruits Basket</h3>
            <p className="text-center">Select the content of your own basket of delicious fruits. You can give it as a gift to your loved ones or to yourself.</p>
        {/* <!--Accordion--> */}
        <div className="accordion accordion-flush" id="AccordionBasket">

            <div className="accordion-item">
                <h2 className="accordion-header" id="FruitsHeading">
                    <button className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#FruitsBody"
                            aria-expanded="true"
                            aria-controls="FruitsBody">
                            1. Choose your basket size
                    </button>
                </h2>
                
                <div className="accordion-collapse collapse"
                    id="FruitsBody"
                    aria-labelledby="#FruitsHeading"
                    data-bs-parent="#AccordionBasket">
                    <div className="accordion-body">
                        <div className="row g-2 mx-auto d-flex justify-content-center">
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src="img/small.jpg" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="smallBasket" checked/>
                                        <label className="form-check-label" for="smallBasket">
                                            Small
                                        </label>
                                        <p id="smallPrice">₱299.00</p>
                                    </div>
                                </div>    
                            </div>   
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src="img/meduim.jpg" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="medBasket"/>
                                        <label className="form-check-label" for="medBasket">
                                            Medium
                                        </label>
                                        <p id="mediumPrice">₱399.00</p>        
                                    </div>
                                </div>    
                            </div>   
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src="img/large.jpg" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="largeBasket"/>
                                        <label className="form-check-label" for="largeBasket">
                                            Large
                                        </label>
                                        <p id="largePrice">₱599.00</p>       
                                    </div>
                                </div>    
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="Fruits2Heading">
                    <button className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#Fruits2Body"
                            aria-expanded="true"
                            aria-controls="Fruits2Body">
                            2. Choose the contents of your basket
                    </button>
                </h2>
                <div className="accordion-collapse collapse"
                        id="Fruits2Body"
                        aria-labelledby="#Fruits2Heading"
                        data-bs-parent="#AccordionBasket">
                        <div className="accordion-body container">
                            <div className="container text-center">
                                    <p>Small: 7 pcs    </p>
                                    <p>Medium: 10 pcs</p>
                                    <p>Large: 15 pcs</p>
                            </div>
                            <div className="row g-2 m-1 d-flex justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/pineapple.png" style={{borderRadius: '1rem'}}/>
                                    </div>   
                                    <p className="card-title fw-bold text-center">Pineapple</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="pineappleQty.value = decQuantity(pineappleQty)">-</span>
                                            <input type="number" id="pineappleQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="pineappleQty.value = incQuantity(pineappleQty)">+</span>
                                        </div> 
                                    </div><br/>    
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/avocado.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Avocado</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="avoQty.value = decQuantity(avoQty)">-</span>
                                            <input type="number" id="avoQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="avoQty.value = incQuantity(avoQty)">+</span>
                                        </div> 
                                    </div><br/>   
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/apple.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Apple</p>   
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="appleQty.value = decQuantity(appleQty)">-</span>
                                            <input type="number" id="appleQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="appleQty.value = incQuantity(appleQty)">+</span>
                                        </div> 
                                    </div><br/>
                                </div>
                            </div>
                            <div className="row g-2 m-1 d-flex justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/lemon.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Lemon</p>    
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="lemonQty.value = decQuantity(lemonQty)">-</span>
                                            <input type="number" id="lemonQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="lemonQty.value = incQuantity(lemonQty)">+</span>
                                        </div> 
                                    </div><br/>   
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/banana.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Banana</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="bananaQty.value = decQuantity(bananaQty)">-</span>
                                            <input type="number" id="bananaQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="bananaQty.value = incQuantity(bananaQty)">+</span>
                                        </div> 
                                    </div><br/>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/dragonFruit.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Dragon Fruit</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="dragonQty.value = decQuantity(dragonQty)">-</span>
                                            <input type="number" id="dragonQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="dragonQty.value = incQuantity(dragonQty)">+</span>
                                        </div> 
                                    </div><br/>    
                                </div>
                            </div>
                            <div className="row g-2 m-1 d-flex justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/rambutan.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Rambutan</p>    
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="rambutanQty.value = decQuantity(rambutanQty)">-</span>
                                            <input type="number" id="rambutanQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="rambutanQty.value = incQuantity(rambutanQty)">+</span>
                                        </div> 
                                    </div><br/>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/grapes.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Grapes</p>    
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="grapesQty.value = decQuantity(grapesQty)">-</span>
                                            <input type="number" id="grapesQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="grapesQty.value = incQuantity(grapesQty)">+</span>
                                        </div> 
                                    </div><br/>  
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/mango.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Mango</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="mangoQty.value = decQuantity(mangoQty)">-</span>
                                            <input type="number" id="mangoQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="mangoQty.value = incQuantity(mangoQty)">+</span>
                                        </div> 
                                    </div><br/>
                                </div>
                            </div>
                            <div className="row g-2 m-1 d-flex justify-content-center">
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/pear.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Pear</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="pearQty.value = decQuantity(pearQty)">-</span>
                                            <input type="number" id="pearQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="pearQty.value = incQuantity(pearQty)">+</span>
                                        </div> 
                                    </div><br/>   
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/papaya.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Papaya</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="papayaQty.value = decQuantity(papayaQty)">-</span>
                                            <input type="number" id="papayaQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="papayaQty.value = incQuantity(papayaQty)">+</span>
                                        </div> 
                                    </div><br/>    
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                    <div className="inner">
                                        <img src="img/orange.png" style={{borderRadius: '1rem'}}/>
                                    </div>
                                    <p className="card-title fw-bold text-center">Orange</p>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="input-group mb-3 align-center  mt-auto">
                                            <span className="input-group-text" onclick="orangeQty.value = decQuantity(orangeQty)">-</span>
                                            <input type="number" id="orangeQty"  className="form-control text-center bg-white" value="0" min="0" placeholder="0"/>
                                            <span className="input-group-text" onclick="orangeQty.value = incQuantity(orangeQty)">+</span>
                                        </div> 
                                    </div><br/>    
                                </div>
                            </div>
                                <br/>
                                <button className="btn btn-lg" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}  data-bs-toggle="modal" data-bs-target="#FBasket" onclick="printFruitBasket();"><i className="bi bi-cart4"></i> Confirm basket</button>
                            
                        </div> 
                    
                </div>
            </div>
        </div>                        
        </div>
            
                
                {/* <!--Modal--> */}
                <div className="modal fade" id="FBasket" tabindex="-1">
                    <div className="modal-dialog"> 
                        <div className="modal-content">
                        {/* <!--start of modal header--> */}
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="modalTitle">
                                Your Fruits Basket</h5>
                                <button className="btn-close" 
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="close">
                                </button>
                        </div>
                        {/* <!--End of modal header--> */}

                        {/* <!--start of modal body--> */}
                        <div className="modal-body">
                            <p id="basketSize">Your fruits basket size is:</p>
                            <table className="table table-striped" id="BasketTable">
                                <thead>
                                    <th>Quantity</th>
                                    <th>Contents</th>
                                </thead>
                                <tbody id="basketContents"></tbody>
                            </table>
                            <p className="text-end fw-bold" id="price">Total:</p>
                        </div>
                        {/* <!--End of modal body--> */}
                        {/* <!--start of modal footer--> */}
                        <div className="modal-footer">
                            <button className="btn"
                                    type="submit" id="addCart" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                                    <i className="bi bi-cart4"></i> &nbsp;  Add to Cart 
                            </button>
                            <button className="btn"
                                    type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                                    Cancel
                            </button>
                        </div>
                        {/* <!--End of modal footer--> */}
                        </div>
                    </div>
                </div>
                {/* <!--End of Fruits Tab-->     */}
                
                {/* <!--Salad Set Tab--> */}
                <div className="tab-pane" id="SaladSet">
                    <div className="row g-0 m-1 d-flex justify-content-center">
                        <h3 className="mb-3 text-center">Salad Set</h3>
                        {/* <!--Start of Carousel--> */}
                        <div className="col-md-12 text-center">
                            <a className="btn mb-3 mr-1" href="#SaladCarousel" role="button" data-bs-slide="prev" style={{backgroundColor:'#A2DBB7'}}><i className="bi bi-caret-left-square-fill"></i></a>
                            <a className="btn mb-3" href="#SaladCarousel" role="button" data-bs-slide="next" style={{backgroundColor:'#A2DBB7'}}><i className="bi bi-caret-right-square-fill"></i></a>
                        </div>
                        <div className="container d-flex mt-3 mx-0 p-0">
                            <div id="SaladCarousel" className="carousel slide carousel-fade carousel-dark" data-ride="carousel">
                                {/* <!--Images--> */}
                                <div className="carousel-inner w-100">
                                    <div className="carousel-item active">
                                            <div className="row g-2 m-1 d-flex justify-content-center">
                                                <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                    <div className="inner"> 
                                                        <img src="img/ampalayaSalad.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/> 
                                                    </div>                      
                                                    <div className="card-body">  
                                                        <h5 className="card-title" id="ampSalad">Ampalaya Salad</h5>
                                                        <p className="card-text">Includes a large ampalaya, tomato and red onion which is good for 2-3 persons</p>
                                                        <p id="ampSaladPrice">₱100.00</p>
                                                    </div> 
                                                    <div className="card-footer d-flex flex-column justify-content-between">
                                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                                            <span className="input-group-text" onclick="ampSaladQTY.value = decQuantity(ampSaladQTY)">-</span>
                                                            <input type="number" id="ampSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                            <span className="input-group-text" onclick="ampSaladQTY.value = incQuantity(ampSaladQTY)">+</span>
                                                        </div><br/>     
                                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(ampSalad, ampSaladQTY.value, ampSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                    </div>    
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                    <div className="inner"> 
                                                        <img src="img/cucumberSalad.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/> 
                                                    </div>                      
                                                    <div className="card-body"> 
                                                        <h5 className="card-title" id="cucumSalad">Cucumber Salad</h5>
                                                        <p className="card-text">Includes cucumber, tomato and red onion which is good for 2-3 persons</p>
                                                        <p id="cucumSaladPrice">₱100.00</p>
                                                    </div> 
                                                    <div className="card-footer d-flex flex-column justify-content-between">
                                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                                            <span className="input-group-text" onclick="cucumSaladQTY.value = decQuantity(cucumSaladQTY)">-</span>
                                                            <input type="number" id="cucumSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                            <span className="input-group-text" onclick="cucumSaladQTY.value = incQuantity(cucumSaladQTY)">+</span>
                                                        </div><br/>     
                                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(cucumSalad, cucumSaladQTY.value, cucumSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>    
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                    <div className="inner"> 
                                                        <img src="img/EnsaladangTalong.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/>  
                                                    </div>                     
                                                    <div className="card-body">                    
                                                        <h5 className="card-title" id="talongSalad">Ensaladang Talong</h5>
                                                        <p className="card-text">Includes eggplants, tomatoes, red onions which is good for 2-3 persons</p>
                                                        <p id="talongSaladPrice">₱100.00</p>
                                                    </div>     
                                                    <div className="card-footer d-flex flex-column justify-content-between">
                                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                                            <span className="input-group-text" onclick="talongSaladQTY.value = decQuantity(talongSaladQTY)">-</span>
                                                            <input type="number" id="talongSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                            <span className="input-group-text" onclick="talongSaladQTY.value = incQuantity(talongSaladQTY)">+</span>
                                                        </div><br/>     
                                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(talongSalad, talongSaladQTY.value, talongSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                    <div className="inner"> 
                                                        <img src="img/green-salad.jpg" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/>   
                                                    </div>                    
                                                    <div className="card-body">                    
                                                        <h5 className="card-title" id="greenSalad">Green Salad</h5>
                                                        <p className="card-text">Includes red onion, tomatoes, Avocado, cucumber, and lettuce which is good for 2-3 persons</p>
                                                        <p id="greenSaladPrice">₱100.00</p>
                                                    </div>     
                                                    <div className="card-footer d-flex flex-column justify-content-between">
                                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                                            <span className="input-group-text" onclick="greenSaladQTY.value = decQuantity(greenSaladQTY)">-</span>
                                                            <input type="number" id="greenSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                            <span className="input-group-text" onclick="greenSaladQTY.value = incQuantity(greenSaladQTY)">+</span>
                                                        </div><br/>     
                                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(greenSalad, greenSaladQTY.value, greenSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>    
                                    </div>
                                    <div className="carousel-item"> 
                                        <div className="row g-2 m-1 d-flex justify-content-center">
                                                
                                            <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                <div className="inner"> 
                                                    <img src="img/lato.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/>
                                                </div>                       
                                                <div className="card-body">                    
                                                    <h5 className="card-title" id="lato">Lato (Seaweed) Salad</h5>
                                                    <p className="card-text">Includes lato, red onion and tomato which is good for 2-3 persons</p>
                                                    <p id="latoPrice">₱100.00</p>
                                                </div>         
                                                <div className="card-footer d-flex flex-column justify-content-between">
                                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                                        <span className="input-group-text" onclick="latoQTY.value = decQuantity(latoQTY)">-</span>
                                                        <input type="number" id="latoQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                        <span className="input-group-text" onclick="latoQTY.value = incQuantity(latoQTY)">+</span>
                                                    </div><br/>     
                                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(lato, latoQTY.value, latoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                <div className="inner"> 
                                                    <img src="img/MangoTomatoSalad.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/>   
                                                </div>                    
                                                <div className="card-body">                    
                                                    <h5 className="card-title" id="mangoSalad">Mango Tomato Salad</h5>
                                                    <p className="card-text">Includes large green mango, tomatoes, and red onion which is good for 2-3 persons</p>
                                                    <p id="mangoSaladPrice">₱100.00</p>
                                                </div> 
                                                <div className="card-footer d-flex flex-column justify-content-between">
                                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                                        <span className="input-group-text" onclick="mangoSaladQTY.value = decQuantity(mangoSaladQTY)">-</span>
                                                        <input type="number" id="mangoSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                        <span className="input-group-text" onclick="mangoSaladQTY.value = incQuantity(mangoSaladQTY)">+</span>
                                                    </div><br/>     
                                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(mangoSalad, mangoSaladQTY.value, mangoSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                </div>    
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                                <div className="inner"> 
                                                    <img src="img/talbos.png" className="card-img img-thumbnail m-auto" style={{height: '250px'}}/>     
                                                </div>                     
                                                <div className="card-body">                    
                                                    <h5 className="card-title" id="talbosSalad">Kamote Tops (Talbos) Salad</h5>
                                                    <p className="card-text">Includes kamote tops, tomatoes, and red onion which is good for 2-3 persons</p>
                                                    <p id="talbosSaladPrice">₱100.00</p>
                                                </div>        
                                                <div className="card-footer d-flex flex-column justify-content-between">
                                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                                        <span className="input-group-text" onclick="talbosSaladQTY.value = decQuantity(talbosSaladQTY)">-</span>
                                                        <input type="number" id="talbosSaladQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                                        <span className="input-group-text" onclick="talbosSaladQTY.value = incQuantity(talbosSaladQTY)">+</span>
                                                    </div><br/>     
                                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(talbosSalad, talbosSaladQTY.value, talbosSaladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>

                {/* <!--Start of Pantry Essentials--> */}
                <div className="tab-pane" id="Pantry">
                    <div className="row p-1  text-center">
                        <h3 className="mb-3">Pantry Essentials</h3>
                        <p>If you're looking for a gift to your loved ones who love to cook, it's the perfect gift set. You can also have it for your own pantry.</p>
                    </div>
                    <div className="row g-2 m-1 d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 p-2 card">
                            <img src="img/herbs6pieces.png" className="card-img rounded-circle w-75 m-auto"/>                       
                            <div className="card-body text-center">                    
                                <h5 className="card-title" id="setA">Set A</h5>
                                <p id="setAPrice">₱180.00</p>
                                <p className="card-text">Consists of randomly available herbs and spices of 6 variety</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="setAQTY.value = decQuantity(setAQTY)">-</span>
                                    <input type="number" id="setAQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="setAQTY.value = incQuantity(setAQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(setA, setAQTY.value, setAPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-2 card">
                            <img src="img/herbs3pieces.png" className="card-img rounded-circle w-75 m-auto"/>                       
                            <div className="card-body text-center">                    
                                <h5 className="card-title" id="setB">Set B</h5>
                                <p id="setBPrice">₱150.00</p>
                                <p className="card-text">Boxed set of garlic flakes, Paprika and ground pepper.</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="setBQTY.value = decQuantity(setBQTY)">-</span>
                                    <input type="number" id="setBQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="setBQTY.value = incQuantity(setBQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(setB, setBQTY.value, setBPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>    
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-2 card">
                            <img src="img/duo.png" className="card-img rounded-circle w-75 m-auto"/>                       
                            <div className="card-body text-center">                    
                                <h5 className="card-title" id="setC">Set C</h5>
                                <p id="setCPrice">₱75.00</p>
                                <p className="card-text">Perfect Duo of Salt and pepper</p>
                            </div> 
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 align-center  mt-auto"  >
                                    <span className="input-group-text" onclick="setCQTY.value = decQuantity(setCQTY)">-</span>
                                    <input type="number" id="setCQTY"  className="form-control text-center bg-white" value="1" min="0" placeholder="0"/>
                                    <span className="input-group-text" onclick="setCQTY.value = incQuantity(setCQTY)">+</span>
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(setC, setCQTY.value, setCPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <br/>
        {/* <!--End of Nav tabs--> */}
        </div>
    </div>
    )
}
export default BestSellers;