import React from 'react'

class OrderShipping extends React.Component {
    render () {
        return (
            <div className="box-order__info__item">
                <h2 id="js-label-transport_and_payment_form_transport">Shipping selection</h2>
                <div className="box-chooser js-form-group">
                    <span className="js-validation-errors-list js-validation-error-list-transport_and_payment_form_transport form-error form-error--inline display-none">
                        <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                        <ul className="form-error__list"></ul>
                    </span>
                    <div id="transport_and_payment_form_transport">
                        <label className="box-chooser__item" for="transport_and_payment_form_transport_0">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_transport_0" name="transport_and_payment_form[transport]" className="css-checkbox js-order-transport-input" data-id="1" value="1" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/transport/default/56.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/transport/default/56.jpg" className="image-transport error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__item__title__name">
                            Czech post
                            </strong>
                            </span>
                            <span className="box-chooser__item__price">
                            CZK121.00
                            </span>
                        </label>
                        <label className="box-chooser__item" for="transport_and_payment_form_transport_1">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_transport_1" name="transport_and_payment_form[transport]" className="css-checkbox js-order-transport-input" data-id="2" value="2" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/transport/default/57.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/transport/default/57.jpg" className="image-transport error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__item__title__name">
                            PPL
                            </strong>
                            </span>
                            <span className="box-chooser__item__price">
                            CZK242.00
                            </span>
                        </label>
                        <label className="box-chooser__item" for="transport_and_payment_form_transport_2">
                            <span className="box-chooser__item__check">
                            <input type="checkbox" id="transport_and_payment_form_transport_2" name="transport_and_payment_form[transport]" className="css-checkbox js-order-transport-input" data-id="3" value="3" />
                            <span className="css-checkbox__image"></span>
                            </span>
                            <span className="box-chooser__item__image">
                                <picture>
                                    <img alt="" title="" src="http://127.0.0.1:8000/content/images/transport/default/58.jpg" loading="lazy" data-src="http://127.0.0.1:8000/content/images/transport/default/58.jpg" className="image-transport error loaded" itemProp="image" />
                                </picture>
                            </span>
                            <span className="box-chooser__item__title">
                            <strong className="box-chooser__item__title__name">
                            Personal collection
                            </strong>
                            <span className="box-chooser__item__title__description">
                            - You will be welcomed by friendly staff!
                            </span>
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

export default OrderShipping;
