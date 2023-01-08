import cartCounter from 'react';
import './CheckOut';

function toggleCart(){
    let cartContainer = document.getElementById("cartBox");
   //  cartContainer.style.display = "block";
       cartContainer.classList.toggle("active");
       cartCounter();
   }

function CheckOut() {
    return (
        <div>
            
            {/* <!--Navigation Bar--> */}
            <div className="container-fluid" style={{backgroundColor:"#F8FEFA"}}>
                <div className="navbar navbar-expand-md">
        
                    <div className="cartNav px-2 justify-content-center me-3" style={{float:"right;"}}>
                        <div className="cartCounter"></div>
                        <href className="nav-link" style={{color:"#073418"}}>
                            <i onclick={{toggleCart}} className="bi bi-cart4" style={{fontSize:"30px;"}}></i></href>
                        {/* <!--Start of Shopping Cart section--> */}
                        <div className="shoppingCartContainer" id="cartBox">
                            <table className="table table-hover table-striped" id="cartContents">
                                <thead>
                                    <tr>
                                        <th scope="col" >Product</th>
                                        <th scope="col" >Price</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" >Subtotal</th>
                                        <th scope="col" className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody id="cartContentsBody"></tbody>
                            </table>
                            <p className="total-container" id="total-price"></p>
                            <button type="submit" className="btn btn-sm text-uppercase" style={{backgroundColor: "#073418", color:"#A2DBB7", textDecoration:"none"}}>Checkout</button>
                            <button className="btn btn-sm shadow text-uppercase" style={{backgroundColor: "#073418", color:"#A2DBB7"}} onclick="clearCart();">Remove all</button>
                            <p id="cartEmpty" style={{display:"none;"}}>Your cart is empty.</p>
                        </div>
                    </div>
                </div>
            </div>

     
                  </div>
                 
      
    )
}
export default CheckOut;