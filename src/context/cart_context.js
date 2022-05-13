import React, { createContext, useContext, useReducer } from 'react'
import { TOGGLE_CART_DROPDOWN_ICON } from '../actions'

import cart_reducer from '../reducers/cart_reducer'

const initialState = {
    hidden: true
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)

    // Toggle Cart Dropdown
    const toggleCartDropdown = () => {
        dispatch({ type: TOGGLE_CART_DROPDOWN_ICON })
        console.log("fired");
        console.log(state.hidden);

    }

    return (
        <CartContext.Provider value={{
            ...state,
            toggleCartDropdown
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}