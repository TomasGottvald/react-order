import React from 'react'
import PreviewItem from './previewItem'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl';
import { useSelector } from 'react-redux'

function getWithoutVatFromWithVat(price, vat) {
    const withoutVat = (price/(100 + Number(vat)))*100
    return withoutVat
}

function getVatFromWithVat(price, vat) {
    const vatPrice = (price/(100 + Number(vat)))*Number(vat)
    return vatPrice
}

function shippingLine( data ) {
    if(data && data.id){
        return (
            <tr className="table-cart-preview__row table-cart-preview__row--total table-cart-preview__row--important">
                <td className="table-cart-preview__cell">
                    Shipping: { data.name }
                </td>
                <td className="table-cart-preview__cell table-cart-preview__cell--price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ data.price }
                            style={`currency`}
                            currency={ CONFIG.CURRENCY }
                            />
                    </IntlProvider>
                </td>
            </tr>
        )
    }
}

function paymentLine(data) {
    if(data && data.id){
        return (
            <tr className="table-cart-preview__row table-cart-preview__row--total table-cart-preview__row--important">
                <td className="table-cart-preview__cell">
                    Payment: { data.name }
                </td>
                <td className="table-cart-preview__cell table-cart-preview__cell--price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ data.price }
                            style={`currency`}
                            currency={ CONFIG.CURRENCY }
                            />
                    </IntlProvider>
                </td>
            </tr>
        )
    }
}

function OrderPreview() {
    const cartData = useSelector( state => state.inCart.items )
    const shippingData = useSelector( state => state.orderShipping.data )
    const paymentData = useSelector( state => state.orderPayment.data )

    let totalPrice = 0

    const previewItems = cartData.map(function(item){
        totalPrice += Number(item.prices[0].withVat) * Number(item.amount)
        return <PreviewItem key={item.id} data={item} />
    })

    if(shippingData.id){
        totalPrice += Number(shippingData.price)
    }

    if(paymentData.id){
        totalPrice += Number(paymentData.price)
    }

    return (
        <div id="js-order-preview" className="box-order__cart" data-url="http://127.0.0.1:8000/order/preview/">
            <h2>Products in cart overview</h2>
            <table className="table-cart-preview">
                <tbody>
                    { previewItems }
                    { shippingLine(shippingData) }
                    { paymentLine(paymentData) }
                    <tr className="table-cart-preview__row table-cart-preview__row--total table-cart-preview__row--important">
                        <td className="table-cart-preview__cell">
                            Total price including VAT:
                        </td>
                        <td className="table-cart-preview__cell table-cart-preview__cell--price">
                            <IntlProvider locale={ CONFIG.LOCALE }>
                                <FormattedNumber
                                    value={ totalPrice }
                                    style={`currency`}
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
                            <IntlProvider locale={ CONFIG.LOCALE }>
                                <FormattedNumber
                                    value={ getWithoutVatFromWithVat(totalPrice, 21) }
                                    style={`currency`}
                                    currency={ CONFIG.CURRENCY }
                                    />
                            </IntlProvider>
                        </td>
                    </tr>
                    <tr className="table-cart-preview__row table-cart-preview__row--total">
                        <td className="table-cart-preview__cell">
                            Total amount of VAT:
                        </td>
                        <td className="table-cart-preview__cell table-cart-preview__cell--price">
                            <IntlProvider locale={ CONFIG.LOCALE }>
                                <FormattedNumber
                                    value={ getVatFromWithVat(totalPrice, 21) }
                                    style={`currency`}
                                    currency={ CONFIG.CURRENCY }
                                    />
                            </IntlProvider>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default OrderPreview;
