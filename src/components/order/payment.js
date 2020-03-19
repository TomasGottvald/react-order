import React from 'react'

class OrderPayment extends React.Component {
    render () {
        return (
            <div className="box-order__info__item">
                <h2 id="js-label-transport_and_payment_form_payment">Payment selection</h2>
                <div className="box-chooser box-chooser--smaller js-form-group">
                    <span className="js-validation-errors-list js-validation-error-list-transport_and_payment_form_payment form-error form-error--inline display-none">
                        <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                        <ul className="form-error__list"></ul>
                    </span>
                    <div id="transport_and_payment_form_payment">
                        <label className="box-chooser__item" for="transport_and_payment_form_payment_0">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_payment_0" name="transport_and_payment_form[payment]" className="css-checkbox js-order-payment-input" data-id="1" value="1" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/payment/default/53.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/payment/default/53.jpg" className="image-payment error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__title__name">
                            Credit card
                            </strong>
                            <span className="box-chooser__item__title__description">
                            - Quick, cheap and reliable!
                            </span>
                            </span>
                            <span className="box-chooser__item__price">
                            CZK100.00
                            </span>
                        </label>
                        <label className="box-chooser__item" for="transport_and_payment_form_payment_1">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_payment_1" name="transport_and_payment_form[payment]" className="css-checkbox js-order-payment-input" data-id="2" value="2" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/payment/default/55.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/payment/default/55.jpg" className="image-payment error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__title__name">
                            Cash on delivery
                            </strong>
                            </span>
                            <span className="box-chooser__item__price">
                            CZK50.00
                            </span>
                        </label>
                        <label className="box-chooser__item" for="transport_and_payment_form_payment_2">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_payment_2" name="transport_and_payment_form[payment]" className="css-checkbox js-order-payment-input" data-id="3" value="3" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/payment/default/54.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/payment/default/54.jpg" className="image-payment error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__title__name">
                            Cash
                            </strong>
                            </span>
                            <span className="box-chooser__item__price">
                            Free
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderPayment;
