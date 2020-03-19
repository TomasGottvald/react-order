import loggedReducer from './isLogged'
import loadingReducer from './isLoading'
import loadItemsReducer from './loadItems'
import addToCartReducer from './cart'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isLogged : loggedReducer,
    isLoading : loadingReducer,
    loadedItems: loadItemsReducer,
    inCart: addToCartReducer
})

export default allReducers
