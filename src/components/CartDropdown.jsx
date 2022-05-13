import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";

function CartDropdown() {
  const { cartItems } = useCartContext();

  return (
    <Wrapper>
      <div className="cart_dropdown">
        <div>
          <p className="cart_header">
            {`My Bag. ${cartItems.length} ${
              cartItems.length > 1 ? "items" : "item"
            }`}
          </p>
        </div>

        <div className="cart_items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>

        <div className="total_btn">
          <div className="total">
            <p>Total</p>
            <span>12345</span>
          </div>

          <div className="cart_btn">
            <button className="view_bag_btn">View Bag</button>
            <button className="checkout_btn">Checkout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .cart_header {
    font-weight: 700;
    font-size: 16px;
  }

  .cart_dropdown {
    position: absolute;
    right: 32px;
    top: 78px;
    display: flex;
    flex-direction: column;
    width: 325px;
    height: 677px;
    padding: 32px 16px;
    border: 2px solid var(--c-primary);
    background: var(--c-background);
    z-index: 5;
  }

  .cart_items {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;

  }

  .total_btn {
    margin-top: auto;

  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }

    span {
      font-weight: 700;
      font-size: 16px;
    }
  }

  .cart_btn {
    display: flex;
    justify-content: space-between;
    // margin-top: auto;

    .view_bag_btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      width: 140px;
      height: 43px;
      background: var(--c-background);
      border: 1px solid #1d1f22;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
    }

    .checkout_btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      width: 140px;
      height: 43px;
      background: var(--c-primary);
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      color: var(--c-white);
      border-style: none;
    }
  }
`;

export default CartDropdown;
