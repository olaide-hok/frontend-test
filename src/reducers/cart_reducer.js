import { TOGGLE_CART_DROPDOWN_ICON } from "../actions";

const cart_reducer = (state, action) => {
    if (action.type === TOGGLE_CART_DROPDOWN_ICON) {
        return {
            ...state,
            hidden: !state.hidden
        }
    }

    return state
}

export default cart_reducer