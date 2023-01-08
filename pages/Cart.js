// import {useState, useEffect} from 'react';
// import axios from 'axios';
function Cart(){
    // const [product, setProduct] = useState();
    // const [quantity, setQuantity] = useState();
    // const [unit_price, setUnitPrice] = useState();
    // const [subtotal, setSubtotal] = useState();
    // const [products,setProducts] = useState();
    // useEffect(() => {
    //     const url = 'http://localhost/farmersHub/db.php';
    //     axios.get(url).then((response) => {
    //         setProduct(response.data);
    //         console.log(products);
    //     })
    // }, [])

    let cart = {
    };
    
    
    // toggle shopping cart visibility
    function toggleCart(){
        let cartContainer = document.getElementById("cartBox");
        
           cartContainer.classList.toggle("active");
           
           displayCartItems();
       }
    
    //save content  inside local storage
    function setLSContent(){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    function getLSContent() {
        // get contents from local storage.
        // if nothing is there, create an empty array
        const lsContent = JSON.parse(localStorage.getItem("cart")) || [];
        return lsContent;
      }
    
    //add to cart button function
    function addToCart(addedItem, addedQuantity, addedPrice){
        
        let subtotal;
        addedItem = addedItem.innerText;
        addedPrice = addedPrice.textContent;
        addedQuantity = Number(addedQuantity);
        
        subtotal = computeSubtotal(addedPrice, addedQuantity);
    
        let isProductInCart = false;
    
        cart = getLSContent();
    
        // to avoid user adds the same product twice, check if
        // the product is not in local storage already before adding it
       
        for (let i=0; i < cart.length; i++){
          if (cart[i].item == addedItem){
            isProductInCart = true;
            alert("This item is already in the cart.")
            break;
          }
        }
    
        if (!isProductInCart){
            //push the variables into the object items
            cart.push({item: addedItem, 
                    quantity: addedQuantity, 
                    price: addedPrice, 
                    subtotal: subtotal});
    
            //store the quantity and item name in local storage
            setLSContent();
    
            // //update the cart counter when an item is added
            cartCounter();
            // displayCartItems();
            addItems(addedItem, addedQuantity, addedPrice, subtotal);
        }
    }
    function addItems(item, qty, price, sub){
        cart = getLSContent();
        console.log (cart);
        console.log (cart.length);
        
        let table = document.getElementById("cartContents");
        
        let row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
         
        cellID = item.replace(/ /g, ""); 
        console.log(cellID);
        cell1.innerHTML = `<p id="${cellID}Table">${item}</p>`;
        cell2.innerHTML = `<p id="${cellID}PriceCell">${price}</p>`;
        cell3.innerHTML = `
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" style="width:10px;" onclick="${cellID}Cell.value = decCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">-</span>
                <input type="number" id="${cellID}Cell" class="text-center form-control" value="${qty}" style="width:30px; border-color:#A2DBB7;">
                <span class="input-group-text text-start"  style="width:12px;" onclick="${cellID}Cell.value = incCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">+</span>
            </div>`;
        cell4.innerHTML = `<p id="${cellID}CellSubtotal">${sub}</p>`;
        cell5.innerHTML = `<button class="btn rounded-0"><i class="bi bi-trash3-fill" style="color:#073418;" onclick="deleteItemRow(${cellID}Table)"></i></button>`;
            console.log(cell1);
                console.log(cell2);
                console.log(cell3);
                console.log(cell4);
                console.log (table.rows.length);        
           
    }
    
    
    //compute the subtotal (price times quantity) and return its value
    function computeSubtotal(addedPrice, addedQuantity) {
        //remove the ₱ from the text and transform the price string into a number ;
        numPrice = addedPrice.replace(/(\₱)/, "");
        numPrice = Number(numPrice);
    
        subtotalAmount = (numPrice * addedQuantity).toFixed(2);
    
        subtotal = `₱${subtotalAmount}`;
    
        return subtotal;
    }
    
    //update the cart counter when an item is added or deleted
    function cartCounter(){
        let current = 0;
        let counter = document.querySelector(".cartCounter");
        cart = getLSContent();
        if (cart.length === 0) {
            
            counter.innerText = 0;
        }
        else {
            for (var i = 0; i < cart.length; i++) {
                current = current + Number(cart[i].quantity);
            }
            // cart.forEach(function(updateCounter){
            //     current += updateCounter.quantity;
            // });
            counter = document.querySelector(".cartCounter");
            console.log(counter);
            counter.innerText = current;
        }
    }
    //display the products added to the cart in a table
    function displayCartItems(){
        cart = getLSContent();
        console.log (cart);
        console.log (cart.length);
        
        let table = document.getElementById("cartContents");
        
        if (cart.length > 0 && table.rows.length == 1) {
            for (let i=0; i < cart.length; i++){
                let row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                //removes spaces between two word item name to be used as an ID for the cells
                console.log(cart[i].item);
                cellID = cart[i].item.replace(/ /g, ""); 
                console.log(cellID);
                cell1.innerHTML = `<p id="${cellID}Table">${cart[i].item}</p>`;
                cell2.innerHTML = `<p id="${cellID}PriceCell">${cart[i].price}</p>`;
                cell3.innerHTML = `
                    <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span class="input-group-text" style="width:10px;" onclick="${cellID}Cell.value = decCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">-</span>
                        <input type="number" id="${cellID}Cell" class="text-center form-control" value="${cart[i].quantity}" style="width:30px; border-color:#A2DBB7;">
                        <span class="input-group-text text-start"  style="width:12px;" onclick="${cellID}Cell.value = incCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">+</span>
                    </div>`;
                cell4.innerHTML = `<p id="${cellID}CellSubtotal">${cart[i].subtotal}</p>`;
                cell5.innerHTML = `<button class="btn rounded-0"><i class="bi bi-trash3-fill" style="color:#073418;" onclick="deleteItemRow(${cellID}Table)"></i></button>`;
                console.log(cell1);
                console.log(cell2);
                console.log(cell3);
                console.log(cell4);
                console.log (table.rows.length);
            }       
        }
        
        else if (cart.length == 0) {
            let isEmpty = document.getElementById("cartEmpty").textContent;
            alert(isEmpty);
        }
        // computeTotal();
    }
    
    //function to delete item in cart
    function deleteItemRow(productCell){
        cart = getLSContent();
        let itemChoice = productCell.innerText;
        console.log(itemChoice);
        var index, table = document.getElementById("cartContents");
        for (var i = 0; i < table.rows.length; i++){
            table.rows[i].onclick = function(){
                index = this.rowIndex;
                table.deleteRow(index);
                console.log(index);
            }
        }
    
        for (var i = 0; i < cart.length; i++){
            if (cart[i].item === itemChoice) {
                cart.splice(i, 1);
            }
        }
        setLSContent(cart);
        cartCounter();
    }
    
    //function to increment quantity
    function incCellQuantity(input, sub, priceCell){
        let inputNum = Number(input.value);
        inputNum += 1;
        priceCell = priceCell.innerText;
        
        sub.innerText = computeSubtotal(priceCell, inputNum);
        return inputNum;
        
    }
    //function to decrement quantity
    function decCellQuantity(qtyInput, subT, cellPrice){
        let qty = Number(qtyInput.value);
        if (qty > 1) {
           qty -= 1;
           cellPrice = cellPrice.innerText;
        
            subT.innerText = computeSubtotal(cellPrice, qty);
        }
        return qty;
        
    }
    
    function clearCart(){
        // clear all products from cart (and local storage)
    
        // retrieve list of products from LS
        cart = getLSContent();
        // empty array in local storage
        cart.length = 0;
        // update local storage
        setLSContent(cart);
        cartCounter();
        deleteRows();
        // location.reload;
    
    }
    
    function deleteRows() {
        
        let table = document.getElementById("cartContents");
        var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    }
    
    function computeTotal(){
        cart = getLSContent();
        let total;
    
        for (var i = 0; i <= cart.length; i++) {
            sub = cart[i].subtotal;
            total = total + sub;
        }
        document.getElementById("total-price").innerHTML = `₱${total}.toFixed(2)`;
    }
    
    //add to cart button function for the modal
    function addBasketToCart(addedItem, addedQuantity, addedPrice){
       
        let subtotal;
            
        subtotal = addedPrice;
    
        let isProductInCart = false;
    
        cart = getLSContent();
    
        // to avoid user adds the same product twice, check if
        // the product is not in local storage already before adding it
        
        for (let i=0; i < cart.length; i++){
          if (cart[i].item == addedItem){
            isProductInCart = true;
            alert("This item is already in the cart.")
            break;
          }
        }
    
        if (!isProductInCart){
            //push the variables into the object items
            cart.push({item: addedItem, 
                    quantity: addedQuantity, 
                    price: addedPrice, 
                    subtotal: subtotal});
    
            //store the quantity and item name in local storage
            setLSContent();
    
            // //update the cart counter when an item is added
            cartCounter();
            displayCartItems();
    
        }
            
    }

    return (
        <div>
    <div className="container-fluid" style={{backgroundColor: '#F8FEFA'}}>
        <div className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="index.html">
                        <img src="img/logo.png" alt="logos" className="rounded-circle border border-2" style="width:75px;"/>
                    </a>
                    <button className="navbar-toggler"
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#navbarMark" 
                                    aria-controls="navbarMark" 
                                    aria-expanded="false" 
                                    aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                            <div className="collapse navbar-collapse" id="navbarMark">
                                <ul className="navbar-nav text-uppercase">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="Products.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:#073418;">Farm Produce</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="Fruits.html">Fruits</a></li>
                                            <li><a className="dropdown-item" href="Veggies.html">Vegetables</a></li>
                                            <li><a className="dropdown-item" href="SHerbs.html">Spices and Herbs</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="BestSellers.html"  style={{color:'#07341'}}>Best Sellers</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="OnSale.html"  style={{color:'#073418'}}>On Sale</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="Login.html"  style={{color:'#073418'}}>My Account</a>
                                    </li>
                                </ul>
                                <form className="searchCart d-flex ms-auto" role="search">
                                    <div className="cartNav px-2 justify-content-center me-3" style={{float:'right'}}>
                                    <div className="cartCounter">0</div>
                                    <a className="nav-link" href="Cart.html"  style={{color:'#073418'}}>
                                        <i className="bi bi-cart4" style={{fontSize:'30px'}}></i></a>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search" aria-label="search"/>
                                    <button type="submit" className="btn btn-outline" style={{backgroundColor: '#073418', color: '#A2DBB7'}}>Search</button>
                                </form>                            
                            </div>
        </div>
    </div>
 
{/* <!--Start of Shopping Cart section--> */}
<section>
<p className="display-6 text-center text-uppercase" style={{color: '#073418', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>Shopping Cart</p>
<div className="container-fluid" id="cartBox">
    <table className="table table-hover table-striped" id="cartContents">
        <thead>
            
            <tr>
                <th scope="col" >Image</th>
                <th scope="col" >Product</th>
                <th scope="col" >Price</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" >Subtotal</th>
                <th scope="col" className="text-center"></th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src="assets/img/sauna package.png" style={{width:'100px', height: '50px'}} className="align-self-center"/>
                </td>
                <td>Sauna Package gift card</td>
                <td>₱500.00</td>
                <td>
                    <div className="input-group mb-3 align-center  mt-auto">
                        <span className="input-group-text">-</span>
                        <input type="number" className="text-center form-control" placeholder="2" style={{width:'35px'}}/>
                        <span className="input-group-text">+</span>
                    </div>
                </td>
                <td>₱1000.00</td>
                <td><button className="btn rounded-0"><i className="bi bi-trash3-fill" style={{color:'#073418'}}></i></button></td>
              </tr>
              <tr>
                <td colSpan="6" className="text-end"><button className="btn btn-sm shadow text-uppercase disabled" style={{backgroundColor: '#A2DBB7', fontFamily: 'Poppins', fontFamily:'sans serif'}}>Remove all</button></td>
            </tr>
            </tbody>
        </table>
              {/* </tr> -->
        </tbody>
        </table>
        <br><br>
    </div>
    
    <!-- <div className="container border shadow-sm p-1">
        <p className="text-center fw-bold">Your cart is empty! Add some items to checkout.</p>
    </div><br> --> */}
    </div>
    <hr/>
    <div className="container-fluid">
        <div className="row">
            <div className="col ms-3">                
                <label>Special Instructions to the Seller:</label><br/>
                <textarea className="border shadow-sm p-1" rows="5" cols="45" style={{resize:'none'}}></textarea>
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
                                Total
                            </th>
                            <th id="totalPrice">₱0.00</th>
                        </tr>
                            <tr className="text-end">
                            <td colSpan="2"><a href="CheckOut.html" role="button" className="btn btn-sm shadow text-uppercase" style={{backgroundColor: '#A2DBB7', fontFamily: 'Poppins', fontFamily: 'sans serif'}}>Proceed to checkout</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div><br/>
    <div className="container-fluid"></div>    
    <br/>
    <br/>
    <br/>
    {/* <!--Item Suggestions--> */}
    <div className="container d-sm-block text-center">
        <p className="h4" style={{background: 'rgba(0, 0, 0, 0.1)'}}>Items you might like</p>
        <div className="row g-2">
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                    <img src="img/Ulam.png" alt="Ulams" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                  
                        <h5 className="card-title">Ulam Bundles</h5>
                        <a href="BestSellers.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                    <img src="img/fruitBasket.jpg" alt="basketFruit" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                    
                        <h5 className="card-title" >Fruits Basket</h5>
                        <a href="BestSellers.html#FBContent" className="btn mt-auto" style={{backgroundColor: '#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color: '#073418'}}> 
                    <img src="img/salad.jpg" alt="salads" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                   
                        <h5 className="card-title">Salad Set</h5>
                        <a href="BestSellers.html#SaladSet" className="btn mt-auto" style={{backgroundColor: '#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color: '#073418'}}> 
                    <img src="img/pantry.png" alt="pantries" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                 
                        <h5 className="card-title">Pantry Essentials</h5>
                        <a href="BestSellers.html#Pantry" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--End of Shopping Cart section--> */}
<br/>

{/* <!--Modal--> */}
<div className="modal fade" id="confirmCO" tabindex="-1">
    <div className="modal-dialog"> 
    {/* <!--dialog box--> */}
        <div className="modal-content">
        {/* <!--start of modal header--> */}
        <div className="modal-header">
            <h5 className="modal-title text-center" id="modalTitle">
                Confirm Check-out</h5>
                <button className="btn-close" 
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="close">
                </button>  
                {/* <!--X button sa dialog box--> */}
        </div>
        {/* <!--End of modal header--> */}

        {/* <!--start of modal body--> */}
        <div className="modal-body">
            <p >Already have an account? <a href="Login.html">Log in here</a></p>
            <br/>
            <p Want to create an account> <a href="CustRegistration.html">Register here</a></p> 
            <br/>
            <p>If you'd like to proceed to check-out without an account click Proceed.</p>
            
            <a href="CheckOut.html" className="text-end m-auto p-3"><button className="btn"
                    style={{backgroundColor: '#A2DBB7', borderRadius: '5px', boxShadow: '5px 5px grey'}}>
                    Proceed
            </button></a>
        </div>
         {/* <!--End of modal body--> */}
        </div>
    </div>
</div>

{/* <!-- scroll to top button --> */}
<button onclick="backToTop()" id="scrollUp"><i className="bi bi-arrow-up"></i></button>


        </div>
    )
}
export default Cart;