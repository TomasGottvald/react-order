const setPaymentReducer = ( state = { data: [] }, action ) => {
    switch (action.type) {
        case 'SET_PAYMENT':
            state = { data: action.payload }
            return state;

        default:
            return state;
    }
}

export default setPaymentReducer;
