import React from 'react'
import CartItem from './cartItem'
import CONFIG from '../../config'
import { Link } from 'react-router-dom'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { useSelector } from 'react-redux'

function Cart () {

    const cartData = useSelector( state => state.inCart.items )

    let totalPrice = 0
    let currency = ''
    const cartItems = cartData.map(function(item){
            currency = item.prices[0].currency
            totalPrice += item.prices[0].withVat * item.amount
            return <CartItem key={item.id} data={item} />
    })

    return (
        <div className="web__line">
            <div className="web__container">
                <h1>Your cart</h1>
                <form name="cart_form" method="post" action="" noValidate="noValidate" className="js-no-validate js-cart-form">
                    <span className="js-validation-errors-list js-validation-error-list-cart_form in-message  display-none">
                        <ul className="in-message__list"></ul>
                    </span>
                    <table className="table-cart js-cart">
                        <thead>
                            <tr className="table-cart__row">
                                <th className="table-cart__cell table-cart__cell--image">Image</th>
                                <th className="table-cart__cell table-cart__cell--name">Name</th>
                                <th className="table-cart__cell table-cart__cell--price">Unit price including VAT</th>
                                <th className="table-cart__cell table-cart__cell--price">VAT rate</th>
                                <th className="table-cart__cell table-cart__cell--amount">Amount</th>
                                <th className="table-cart__cell table-cart__cell--price">Price including VAT</th>
                                <th className="table-cart__cell table-cart__cell--action">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                        </tbody>
                        <tfoot>
                            <tr className="table-cart__row">
                                <td className="table-cart__cell table-cart__cell--image">&nbsp;</td>
                                <td className="table-cart__cell table-cart__cell--name">&nbsp;</td>
                                <td className="table-cart__cell  table-cart__cell--price">&nbsp;</td>
                                <td className="table-cart__cell table-cart__cell--total-price js-cart-total-price" colSpan="3">
                                    Total price including VAT:
                                    <span>
                                        <IntlProvider locale={ CONFIG.LOCALE }>
                                            <FormattedNumber
                                                value={ totalPrice }
                                                style="currency"
                                                currency={ currency }
                                                />
                                        </IntlProvider>
                                    </span>
                                </td>
                                <td className="table-cart__cell">&nbsp;</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="box-cart-bottom">
                        <div className="box-cart-bottom__info">
                        </div>
                        <div className="box-cart-bottom__promo">
                            <div className="box-promo-code">
                                <label className="box-promo-code__input">
                                Promo code:
                                <input type="text" id="js-promo-code-input" className="input" data-apply-code-url="http://127.0.0.1:8000/promo-code/apply/" />
                                </label>
                                <button type="button" id="js-promo-code-submit-button" className="btn box-promo-code__btn">Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className="in-action">
                        <div className="in-action__right">
                            <div>
                                <Link to="/order-payment-shipping/" className="btn btn--success in-action__btn in-action__btn--big btn">
                                    Order
                                </Link>
                            </div>
                        </div>
                        <div className="in-action__left">
                            <Link to="/" className="btn in-action__btn">
                                Back to buying
                            </Link>
                        </div>
                    </div>
                    <input type="hidden" id="cart_form__token" name="cart_form[_token]" className="input" value="fgYgk9Ue-wwBoxMx1pwPdVzO7MWFmkYE14n3jJN9Gck" />
                </form>
            </div>
        </div>
    )
}

export default Cart;
