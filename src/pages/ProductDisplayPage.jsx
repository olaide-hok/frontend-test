import { useQuery} from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
// import { useCategoriesContext } from '../context/categories_context';
import { GET_PRODUCT } from '../GraphQL/Queries';
// import styled from "styled-components";


function ProductDisplayPage() {

  const {id} = useParams()
  const {loading, error, data} = useQuery(GET_PRODUCT, {variables: {
    id: id
  }})

  console.log(data.product);

  return (
    <div>ProductDisplayPage</div>
  )
}

export default ProductDisplayPage