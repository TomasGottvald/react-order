const saveOrderDataReducer = ( state = { items: [] }, action ) => {
    switch (action.type) {
        case 'SAVE_ORDER_DATA':
        return {
            ...state,
            action
        }

        default:
            return state;
    }
}

export default saveOrderDataReducer;
