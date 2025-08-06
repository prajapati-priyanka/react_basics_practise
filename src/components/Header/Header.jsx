import { useState } from "react";
import "./Header.css";

const Header = ()=>{
    return(
        <header className="header">
            <h2 className="heading">Food Wizard</h2>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>Wishlist</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;