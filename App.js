import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Back2Top from './components/Back2Top';
import Login from './pages/Login';
import Home from './pages/Home';
import Produce from './pages/Combined';
import About from './pages/About';
import Help from './pages/Help';
import FarmerPartner from './pages/FarmerPartner';
import SellerCenter from './pages/SellerCenter';
import Veggies from './components/Veggies';
import All from './components/AllProduce';
import Fruits from './components/Fruits';
import SHerbs from './components/Sherbs';
import BestSellers from './components/BestSellers';
import Registration from './pages/Registration';
import Check from "./pages/Check";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <div className="App">
    <Navbar />
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/produce" element={<Produce/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/cart" element={<Check/>} />   
      <Route path="/" element={<CheckOut/>} /> 
      <Route path="/farmerPartner" element={<FarmerPartner/>} />
      <Route path="/veggies" element={<Veggies/>} />
      <Route path="/all" element={<All/>} />
      <Route path="/fruits" element={<Fruits/>} />
      <Route path="/sherbs" element={<SHerbs/>} />
      <Route path="/best" element={<BestSellers/>} />
      <Route path="/registration" element={<Registration/>} /> 
      <Route path="/sellerCenter" element={<SellerCenter/>} />
    </Routes>
    </div>
    <Back2Top />
    <Footer />
    </div>
  );
}

export default App;
