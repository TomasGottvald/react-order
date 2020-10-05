// system

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

// cart
export const addToCart = ( item, count ) => {
    return {
        type: 'ADD_TO_CART',
        item: item,
        count: count
    }
}

export const removeFromCart = ( id ) => {
    return {
        type: 'REMOVE_FROM_CART',
        id: id
    }
}

export const increaseCount = ( id ) => {
    return {
        type: 'INCREASE_COUNT',
        id: id
    }
}

export const decreaseCount = ( id ) => {
    return {
        type: 'DECREASE_COUNT',
        id: id
    }
}

// shipping
export const loadShipping = ( data ) => {
    return {
        type: 'LOAD_SHIPPING',
        payload: data
    }
}

export const setShipping = ( item ) => {
    return {
        type: 'SET_SHIPPING',
        payload: item
    }
}

// transport
export const loadPayments = ( data ) => {
    return {
        type: 'LOAD_PAYMENTS',
        payload: data
    }
}

export const setPayment = ( item ) => {
    return {
        type: 'SET_PAYMENT',
        payload: item
    }
}

// order
export const saveOrderData = ( data ) => {
    return {
        type: 'SAVE_ORDER_DATA',
        payload: data
    }
}
