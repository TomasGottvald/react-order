import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomepageProductList from '../Product/HomepageProductList'
import { login } from '../../actions'

import { useSelector, useDispatch } from 'react-redux'

function Homepage () {
    const isLogged = useSelector( state => state.isLogged )
    const dispatch = useDispatch()

    return (
        <div>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        <h1>Homepage</h1>
                        <Link to="/cart/" > Košík </Link>
                        <br />
                        <br />
                        <button onClick={ () => dispatch(login()) }> Login / Logout </button>
                        <br />
                        <br />
                        { isLogged ? 'Logged' : 'Not logged' }

                        <HomepageProductList />
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Homepage;
