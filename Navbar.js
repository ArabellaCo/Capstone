import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import cartCounter from 'react';

function toggleCart(){
    let cartContainer = document.getElementById("cartBox");
   //  cartContainer.style.display = "block";
       cartContainer.classList.toggle("active");
       cartCounter();
   }

function Navbar(){
    
    return(
        <div >
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="rounded-circle border border-2" style={{width:"75px"}} alt='...'/>
            </Link>
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
                    <li className="nav-item">
                        <Link className="nav-link" to="/produce" style={{color:'#073418'}}>Farm Produce</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"  style={{color:'#073418'}}>My Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={{color:'#073418'}}>About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help"  style={{color:'#073418'}}>Help</Link>
                    </li>
                </ul>
            </div>
            <form className="searchCart d-flex ms-auto" role="search">
                <input type="text" id="userInput" className="form-control" placeholder="Search" aria-label="search"/>
                <button type="submit" className="btn btn-outline" style={{backgroundColor:'#073418',color:'#A2DBB7'}}>Search</button>
            </form>  
             
            <div className="cartNav px-2 justify-content-center me-3" style={{float:'right'}}>
                <div className="cartCounter"></div>
                    <Link onclick={{toggleCart}} className="nav-link" to="/cart" style={{color:'#073418', backgroundColor:'Transparent', backgroundRepeat:'no-repeat', border: 'none',cursor:'pointer', overflow: 'hidden', outline:'none'}}><i className="bi bi-cart4" style={{fontSize:'30px'}}></i></Link>
            </div>
            </div>
        </nav>
        </div>
    )
}


export default Navbar;