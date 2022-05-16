import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useCategoriesContext } from '../context/categories_context';
import { GET_PRODUCT } from '../GraphQL/Queries';
// import styled from "styled-components";


function ProductDisplayPage() {
  const {id} = useParams()
  console.log(id);
  const productId = id


 
  const {loading, error, data} = useQuery(GET_PRODUCT, {
    variables: "jacket-canada-goosee"
  })
  console.log(data);

  // const { fetchSingleProduct } = useCategoriesContext()

  useEffect(() => {
    // fetchSingleProduct(id)
    // eslint-disable-next-line
  }, [id])

  return (
    <div>ProductDisplayPage</div>
  )
}

export default ProductDisplayPage