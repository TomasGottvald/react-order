const loadItemsReducer = ( state = { homepageItems: [] }, action ) => {
    switch (action.type) {
        case 'LOAD_HP_ITEMS':
            state = { homepageItems: action.payload }
            return state;

        default:
            return state;
    }
}

export default loadItemsReducer;
