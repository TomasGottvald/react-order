import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageHomepage from './pages/Homepage'

import OrderProgress from './order/progress'
import OrderCart from './order/cart'
import OrderPaymentShipping from './order/paymentShipping'
import OrderDataForm from './order/dataForm'
import OrderSent from './order/sent'

import { useSelector } from 'react-redux'
import Loader from './layout/Loader';

function App() {
    const isLoading = useSelector( state => state.isLogged )

    return(
        <div className="App">
        <Loader type={{ isLoading }} />
        <Router>
            <Switch>
                <Route path="/cart/">
                    <OrderProgress step='1' />
                    <OrderCart />
                </Route>
                <Route path="/order-payment-shipping/">
                    <OrderProgress step='2' />
                    <OrderPaymentShipping />
                </Route>
                <Route path="/order-data/">
                    <OrderProgress step='3' />
                    <OrderDataForm />
                </Route>
                <Route path="/order-sent/">
                    <OrderProgress step='4' />
                    <OrderSent />
                </Route>
                <Route path="/">
                    <PageHomepage />
                </Route>
            </Switch>
        </Router>
    </div>
    )
}

export default App;
