import React from 'react'
import { createContext, useContext, useReducer } from "react"

import product_reducer from "../reducers/product_reducer"

const initialState = {
    product_loading: false,
    product_error: false,
    product: [],
}

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(product_reducer, initialState)
    // const {loading, error, data} = useQuery(GET_PRODUCT, {variables: {
    //     id: id
    //   }})

    
    return (
        <ProductContext.Provider value={{
            ...state,
        }}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductContext = () => {
    return useContext(ProductContext)
}