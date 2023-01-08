import { Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';

function Registration(){

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCpass] = useState();
  const [firstname, setFirstname] = useState();
  const [middlename, setMiddlename] = useState();
  const [lastname, setLastname] = useState();
  const [dob, setDob] = useState();
  const [cp_num, setCpnum] = useState();
  const [address_1, setAddress1] = useState();
  const [address_2, setAddress2] = useState();
  const [brgy, setBrgy] = useState();
  const [municipality, setMunicipality] = useState();
  const [province, setProvince] = useState();
  const [zipcode, setZipcode] = useState();
  const [registration, setRegistration] = useState([]);
  useEffect(()=> {
    const url = 'http://localhost/farmers_db/db.php'; //link to db
         axios.get(url).then((response)=>{
            setRegistration(response.data);
        
     })
},[]) //this
const submitBtn = function(e){
  e.preventDefault();
  let getData = new FormData();
  getData.append('email', email);  
  getData.append('pass', pass);  
  getData.append('cpass', cpass);
  getData.append('firstname', firstname);  
  getData.append('middlename', middlename);  
  getData.append('lastname', lastname);  
  getData.append('dob', dob);
  getData.append('cp_num', cp_num);
  getData.append('address_1', address_1);
  getData.append('address_2', address_2);
  getData.append('brgy', brgy);
  getData.append('municipality', municipality);
  getData.append('province', province);
  getData.append('zipcode', zipcode);

  getData.append('function', 'insert');
  axios({
    method: 'POST', //get / post
    url:    'http://localhost/farmers_db/db.php', //db link
    data: getData,
    config: 'Content-Type="multipart/form-control"'  //data to be transferred
}).then(function (response){
    alert("Successfully Registered!");
    const url = 'http://localhost/farmers_db/db.php'; //link to db
         axios.get(url).then((response)=>{
            setRegistration(response.data);
         console.log(registration);
     })

    }).catch(function (error){
      alert("Wrong username/password");
      console.log(error);
  });
        
        
}
  return(
    <div>
<section className="container mt-5" id="formSection">
    
    <form className="container border border-secondary rounded p-4" method="" encType="multipart/form-data">
        <div className="accordion accordion-flush" id="RegisterAccount">
  
            <div className="accordion-item">
                <h2 className="accordion-header" id="RegHeading">
                    <button className="accordion-button fw-bold" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#RegBody"
                            aria-expanded="true"
                            aria-controls="RegBody">
                            Log in details
                    </button>
                </h2>
                
                <div className="accordion-collapse"
                    id="RegBody"
                    aria-labelledby="#RegHeading"
                    data-bs-parent="#RegisterAccount">
                        <div className="accordion-body text-justify">
                            <div id="alertUser"></div>
                            <div className="input-group" >
                                <label className="input-group-text" htmlFor="form3Example1c">Email address:</label>
                                <input type="email" name="email" id="form3Example1c" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div><br/>
                            <div className="input-group" >
                                <label  className="input-group-text" htmlFor="form3Example2c">Password:</label>
                                <input type="password" className="form-control"  name="pass"  id="form3Example2c"value={pass} onChange={(e)=>setPass(e.target.value)}/>
                                <label  className="input-group-text" htmlFor="form3Example3c">Confirm Password:</label>
                                <input type="password" className="form-control" name="cpass" id="form3Example3c" value={cpass} onChange={(e)=>setCpass(e.target.value)}/>
                            </div><br/>
                        </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="PersonalInfo">
                    <button className="accordion-button fw-bold collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#PersonalInfoBody"
                            aria-expanded="true"
                            aria-controls="PersonalInfoBody">
                            Personal Information
                    </button>
                </h2>
                
                <div className="accordion-collapse collapse"
                    id="PersonalInfoBody"
                    aria-labelledby="#PersonalInfo"
                    data-bs-parent="#RegisterAccount">
                        <div className="accordion-body text-justify">
                            <div className="input-group" >
                                <label className="input-group-text" htmlFor="Example4c">First Name:</label>
                                <input type="text" className="form-control" id="Example4c" name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                                <label className="input-group-text" htmlFor="form3Example5c" >Middle Initial:</label>
                                <input type="text" className="form-control" id="form3Example5c" name="middlename" value={middlename} onChange={(e)=>setMiddlename(e.target.value)}/>
                                <label className="input-group-text" htmlFor="form3Example6c">Last Name:</label>
                                <input type="text" className="form-control" id="form3Example6c" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                            </div><br/>
                            <div className="input-group" >
                                <label  className="input-group-text" htmlFor="form3Example7c">Date of Birth:</label>
                                <input type="date" className="form-control" id="form3Example7c"name="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                                <label className="input-group-text" htmlFor="form3Example8e1c">Cellphone number:</label>
                                <input type="tel" className="form-control" id="form3Example8e1c" name="cp_num" 
                                        value={cp_num} onChange={(e)=>setCpnum(e.target.value)} placeholder="09XXXXXXXXX" 
                                        maxLength="11" minLength="11" />
                            </div><br/>
                            <div className="border-top">
                                <p className="fw-bold" style={{fontSize: "15px"}}>Address</p>
                            </div>
                            <div className="input-group" >
                                    <label htmlFor="form3Example9c" className="input-group-text">House Number:</label>
                                    <input type="text" className="form-control" id="form3Example9c" name="address_1" placeholder="Address Line 1" value={address_1} onChange={(e) => setAddress1(e.target.value)}/>
                                    <label htmlFor="form3Example10c" className="input-group-text">Street:</label>
                                    <input type="text" className="form-control" id="form3Example10c" name="address_2" placeholder="Address Line 2" value={address_2} onChange={(e) => setAddress2(e.target.value)}/> 
                            </div><br/>
                            <div className="input-group" >
                                <label htmlFor="form3Example11c" className="input-group-text">Barangay:</label>
                                <input type="text" className="form-control" id="form3Example11c" name="brgy" value={brgy} onChange={(e)=>setBrgy(e.target.value)}/>
                                <label htmlFor="form3Example13c" className="input-group-text">Municipality</label>
                                <input type="text" className="form-control" id="form3Example13c" name="municipality" value="municipality" onChange={(e)=>setMunicipality(e.target.value)}/>
                            </div><br/>
                            <div className="input-group" >
                                <label htmlFor="form3Example14c"  className="input-group-text">Province:</label>
                                <input type="text" className="form-control" id="form3Example14c" name="province"value={province} onChange={(e)=>setProvince(e.target.value)}/>
                                <label htmlFor="form3Example15c"  className="input-group-text">Postal Code:</label>
                                <input type="number" className="form-control" name="zipcode" id="form3Example15c" minLength="4" 
                                       value={zipcode} onChange={(e)=>setZipcode(e.target.value)} maxLength="4"/> 
                            </div><br/>
                        </div>
                </div>
                </div>
            </div>
        <br/>
        
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="tandC"/>
            <label className="form-check-label" htmlFor="tandC">I agree with the <Link to="">Terms and Conditions</Link>.</label>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="privacy"/>
            <label className="form-check-label" htmlFor="privacy">I agree with the <Link to="">Privacy Policy</Link>.</label>
        </div>
        <br/>
        <input type="submit" className="btn text-capitalize" name="submit"  style={{backgroundColor: "#A2DBB7",
                                                               borderRadius: "5px", 
                                                                boxShadow: "5px 5px grey"}}
                onClick={submitBtn}                                         /><br/><br/>
        <Link to="Login.html"><input type="button" className="btn btn-link text-muted" style={{textDecoration: "none"}} value="Already have an account? Log in here."/></Link>
    </form>
</section>   

    </div>
  )
}

export default Registration;