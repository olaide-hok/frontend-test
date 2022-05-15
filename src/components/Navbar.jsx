import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import { useCartContext } from "../context/cart_context";

function Navbar() {

  const {hidden, toggleCartDropdown} = useCartContext()

  return (
    <NavContainer>
      <div className="nav-center">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>

        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className='currency_cart'>
          <select className="currency">
            <option>$ USD</option>
            <option> &euro; EUR</option>
            <option> &#165; JPY</option>
          </select>

          <div
            className='cart_container' 
            onClick={toggleCartDropdown}  
          >
            <img src={cart} alt="cart icon" />
            <span className='cart_value'>3</span>          
          </div>
        </div>
        
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background-color: var(--c-background);
  height: 80px;
  display: flex;
  place-content: center;
  border: 1px solid var(--c-text);

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }
  .nav-links {
    display: flex;
    li {
      margin: 0 0.5rem;
    }
    a {
      text-decoration: none;
      color: var(--c-text);
      text-transform: uppercase;

      &:hover {
        border-bottom: 2px solid var(--c-primary);
        color: var(--c-primary);
        padding-bottom: 25px;
      }
    }
  }
  .currency_cart {
    display: flex;
  }
  .currency {
    border-color: transparent;
    margin-right: 10px;
  }
  .cart_container {
    position: relative;
    display: flex;
    align-items: center;
  }
  .cart_value {
    display: flex;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -10px;
    left: 10px;
    background: var(--c-text);
    color: var(--c-background);
    border-radius: 50%;
    padding: 5px;
    justify-content: center;
    align-items: center;
  }
`;

export default Navbar;
