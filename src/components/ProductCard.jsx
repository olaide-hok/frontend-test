import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

function ProductCard({item}) {

  const { pname, price, image } = item
  const {addToCart} = useCartContext()
  return (
    <Wrapper
      onClick={() => addToCart(item)}
    >
      <img src={image} alt={pname}/>
      <p>{pname}</p>
      <span>{price}</span>
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
