import React from 'react'
import { Link } from 'react-router-dom'

import OrderShipping from './shipping'
import OrderPayment from './payment'
import OrderPreview from './preview'

class OrderShippingPayment extends React.Component {
    render() {
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
                            <button type="submit" id="transport_and_payment_form_save" name="transport_and_payment_form[save]" className="btn btn--success in-action__btn in-action__btn--big btn btn--disabled">Continue in order</button>
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
}

export default OrderShippingPayment;
