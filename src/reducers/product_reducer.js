import {
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS
}  from '../actions'

const product_reducer = (state, action) => {
    if (action.type === GET_PRODUCT_BEGIN) {
        return {
            ...state,
            product_loading: true
        }
    }

    if (action.type === GET_PRODUCT_SUCCESS) {
        return {
            ...state,
            product_loading: false,
            product: action.payload
        }
    }

    if (action.type === GET_PRODUCT_ERROR) {
        return {
            ...state,
            product_loading: false,
            product_error: true
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default product_reducer