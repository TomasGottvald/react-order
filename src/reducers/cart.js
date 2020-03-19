const loadingReducer = ( state = { items: [] }, action ) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {
            ...state,
            items: [...state.items, {'id': action.item.id, 'name': action.item.name, 'link': action.item.link, 'prices': action.item.prices, 'amount': action.count}]
        }

        default:
            return state;
    }
}

export default loadingReducer;
