import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const nevigate = useNavigate()

    const [createUserWithEmailAndPassword, user, loading, sinError] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWitGoogle, g_user, g_loading, g_error] = useSignInWithGoogle(auth);


    const handleEmailBlur = (event) =>{
        setEmail(event.target.value)
    };

    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value)
    };

    const handleConfirmPasswordBlur = (event) =>{
        setConfirmPassword(event.target.value)
    };
    
    if(g_error || sinError){
        console.log(sinError);
    }
    if(user || g_user){
        console.log(user, g_user)
        nevigate('/home')
    }

    const handleCreateUser = (event) =>{
        event.preventDefault();
        console.log(email, password, confirmPassword);
        // setEmail('')
        if(password !== confirmPassword){
            setError('Password must be 8 character or long');
            return;
        }
        if(password.length < 6){
            setError("Password doesn't match")
        }
        createUserWithEmailAndPassword(email,password)
    }
    // const handleGoogleLogin = () =>{
    //     signInWitGoogle()
    // }

    return (
        
        <div className="account-page">
        <div className="container">
            <div className="row">
            
                
                <div className="col-2">
                    <div className="form-container">
                        <div className="from-btn">
                            <span>Sign Up</span>
                            <form onSubmit={handleCreateUser} id="regFrom">
                                <input type="email" onBlur={handleEmailBlur} placeholder="User-email" />
                                <input type="password" onBlur={handlePasswordBlur} placeholder="User-password" />
                                <input type="password" onBlur={handleConfirmPasswordBlur} placeholder="confirm-password" />
                                <button type="submit" className="btn">SignUp</button>
                                <p className='errorMgs' style={{color: "red"}}>{error}</p>
                                <p id='navigateLink'>Alredy have account <Link  className="form-link" to='/login'>Login</Link></p>
                          
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;