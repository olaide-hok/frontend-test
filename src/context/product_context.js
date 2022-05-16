import React, { useEffect } from 'react'
import { useQuery } from "@apollo/client"
import { createContext, useContext, useReducer } from "react"
import { GET_PRODUCT_BEGIN, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../actions"
import { GET_PRODUCT } from "../GraphQL/Queries"

import product_reducer from "../reducers/product_reducer"

const initialState = {
    product_loading: false,
    product_error: false,
    product: [],
}

const ProductContext = createContext()

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(product_reducer, initialState)
    const {loading, error, data} = useQuery(GET_PRODUCT)

    const fetchSingleProduct = (id) => {
        if (loading) {
            dispatch({ type: GET_PRODUCT_BEGIN, payload: loading})
        }

        if (data) {
            const products = data.category.products
            dispatch({ type:GET_PRODUCT_SUCCESS, payload: products })
        }

        if (error) {
            dispatch({ type: GET_PRODUCT_ERROR, payload: error })
        }
        
    }

    useEffect(() => {
        fetchSingleProduct()
        // eslint-disable-next-line
    }, []) 

    return (
        <ProductContext.Provider value={{
            ...state,
            // fetchProduct
            fetchSingleProduct
        }}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductContext = () => {
    return useContext(ProductContext)
}