import React, { createContext, useContext, useReducer } from 'react'
import { 
    ADD_ITEM_TO_CART, 
    TOGGLE_CART_DROPDOWN_ICON 
} from '../actions'

import cart_reducer from '../reducers/cart_reducer'

const initialState = {
    hidden: true,
    cartItems: []
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)

    // Add Item to Cart
    const addToCart = (item) => {
        dispatch({ type: ADD_ITEM_TO_CART, payload: item })
    }

    // Toggle Cart Dropdown
    const toggleCartDropdown = () => {
        dispatch({ type: TOGGLE_CART_DROPDOWN_ICON })
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            toggleCartDropdown
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}