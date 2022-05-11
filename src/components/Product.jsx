import React from "react";
import styled from "styled-components";

function Product({ pname, price, image }) {
  return (
    <div>
      <img src={image} />
      <p>{pname}</p>
      <span>{price}</span>
    </div>
  );
}

export default Product;
