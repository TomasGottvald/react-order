import React from 'react'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl';

class CartItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            count: props.data.amount,
            totalPrice: props.data.prices[0].withVat * props.data.amount
        }

        this.plusClick = this.plusClick.bind(this)
        this.minusClick = this.minusClick.bind(this)
    }

    plusClick() {
        this.setState({
            count: this.state.count + 1,
            totalPrice: this.props.data.prices[0].withVat * (this.state.count + 1)
        })
    }

    minusClick() {
        this.setState({
            count: this.state.count - 1,
            totalPrice: this.props.data.prices[0].withVat * (this.state.count - 1)
        })
    }

    render () {
        return (
            <tr className="table-cart__row js-cart-item">
                <td className="table-cart__cell table-cart__cell--image">
                    <a href={ this.props.data.link } title={ this.props.data.name } className="table-cart__cell__image">
                        <picture>
                            <img alt={ this.props.data.name } title={ this.props.data.name } src="files/1.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/product/thumbnail/1.jpg" className="image-product-thumbnail error loaded" itemProp="image" />
                        </picture>
                    </a>
                </td>
                <td className="table-cart__cell table-cart__cell--name js-cart-item-name">
                    <a href={ this.props.data.link }>
                        { this.props.data.name }
                    </a>
                    <div className="table-cart__cell__price-mobile">
                        <IntlProvider locale={ CONFIG.LOCALE }>
                            <FormattedNumber
                                value={ this.props.data.prices[0].withVat }
                                style="currency"
                                currency={ this.props.data.prices[0].currency }
                                />
                        </IntlProvider>
                    </div>
                </td>
                <td className="table-cart__cell table-cart__cell--price js-cart-item-price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ this.props.data.prices[0].withVat }
                            style="currency"
                            currency={ this.props.data.prices[0].currency }
                            />
                    </IntlProvider>
                </td>
                <td className="table-cart__cell table-cart__cell--price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            style='percent'
                            value={ this.props.data.prices[0].vatRate/100 }
                            minimumFractionDigits={0}
                            />
                    </IntlProvider>
                </td>
                <td className="table-cart__cell table-cart__cell--amount">
                    <span className="form-input-spinbox js-spinbox">
                        <input type="text"
                            id={"cart_form_quantities_" + this.props.data.id }
                            name={"cart_form[quantities][" + this.props.data.id + "]"}
                            value={ this.state.count }
                            onChange={ this.recalcItemPrice }
                            required="required" className="form-input-spinbox__input input-no-style js-spinbox-input input" data-spinbox-min="1" />

                        <button type="button" className="btn-no-style form-input-spinbox__btn js-spinbox-plus" onClick={ this.plusClick }>+</button>
                        <button type="button" className="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus js-spinbox-minus" onClick={ this.minusClick }>-</button>
                    </span>
                </td>
                <td className="table-cart__cell table-cart__cell--price js-cart-item-total-price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ this.state.totalPrice }
                            style="currency"
                            currency={ this.props.data.prices[0].currency }
                            />
                    </IntlProvider>
                </td>
                <td className="table-cart__cell table-cart__cell--action">
                    <a href="http://127.0.0.1:8000/cart/delete/4/?_token=WkcLrsmBB849tAiZm3PMp2NvgUW0nXnSptM6EC2sCq4" className="js-cart-item-remove-button">
                        <i className="svg svg-remove"></i>
                    </a>
                </td>
            </tr>
        )
    }
}

export default CartItem;
