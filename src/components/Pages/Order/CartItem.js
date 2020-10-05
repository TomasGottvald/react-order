import React from 'react'
import CONFIG from '../../../Config'
import { IntlProvider, FormattedNumber } from 'react-intl';

import { increaseCount, decreaseCount, removeFromCart } from '../../../actions'
import { useDispatch } from 'react-redux'

function recalcItemPrice () {

}

function CartItem(props) {
    const dispatch = useDispatch()

    return (
        <tr className="table-cart__row js-cart-item">
            <td className="table-cart__cell table-cart__cell--image">
                <a href={ props.data.link } title={ props.data.name } className="table-cart__cell__image">
                    <picture>
                        <img alt={ props.data.name } title={ props.data.name } src="https://placeimg.com/100/100/any" loading="lazy" data-src="http://127.0.0.1:8000/content/images/product/thumbnail/1.jpg" className="image-product-thumbnail error loaded" itemProp="image" />
                    </picture>
                </a>
            </td>
            <td className="table-cart__cell table-cart__cell--name js-cart-item-name">
                <a href={ props.data.link }>
                    { props.data.name }
                </a>
                <div className="table-cart__cell__price-mobile">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ props.data.priceWithVat }
                            style={`currency`}
                            minimumFractionDigits={2}
                            currency={ CONFIG.CURRENCY }
                            />
                    </IntlProvider>
                </div>
            </td>
            <td className="table-cart__cell table-cart__cell--price js-cart-item-price">
                <IntlProvider locale={ CONFIG.LOCALE }>
                    <FormattedNumber
                        value={ props.data.priceWithVat }
                        style={`currency`}
                        minimumFractionDigits={2}
                        currency={ CONFIG.CURRENCY }
                        />
                </IntlProvider>
            </td>
            <td className="table-cart__cell table-cart__cell--price">
                <IntlProvider locale={ CONFIG.LOCALE }>
                    <FormattedNumber
                        style={`percent`}
                        value={ props.data.priceVatAmount }
                        />
                </IntlProvider>
            </td>
            <td className="table-cart__cell table-cart__cell--amount">
                <span className="form-input-spinbox js-spinbox">
                    <input type="text"
                        id={"cart_form_quantities_" + props.data.id }
                        name={"cart_form[quantities][" + props.data.id + "]"}
                        value={ props.data.amount }
                        onChange={ recalcItemPrice }
                        required="required" className="form-input-spinbox__input input-no-style js-spinbox-input input" data-spinbox-min="1" />

                    <button type="button" className="btn-no-style form-input-spinbox__btn js-spinbox-plus" onClick={ () => dispatch(increaseCount(props.data.id)) }>+</button>
                    <button type="button" className="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus js-spinbox-minus" onClick={ () => dispatch(decreaseCount(props.data.id)) }>-</button>
                </span>
            </td>
            <td className="table-cart__cell table-cart__cell--price js-cart-item-total-price">
                <IntlProvider locale={ CONFIG.LOCALE }>
                    <FormattedNumber
                        value={ props.data.priceWithVat * props.data.amount }
                        style={`currency`}
                        currency={ CONFIG.CURRENCY }
                        />
                </IntlProvider>
            </td>
            <td className="table-cart__cell table-cart__cell--action">
                <button onClick= { () => dispatch(removeFromCart(props.data.id))} className="js-cart-item-remove-button">
                    <i className="svg svg-remove"></i>
                </button>
            </td>
        </tr>
    )

}

export default CartItem;
