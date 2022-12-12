import React, { useState } from 'react';
import './Navbar.css'
import logo from"../../assets/images/logo.png";
import menu from"../../assets/images/menu.png";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    const [openNav,setOpenNav] = useState(false)
    const toggleNav = () =>{
        setOpenNav(!openNav)
    }
    // const styles = {
    //     open:{
    //         maxHeight: openNav ? "0px" : "0px",
         
    //     }
    //   };
    return (
        <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="index.html"><img src={logo} width="125px" alt='' /></a>
                </div>
                <nav>
                    <ul className="setOpenNav" style={openNav ? {maxHeight: "200px"} : {maxHeight:"0"}} id="menuItems">
                        <li><Link to='/home'> <p>Home</p> </Link></li>
                        <li><Link to="/categories"><p>Categories</p></Link></li>
                        <li><Link to="/dashboard"><p>Dashboard</p></Link></li>
                        <li><Link to='/about'><p>About</p></Link></li>
                        <li>
                            {user ? (
                                <p onClick={logout}>
                                  SignOut
                                </p>
                              ) : (
                                <Link to="/login"><p>Login</p></Link>
                              )} 
                        </li>
                    </ul>
                </nav>
                <a href="cartPage.html"><img src="images/cart.png" alt=''/></a>
                <img src={menu} className="menu-icon" alt='' onClick={() => toggleNav()} />
            </div>
            {/* <div className="row">
                <div className="col-2">
                    <h1>Give Your Workout <br /> A New Style.!</h1>
                    <p>Success is't always about greatness. it's about consistency. Consistent <br />hard work gain
                        success. Greatness will come </p>
                    <a href="www" className="btn">Explore Now &#8594;</a>
                </div>
                <div className="col-2">
                    <img src={image1} alt="" />
                </div>
            </div> */}
        </div>
    </div>
    );
};

export default Navbar;