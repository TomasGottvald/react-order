import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

class Homepage extends React.Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="web__line">
                        <div className="web__container">
                            <h1>Product Detail - in progress</h1>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage;
