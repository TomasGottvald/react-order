import React, { useState } from 'react'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import CONFIG from '../../Config'
import noimage from '../../Images/noimage.png'

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
        dispatch( addToCart( props.data.node, count ) )
    }

    console.log(props);
    return (
        <li className="list-products__item js-list-products-item">
            <div className="list-products__item__in">
                <Link to={{ pathname: `/product-detail/${props.data.node.uuid}/${props.data.node.link}`}} className="list-products__item__block">
                    <h3 className="list-products__item__title js-list-products-item-title">
                        { props.data.node.name }
                    </h3>

                    <div className="list-products__item__image dont-print">
                        <picture>
                            <img alt={ props.data.node.name } title={ props.data.node.name }
                             loading="lazy" src={ props.data.node.images[0] ? props.data.node.images[0].url : noimage } className="image-product-list" itemProp="image" />
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
                            { props.data.node.shortDescription}
                        </p>
                        <div className="list-products__item__info__price">
                            <div className="list-products__item__info__price__item list-products__item__info__price__item--main">
                                <IntlProvider locale={ CONFIG.LOCALE }>
                                    <FormattedNumber
                                        value={ props.data.node.price.priceWithVat }
                                        style={`currency`}
                                        currency={ CONFIG.CURRENCY }
                                        />
                                </IntlProvider>
                            </div>
                            <div className="list-products__item__info__price__item">
                                <IntlProvider locale={ CONFIG.LOCALE }>
                                    <FormattedNumber
                                        value={ props.data.node.price.priceWithoutVat }
                                        style={`currency`}
                                        currency={ CONFIG.CURRENCY }
                                        />
                                </IntlProvider>
                            </div>
                        </div>

                        <div className="list-products__item__info__availability">
                            { props.data.node.availability.name }
                        </div>
                    </div>
                </Link>

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
