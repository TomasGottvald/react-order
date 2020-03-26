const loadPaymentsReducer = ( state = { payments: [] }, action ) => {
    switch (action.type) {
        case 'LOAD_PAYMENTS':
            state = { payments: action.payload }
            return state;

        default:
            return state;
    }
}

export default loadPaymentsReducer;
