import React from 'react'
import PreviewItem from './previewItem'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl';
import { useSelector } from 'react-redux'

function OrderPreview () {
    const cartData = useSelector( state => state.inCart.items )

    let totalPrice = 0
    let currency = ''

    const previewItems = cartData.map(function(item){
        currency = item.prices[0].currency
        totalPrice += item.prices[0].withVat * item.amount
        return <PreviewItem key={item.id} data={item} />
    })

    return (
        <div id="js-order-preview" className="box-order__cart" data-url="http://127.0.0.1:8000/order/preview/">
            <h2>Products in cart overview</h2>
            <table className="table-cart-preview">
                <tbody>
                    { previewItems }
                    <tr className="table-cart-preview__row table-cart-preview__row--total table-cart-preview__row--important">
                        <td className="table-cart-preview__cell">
                            Total price including VAT:
                        </td>
                        <td className="table-cart-preview__cell table-cart-preview__cell--price">
                            { totalPrice }
                            <IntlProvider locale={ CONFIG.LOCALE }>
                                <FormattedNumber
                                    value={ totalPrice }
                                    style="currency"
                                    currency={ CONFIG.CURRENCY }
                                    />
                            </IntlProvider>
                        </td>
                    </tr>
                    <tr className="table-cart-preview__row table-cart-preview__row--total">
                        <td className="table-cart-preview__cell">
                            Total price excluding VAT:
                        </td>
                        <td className="table-cart-preview__cell table-cart-preview__cell--price">
                            CZK2,891.74
                        </td>
                    </tr>
                    <tr className="table-cart-preview__row table-cart-preview__row--total">
                        <td className="table-cart-preview__cell">
                            Total amount of VAT:
                        </td>
                        <td className="table-cart-preview__cell table-cart-preview__cell--price">
                            CZK607.26
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default OrderPreview;
