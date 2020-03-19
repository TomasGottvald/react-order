export const login = () => {
    return {
        type: 'LOGGED'
    }
}

export const isLoading = () => {
    return {
        type: 'LOADING'
    }
}

export const addToCart = ( item, count ) => {
    return {
        type: 'ADD_TO_CART',
        item: item,
        count: count
    }
}

export const loadHomepageTopItems = ( items ) => {
    return {
        type: 'LOAD_HP_ITEMS',
        payload: items
    }
}
