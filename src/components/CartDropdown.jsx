import React from "react";
import styled from "styled-components";

function CartDropdown() {

  
  return (
    <Wrapper>
      <div className="cart-dropdown">
        <div className="cart-btn">
          <button>View Bag</button>
          <button>Checkout</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .cart-dropdown {
    position: absolute;
    right: 32px;;
    top: 78px;
    display: flex;
    flex-direction: column;
    width: 325px;
    height: 677px;
    padding: 16px;
    border: 2px solid var(--c-primary);
    z-index: 5;
  }

  .cart-btn {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
`;

export default CartDropdown;
