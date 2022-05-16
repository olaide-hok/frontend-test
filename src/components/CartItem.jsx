import React from "react";
import styled from "styled-components";

function CartItem({ item: { gallery, name, prices, quantity } }) {
  return (
    <Wrapper>
      <div className="item-details">
        <p>{name}</p>
        <span>{prices[0]["currency"]["symbol"]}{prices[0]["amount"]}</span>
        <p>Size:</p>
        <p>Color:</p>
      </div>

      <div className="quantity">
        <button> + </button>
        <span>{quantity}</span>
        <button> - </button>
      </div>

      <div className="item_image">
        <img src={gallery[0]} alt={name}></img>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 3fr;
  margin: 32px 0 40px;

  .item_details {
    display: flex;
    flex-direction: column;
  }

  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      border: 1px solid var(--c-text);
      background: var(--c-background);
    }

    span {
      font-weight: 500;
      font-size: 16px;
      text-align: center;
    }
  }

  .item_image img {
    width: 100%;
  }
`;

export default CartItem;
