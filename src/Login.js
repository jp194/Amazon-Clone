import { Email } from '@material-ui/icons';
import React, {useState} from 'react';
import {Link,useHistory} from  'react-router-dom';
import { auth } from './firebase';
import './login.css';


function Login() {
    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const login= (event)=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
          .then((auth)=>{
             history.push('/');
          })
          .catch(e=>alert(e.message));
    }

    const register= (event)=>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
       .then(auth=>{
        history.push('/');
       })
       .catch(e=>alert(e.message));
    }
    return (
        <div className="login">
             <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
         
         <div className="login_container">
             <h1>Sign in</h1>
         <form>
             <h5>E-mail</h5>
             <input onChange={event =>setEmail(event.target.value)} value={email}  type="text" />
             <h5>Password</h5>
             <input  onChange={event =>setPassword(event.target.value)} value={password} type='password' />
          
             <button onClick={login} type="submit" className="login_signin">Sign in</button>
         </form>
         
         <p>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            <button onClick={register}  className="login_register">Create Account</button>    


         </div>

        </div>
    )
}

export default Login;
