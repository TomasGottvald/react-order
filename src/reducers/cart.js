const loadingReducer = ( state = { items: [] }, action ) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {
            ...state,
            items: [...state.items, {'id': action.item.id, 'name': action.item.name, 'link': action.item.link, 'prices': action.item.prices, 'amount': action.count}]
        }

        case 'INCREASE_COUNT':
        return Object.assign({}, state, {
            items: state.items.map((cartItem) => {
                const newAmount = cartItem.amount + 1;
                return cartItem.id === action.id ? Object.assign({}, cartItem, {amount: newAmount}) : cartItem
            })
        })

        case 'DECREASE_COUNT':
        return Object.assign({}, state, {
            items: state.items.map((cartItem) => {
                const newAmount = cartItem.amount - 1;
                return cartItem.id === action.id ? Object.assign({}, cartItem, {amount: newAmount}) : cartItem
            })
        })

        case 'REMOVE_FROM_CART':
        return Object.assign({}, state, {
            items: state.items.filter((cartItem) => {
                return cartItem.id !== action.id
            })
        })

        default:
            return state;
    }
}

export default loadingReducer;
