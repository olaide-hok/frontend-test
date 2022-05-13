import { ADD_ITEM_TO_CART, TOGGLE_CART_DROPDOWN_ICON } from "../actions";

const cart_reducer = (state, action) => {
    if (action.type === TOGGLE_CART_DROPDOWN_ICON) {
        return {
            ...state,
            hidden: !state.hidden
        }
    }

    if (action.type === ADD_ITEM_TO_CART ) {
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }
    }

    return state
}

export default cart_reducer