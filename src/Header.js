import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket, SportsBasketball } from '@material-ui/icons';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
     return (
        <nav className="Header">
          
          <Link to="/login">  
          <img className="mylogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
          </Link>
          <div className="header_search">
          <input type="text" className="header_searchInput" />
         <SearchIcon className="header_searchIcon"  />
           </div>           
        
      <div className="header_nav">
        <Link to={!user && '/login'} className="header_link">
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span  className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
           </div> 
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
           </div> 
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
           </div> 
        </Link>

        <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
                <ShoppingBasket />
                <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
            </div>
        </Link>
        </div>
        </nav>
    )
}

export default Header;
