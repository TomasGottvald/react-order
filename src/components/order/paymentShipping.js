import React from 'react'
import { Link } from 'react-router-dom'

import OrderShipping from './shipping'
import OrderPayment from './payment'
import OrderPreview from './preview'

function OrderShippingPayment () {
    return (
        <div className="web__line">
            <div className="web__container">
                <div className="box-order">
                    <div id="transport_and_payment_form" className="box-order__info">
                        <OrderShipping />
                        <OrderPayment />
                    </div>
                    <OrderPreview />
                </div>
                <div className="in-action">
                    <div className="in-action__right">
                        <Link to="/order-data/"className="btn btn--success in-action__btn in-action__btn--big btn btn--disabled">
                            Continue in order
                        </Link>
                    </div>
                    <div className="in-action__left">
                        <Link to="/cart/" className="btn in-action__btn js-no-validate-button">
                            Back to cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderShippingPayment;
