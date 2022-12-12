import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handleEmailBlur = (event) =>{
        console.log(event.target)
        setEmail(event.target.value)
    };

    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value)
    };

    // if(user){
    //     navigate('/shop')
    // }

    const handleUserSignIn = event =>{
        event.preventDefault();
        console.log(email, password);
        // signInWithEmailAndPassword(email, password)
    }


    return (
        <div className="account-page">
        <div className="container">
            <div className="row">
                
                <div className="col-2">
                    <div className="form-container">
                        <div className="from-btn">
                            <span>Log in</span>
                            <form id="loginform" onSubmit={handleUserSignIn}>
                                <input type="email"  onBlur={handleEmailBlur} placeholder="User-email" />
                                <input type="password" onBlur={handlePasswordBlur} placeholder="password" />
                                <input type="submit" className="btn" value='login' />
                                <p>New to the page ? <Link  className="form-link" to='/signup'>Sign up</Link></p>
                            </form>
                            
                            {/* <div classNameName='Google-log-in'>
                                <hr classNameName='indicator' />
                            <button type="submit" className="btn">Log in with google</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;