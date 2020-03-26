import loggedReducer from './isLogged'
import loadingReducer from './isLoading'
import loadItemsReducer from './loadItems'
import addToCartReducer from './cart'
import loadPaymentsReducer from './loadPayments'
import loadShippingReducer from './loadShipping'
import setPaymentReducer from './setPayment'
import setShippingReducer from './setShipping'

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    isLogged : loggedReducer,
    isLoading : loadingReducer,
    loadedItems: loadItemsReducer,
    inCart: addToCartReducer,
    loadPayments: loadPaymentsReducer,
    loadShipping: loadShippingReducer,
    orderPayment: setPaymentReducer,
    orderShipping: setShippingReducer,
    form: formReducer
})

export default allReducers
