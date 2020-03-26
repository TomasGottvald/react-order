const loadShippingReducer = ( state = { shipping: [] }, action ) => {
    switch (action.type) {
        case 'LOAD_SHIPPING':
            state = { shipping: action.payload }
            return state;

        default:
            return state;
    }
}

export default loadShippingReducer;
