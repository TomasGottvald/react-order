const loadingReducer = ( state = false, action ) => {
    switch (action.type) {
        case 'LOADING':
            return !state;

        default:
            return state;
    }
}

export default loadingReducer;
