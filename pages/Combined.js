import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import banner from "../img/fruitsPage.png"
// import All from '../components/AllProduce'

function Produce(){
    const IndicatorShift = function(e){
        let currentActive, activeIndex;
        let indicator = e.target.id;
        let container = document.querySelector('.indicator');
        let link = container.children;
        
        for (let i = 0; i < link.length; i++) {
            //check which nav-link is active
            if (link[i].querySelector('.active')){
                currentActive = link[i].querySelector('.active');
                activeIndex = i;
                currentActive.classList.remove('active');
            
            }
        }
        //compare current selection with the current active link then change the active one
        if (indicator !== link[activeIndex].querySelector('.nav-link')){
            
            switch(indicator){
                case "Vegetables":
                    link[1].querySelector('.nav-link').classList.add("active");
                break;
                case "Fruits":
                    link[2].querySelector('.nav-link').classList.add("active");
                break;
                case "Spices and Herbs":
                    link[3].querySelector('.nav-link').classList.add("active");
                break;
                case "Best Sellers":
                    link[4].querySelector('.nav-link').classList.add("active");
                break;
                default:
                    link[0].querySelector('.nav-link').classList.add("active");
                break;
            }
        }
    }
    return(
        <section>
            <Banner img={banner}/>
            <div className="container-fluid">
                {/* <!--Navbar to the top for Product Categories--> */}
                <ul className="indicator nav flex-row shadow" style={{backgroundColor:'#A2DBB7'}}>
                    <li className="nav-item border">
                        <Link className="nav-link active" id="All" to="/all" style={{color:'#073418'}} onClick={IndicatorShift}>All</Link>
                    </li>
                    <li className="nav-item border">
                        <Link className="nav-link" id="Vegetables" to="/veggies" style={{color:'#073418'}} onClick={IndicatorShift}>Vegetables</Link>
                    </li>
                    <li className="nav-item border" >
                        <Link className="nav-link" id="Fruits" to="/fruits" style={{color:'#073418'}} onClick={IndicatorShift}>Fruits</Link>
                    </li>
                    <li className="nav-item border">
                        <Link className="nav-link" id="SHerbs" to="/sherbs" style={{color:'#073418'}} onClick={IndicatorShift}>Spices and Herbs</Link>
                    </li>
                    <li className="nav-item border">
                        <Link className="nav-link" id="BestSellers" to="/best" style={{color:'#073418'}} onClick={IndicatorShift}>Best Sellers</Link>
                    </li>
                </ul>
            </div>
            <br></br>

        </section>
    )
}
export default Produce;