import { useEffect , useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

function Login(){
    const [email, setUsername] = useState();
    const [password, setPassword] = useState();
    const [db, setDb] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'http://localhost/farmers_db/db.php'
        axios.get(url).then((response) =>{
            setDb(response.data);
            db.map((val)=>{
                return(
                    console.log(val.email)
                )
            })
        })
    },[])
    const submitBtn = function (e){
        e.preventDefault();
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("password").value);
    
        let getData = new FormData();
        axios({
            method: 'POST', //get / post
            url:    'http://localhost/farmers_db/db.php', //db link
            data: getData,
            config: 'Content-Type="multipart/form-control"'  //data to be transferred
        }).then(function(){
            const url = 'http://localhost/farmers_db/db.php'
            axios.get(url).then((response) =>{
                setDb(response.data);
                db.map((val)=>{
                    if ((val.email) === (document.getElementById('email').value) && (val.pass) === (document.getElementById('password').value)) {
                        return(
                            alert ("Successfully Logged in"),
                            navigate('/')
                        )
                    } 
                         
                })
            }) 
        })
    }
    

    
    return (
        
    <section className="container mt-2 w-25">
        
    
        <p className="h4  text-center">Login | 
            <Link type="button" 
                className="text-muted" 
                to="/registration"
                style={{textDecoration:'none'}}>Register
            </Link>
        </p>
        <br/>
        <br/>

        <div className="mb-3">
        <form className="logIn container border border-secondary rounded p-4" name="ValidForm" action="" 
            style={{
                    padding: "5rem 2.5rem",
                    borderRadius: "1rem",
                    border: "1px solid transparent",
                    backdropFilter: "blur (1rem)",
                    boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0, 0.5)",
                    borderTopColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderLeftColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderBottomColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderRightColor: "rgba(225, 225, 225, 225, 0)"
            }}>

            {/* <div onLoad={document.form.text.focus()}> */}
            <div className="mail">

            <label htmlFor="uname" className="form-label">Email address</label>
            <input type="text" name='email' id='email' className="form-control" placeholder="example@gmail.com" 
                   value={email} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <br/>

            <div className="mb-3">
                <label htmlFor="psw" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={password} 
                        onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="Remember"/>
                <label className="form-check-label"  htmlFor="Remember">Remember me</label>
            </div>
            <br/>

            <input type="submit" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', 
            boxShadow:'5px 5px grey'}} value="Login" onClick={submitBtn}/>

            <button type="button" className="btn btn-link text-muted" style={{textDecoration:'none', marginLeft: '80%'}} 
            data-bs-toggle="modal" data-bs-target="#forgotPw">Forgot password</button>
            
            {/* </div> */}
        </form>
        </div>

        {/* <!--Modal--> */}
        <div className="modal fade" id="forgotPw" tabIndex="-1">
            <div className="modal-dialog"> 
                <div className="modal-content">
                {/* <!--start of modal header--> */}
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="modalTitle">
                        Forgot Password</h5>
                        <button className="btn-close" 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="close">
                        </button>  
                </div>
                {/* <!--End of modal header--> */}
                {/* <!--start of modal body--> */}
                <form name="ValidFormModal"> 
                <div className="modal-body">
                    <p className="fst-italic">Input your email address so we can send you a link to reset your password.</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="modalEmailUser">Email address:</span>
                        <input type="email" name="ValidForgetPass" id="modalemail" className="form-control"/>
                    </div>
                </div>
                {/* <!--End of modal body--> */}
                {/* <!--start of modal footer--> */}
                <div className="modal-footer">
                    <button className="btn" 
                            type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                            OK
                    </button>

                </div>
                </form>

                {/* <!--End of modal footer--> */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default Login;