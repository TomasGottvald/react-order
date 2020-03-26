import React from 'react'
import axios from 'axios'
import CONFIG from '../../config'
import { loadPayments, setPayment } from '../../actions'
import { IntlProvider, FormattedNumber } from 'react-intl'

import { useSelector, useDispatch } from 'react-redux'

function OrderPayment(props) {
    const dispatch = useDispatch()
    const loadedPayments = useSelector( state => state.loadPayments.payments )

    if( loadedPayments.length === 0 ){
        axios.get(CONFIG.API_URL+"/payments/")
        .then(res => {
            dispatch(loadPayments(res.data.payments.items))
        })
    }

    const paymentsItems = loadedPayments.map(function(item){
        return (
            <label key={item.id} className="box-chooser__item" htmlFor={"transport_and_payment_form_payment_" + item.id }>
                <span className="box-chooser__item__check">
                    <input onChange={ () => dispatch(setPayment(item)) }  type="checkbox" id={"transport_and_payment_form_payment_" + item.id } name="transport_and_payment_form[payment]" className="css-checkbox js-order-payment-input" data-id="1" value="1" />
                    <span className="css-checkbox__image"></span>
                </span>
                <span className="box-chooser__item__image">
                    <picture>
                        <img alt="" title="" src="https://placeimg.com/30/30/any" className="image-payment error loaded" itemProp="image" />
                    </picture>
                </span>
                <span className="box-chooser__item__title">
                    <strong className="box-chooser__title__name">
                        { item.name }
                    </strong>
                    <span className="box-chooser__item__title__description">
                        { item.description }
                    </span>
                </span>
                <span className="box-chooser__item__price">
                    <IntlProvider locale={ CONFIG.LOCALE }>
                        <FormattedNumber
                            value={ item.price }
                            style={`currency`}
                            currency={ CONFIG.CURRENCY }
                            />
                    </IntlProvider>
                </span>
            </label>
        )
    })

    return (
        <div className="box-order__info__item">
            <h2 id="js-label-transport_and_payment_form_payment">Payment selection</h2>
            <div className="box-chooser box-chooser--smaller js-form-group">
                <span className="js-validation-errors-list js-validation-error-list-transport_and_payment_form_payment form-error form-error--inline display-none">
                    <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                    <ul className="form-error__list"></ul>
                </span>
                <div id="transport_and_payment_form_payment">
                    {paymentsItems}
                </div>
            </div>
        </div>
    )
}

export default OrderPayment;
