import React from 'react'
import axios from 'axios'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl'

import { loadShipping, setShipping } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

function OrderShipping () {
    const dispatch = useDispatch()
    const loadedShipping = useSelector( state => state.loadShipping.shipping )

    if( loadedShipping.length === 0 ){
        axios.get(CONFIG.API_URL+"/shipping/")
        .then(res => {
            dispatch(loadShipping(res.data.shipping.items))
        })
    }

    const shippingItems = loadedShipping.map(function(item){
        return (
            <label key={item.id} className="box-chooser__item" htmlFor={"transport_and_payment_form_transport_" + item.id }>
                <span className="box-chooser__item__check">
                    <input onChange={ () => dispatch(setShipping(item)) } type="checkbox" id={"transport_and_payment_form_transport_" + item.id } name="transport_and_payment_form[transport]" className="css-checkbox js-order-transport-input" data-id="1" value="1" />
                    <span className="css-checkbox__image"></span>
                </span>
                <span className="box-chooser__item__image">
                    <picture>
                        <img alt="" title="" src="https://placeimg.com/30/30/any" className="image-transport error" itemProp="image" />
                    </picture>
                </span>
                <span className="box-chooser__item__title">
                    <strong className="box-chooser__item__title__name">
                        { item.name }
                    </strong>
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
            <h2 id="js-label-transport_and_payment_form_transport">Shipping selection</h2>
            <div className="box-chooser js-form-group">
                <span className="js-validation-errors-list js-validation-error-list-transport_and_payment_form_transport form-error form-error--inline display-none">
                    <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                    <ul className="form-error__list"></ul>
                </span>
                <div id="transport_and_payment_form_transport">
                    {shippingItems}
                </div>
            </div>
        </div>
    )
}

export default OrderShipping;
