import React from 'react'
import { Link } from 'react-router-dom'

function OrderProgress(props) {
    return (
        <div className="web__line">
            <div className="web__container">
                <ul className="box-progress">
                    <li className={"box-progress__item " + (props.step === 1 ? 'box-progress__item--active' : null)}>
                        <Link to="/cart/" className="box-progress__item__inner">
                            <span className="box-progress__item__step">1.</span>
                            <span className="box-progress__item__title">Cart</span>
                        </Link>
                    </li>
                    <li className={"box-progress__item " + (props.step === 2 ? 'box-progress__item--active' : null)}>
                        <Link to="/order-payment-shipping/" className="box-progress__item__inner">
                            <span className="box-progress__item__step">2.</span>
                            <span className="box-progress__item__title">Shipping and payment</span>
                        </Link>
                    </li>
                    <li className={"box-progress__item " + (props.step === 3 ? 'box-progress__item--active' : null)}>
                        <Link to="/order-data/" className="box-progress__item__inner">
                            <span className="box-progress__item__step">3.</span>
                            <span className="box-progress__item__title">Delivery data</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OrderProgress;
