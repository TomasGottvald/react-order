import React, { useState } from 'react'
import { IntlProvider, FormattedNumber } from 'react-intl'
import CONFIG from '../../config'

import { addToCart } from '../../actions'
import { useDispatch } from 'react-redux'

function ProductItem (props) {
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);

    const setNewCount = ( newCount ) => {
        setCount( newCount );
    }

    const increaseCount = () => {
        const newValue = count + 1;
        setCount( newValue );
    }

    const decreaseCount = () => {
        const newValue = count - 1;
        setCount( newValue );
    }

    const addItem = () => {
        dispatch(addToCart( props.data, count))
    }

    return (
        <li className="list-products__item js-list-products-item">
            <div className="list-products__item__in">
                <a href={ props.data.link } className="list-products__item__block">
                    <h3 className="list-products__item__title js-list-products-item-title">
                        { props.data.name }
                    </h3>

                    <div className="list-products__item__image dont-print">
                        <picture>
                            <img alt={ props.data.name } title={ props.data.name }
                            src="https://placeimg.com/300/300/any" loading="lazy" data-src="https://placeimg.com/300/300/any" className="image-product-list loaded" itemProp="image" />
                        </picture>

                        <div className="in-flag dont-print in-flag--in-list">
                            <span className="in-flag__item">
                                TOP
                            </span>
                            <span className="in-flag__item">
                                Action
                            </span>
                        </div>
                    </div>

                    <div className="list-products__item__info dont-print">
                        <p className="list-products__item__info__description">
                            Television LED, 55 cm diagonal, 1920x1080 Full HD, DVB-T MPEG4 tuner with USB recording and playback
                        </p>
                        <div className="list-products__item__info__price">
                            <div className="list-products__item__info__price__item list-products__item__info__price__item--main">
                                <IntlProvider locale={ CONFIG.LOCALE }>
                                    <FormattedNumber
                                        value={ props.data.prices[0].withVat }
                                        style={`currency`}
                                        currency={ props.data.prices[0].currency }
                                        />
                                </IntlProvider>
                            </div>
                            <div className="list-products__item__info__price__item">
                                <IntlProvider locale={ CONFIG.LOCALE }>
                                    <FormattedNumber
                                        value={ props.data.prices[0].withoutVat }
                                        style={`currency`}
                                        currency={ props.data.prices[0].currency }
                                        />
                                </IntlProvider>
                            </div>
                        </div>

                        <div className="list-products__item__info__availability">
                            In stock
                        </div>
                    </div>
                </a>

                <div className="list-products__item__action">
                    <form>
                        <span className="form-input-spinbox js-spinbox">
                            <input type="number" name="add_product_form[quantity]" required="required"
                                onChange={({ target }) => setNewCount(target.value)}
                                className="form-input-spinbox__input input-no-style js-spinbox-input input id__add_product_form_quantity"
                                data-spinbox-min="1"
                                value={count} />
                            <button type="button" className="btn-no-style form-input-spinbox__btn js-spinbox-plus" onClick={() => increaseCount() }>+</button>
                            <button type="button" className="btn-no-style form-input-spinbox__btn form-input-spinbox__btn--minus js-spinbox-minus" onClick={() => decreaseCount() }>-</button>
                        </span>
                        <button type="button" name="add_product_form[add]" className="btn--success  btn id__add_product_form_add" onClick={() => addItem()}>Add to cart</button>
                        <input type="hidden" name="add_product_form[productId]" className="input id__add_product_form_productId" value="1" />
                    </form>
                </div>
            </div>
        </li>
    )
}

export default ProductItem;
