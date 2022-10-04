import React from "react";
import logo from '../../assets/logo.png'
import './navbar.css'
const Header = () => {
    return (
      <header>
        <h1>Titulo</h1>
        <nav>
            <a href="">categoria 1</a>
            <a href="">categoria 2</a>
            <a href="">categoria 3</a>
            <a href="">categoria 4</a>
        </nav>
        <img src={logo} alt="tienda online" />
        
      </header>
    )
}
export default Header;