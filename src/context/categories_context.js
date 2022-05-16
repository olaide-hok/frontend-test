import React, { useEffect } from 'react'
import { useQuery } from "@apollo/client"
import { createContext, useContext, useReducer } from "react"
import { GET_CATEGORIES_BEGIN, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from "../actions"
import { GET_CATEGORIES, GET_PRODUCT } from "../GraphQL/Queries"

import categories_reducer from "../reducers/categories_reducer"

const initialState = {
    categories_loading: false,
    categories_error: false,
    categories: [],
    product: []
}

const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categories_reducer, initialState)
    const {loading, error, data} = useQuery(GET_CATEGORIES)
    // const {loading, error, data} = useQuery(GET_PRODUCT)

    const fetchCategories = () => {
        if (loading) {
            dispatch({ type: GET_CATEGORIES_BEGIN, payload: loading})
        }

        if (data) {
            const products = data.category.products
            dispatch({ type:GET_CATEGORIES_SUCCESS, payload: products })
        }

        if (error) {
            dispatch({ type: GET_CATEGORIES_ERROR, payload: error })
        }
        
    }

    // const fetchSingleProduct = (id) => {
    //     GET_PRODUCT(id)
    // }

    useEffect(() => {
        fetchCategories()
        // eslint-disable-next-line
    }, [loading, data]) 

    return (
        <CategoriesContext.Provider value={{
            ...state,
            // fetchCategories
            // fetchSingleProduct
        }}>
            {children}
        </CategoriesContext.Provider>
    )

}

export const useCategoriesContext = () => {
    return useContext(CategoriesContext)
}