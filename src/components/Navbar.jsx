import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <NavContainer>
        <div className='nav-center'>
            <ul className='nav-links'>
                {links.map((link) => {
                    const {id, text, url} = link
                    return (
                        <li key={id}>
                            <Link to={url}>{text}</Link>
                        </li>
                    )
                })}
            </ul>

            <div>
                <img src={logo} alt='logo'/>
            </div>

            <div>
                <select className='currency'>
                    <option>$ USD</option>
                    <option> &euro; EUR</option>
                    <option> &#165; JPY</option>
                </select>
                <img src={cart} alt='cart icon' />
            </div>
        </div>

    </NavContainer>
  )
}

const NavContainer = styled.nav`
    background-color: var(--c-background);
    height: 80px;
    display: flex;
    place-content: center;

    .nav-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        
    }
    .nav-links {
      display: flex;
      li {
          margin: 0 0.5rem
      }
      a {
            text-decoration: none;
            color: var(--c-text);
            text-transform: uppercase;
            margin-bottom: 30px;
            &:hover {
                border-bottom: 2px solid var(--c-primary);
                color: var(--c-primary);
            }
        }
    }
    .currency {
        border-color: transparent;
        margin-right: 10px;
    }
`;

export default Navbar