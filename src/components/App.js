import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageHomepage from './Pages/Homepage'
import PageArticle from './Pages/Article'
import PageArticleTerms from './Pages/ArticleTerms'
import PageProductDetail from './Pages/ProductDetail'
import PageProductList from './Pages/ProductList'

import OrderProgress from './Pages/Order/Progress'
import OrderCart from './Pages/Order/Cart'
import OrderPaymentShipping from './Pages/Order/PaymentShipping'
import OrderDataForm from './Pages/Order/DataForm'
import OrderSent from './Pages/Order/Sent'

import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import CONFIG from '../Config'

const client = new ApolloClient({
  uri: CONFIG.FEAPI_URL,
  cache: new InMemoryCache()
});

function App() {

    return(
        <ApolloProvider client={client}>
            <div className="App">
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
                        <Route path="/category/:categoryId/:categorySeoName/">
                            <PageProductList />
                        </Route>
                        <Route path="/category/:categoryId/:categorySeoName/:page/">
                            <PageProductList />
                        </Route>
                        <Route path="/article/:articleId/:articleSeoName/">
                            <PageArticle />
                        </Route>
                        <Route path="/article/terms-and-conditions/">
                            <PageArticleTerms />
                        </Route>
                        <Route path="/product-detail/:productId/:productSeoName/">
                            <PageProductDetail />
                        </Route>
                        <Route path="/">
                            <PageHomepage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ApolloProvider>
    )
}

export default App;
