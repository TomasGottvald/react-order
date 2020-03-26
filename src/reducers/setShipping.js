const setShippingReducer = ( state = { data: [] }, action ) => {
    switch (action.type) {
        case 'SET_SHIPPING':
            state = { data: action.payload }
            return state;

        default:
            return state;
    }
}

export default setShippingReducer;
