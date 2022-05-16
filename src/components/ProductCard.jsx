import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useCartContext } from "../context/cart_context";

function ProductCard({item}) {

  // const { pname, price, image } = item

  const { name, prices, gallery } = item
  // const {addToCart} = useCartContext()
  return (
    <Wrapper
      onClick={() => {
        // addToCart(item)
      }}
    >
      <Link to={`/${item.id}`}>
      <img src={gallery[0]} alt={name}/>
      </Link>
      <p>{name}</p>
      <span>{prices[0]["currency"]["symbol"]}{prices[0]["amount"]}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 386px;
    height: 444px;
    padding: 1rem;

    img {
      display: block;
      object-fit: cover;
      width:  354px;
      height: 330px;
      margin-bottom: 24px;

    }

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 28.8px;
    }

    span {
      font-weight: 500;
      font-size: 18px;
    }

    &:hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }

` 

export default ProductCard;
