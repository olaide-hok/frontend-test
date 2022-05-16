import React from "react";
// import { mockdata } from "../utils/data";

import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useCategoriesContext } from "../context/categories_context";

function CategoryPage() {
  const {
    categories_loading: loading,
    categories_error: error,
    categories,
  } = useCategoriesContext();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <Wrapper>
      <h2>Category name</h2>
      {/* <div className="products-container">
        {mockdata.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div> */}

      <div className="products-container">
        {categories.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  h2 {
    font-weight: 400;
    font-size: 42px;
    margin-bottom: 6rem;
    margin-top: 5rem;
  }

  .products-container {
    display: grid;
    gap: 6rem 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default CategoryPage;
