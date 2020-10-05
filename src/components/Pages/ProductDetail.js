import React, { useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { IntlProvider, FormattedNumber } from 'react-intl'
import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Layout/Loader'
import CONFIG from '../../Config'
import noimage from '../../Images/noimage.png'

import { addToCart } from '../../actions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    let pageParams = useParams();

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

    const addItem = (props) => {
        dispatch( addToCart( props, count ) )
    }

    const client = new ApolloClient({
        uri: CONFIG.FEAPI_URL,
        cache: new InMemoryCache()
    });

    const GET_PRODUCT_DETAIL = gql`
        query ProductDetail($ProductId: Uuid!) {
            product (uuid: $ProductId) {
                uuid,
                name
                shortDescription
                link
                unit {
                    name
                }
                availability {
                    name
                }
                stockQuantity
                categories {
                    name
                }
                flags {
                    name
                    rgbColor
                }
                price {
                    priceWithVat
                    priceWithoutVat
                    vatAmount
                }
                images {
                    type
                    position
                    size
                    url
                    width
                    height
                }
            }
        }
    `;

    function GetProductDetailFlags (props) {
        if(props.flags){
            const FlagItems =  props.flags.map( function (FlagItem, i){
                const FlagItemStyle = { "backgroundColor": FlagItem.rgbColor };
                return (
                    <span className="in-flag__item" key={i} style={ FlagItemStyle }>
                        { FlagItem.name }
                    </span>
                )
            });

            return (
                <div className="in-flag dont-print ">
                    { FlagItems }
                </div>
            )
        } else {
            return {}
        }
    }

    function GetProductGallery (props) {
        console.log(props);
        if(props.images){
            const GalleryItems =  props.images.map( function (item, i){
                return (
                    <div className="box-gallery__item slick-slide slick-active" key={i}>
                        <a href={ item.url } className="box-gallery__item__link js-gallery-slide-link" tabIndex="0">
                            <picture>
                                <img alt="" title="" src={ item.url } className="image-product-galleryThumbnail" itemProp="image" />
                            </picture>
                        </a>
                    </div>
                )
            });

            return GalleryItems;
        }else{
            return {}
        }
    }

    const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
        variables: { ProductId: pageParams.productId }
    });

    if (loading) return <Loader />;
    if (error) return <p>Error :( {error.message}</p>;
    console.log(data);
    return (
        <ApolloProvider client={client}>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        <div itemScope="" itemType="http://schema.org/Product">
                            <div className="box-detail">
                                <div className="box-detail__image">
                                    <div className="box-detail__image__main">
                                        <a href={ data.product.images[0] ? data.product.images[0].url : noimage } className="js-gallery-main-image">
                                            <picture>
                                                <source media="(min-width: 480px) and (max-width: 768px)" srcSet="{ data.product.images[0] ? data.product.images[0].url : noimage }" />
                                                <img itemProp="image" alt="" title="" loading="lazy" src={ data.product.images[0] ? data.product.images[0].url : noimage } className="image-product loaded" />
                                            </picture>
                                        </a>
                                    </div>
                                    <GetProductDetailFlags flags={ data.product.flags } />
                                    <div className="box-gallery dont-print js-gallery">
                                        <span className="box-gallery__arrow box-gallery__arrow--prev js-gallery-prev slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
                                        <i className="svg svg-arrow"></i>
                                        </span>
                                        <div className="box-gallery__in js-gallery-slides slick-initialized slick-slider">
                                            <div aria-live="polite" className="slick-list draggable">
                                                <div className="slick-track" htmlStyle="opacity: 1; width: 260px; transform: translate3d(0px, 0px, 0px);" role="listbox">
                                                    <GetProductGallery images={ data.product.images } />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="box-gallery__arrow box-gallery__arrow--next js-gallery-next slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
                                        <i className="svg svg-arrow"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="box-detail__info">
                                    <h1 itemProp="name">
                                        {data.product.name}
                                    </h1>
                                    <div className="box-detail__info__availability">
                                        {data.product.availability.name}
                                    </div>
                                    <div className="js-product-detail-main-add-to-cart-wrapper box-detail-add">
                                        <div itemProp="offers" itemScope="" itemType="http://schema.org/Offer" className="box-detail-add__prices">
                                            <div className="box-detail-add__prices__item box-detail-add__prices__item--main">
                                                <IntlProvider locale={ CONFIG.LOCALE }>
                                                    <FormattedNumber
                                                        value={ data.product.price.priceWithVat }
                                                        style={`currency`}
                                                        currency={ CONFIG.CURRENCY }
                                                        />
                                                </IntlProvider>
                                            </div>
                                            <div className="box-detail-add__prices__item">
                                                <IntlProvider locale={ CONFIG.LOCALE }>
                                                    <FormattedNumber
                                                        value={ data.product.price.priceWithoutVat }
                                                        style={`currency`}
                                                        currency={ CONFIG.CURRENCY }
                                                        />
                                                </IntlProvider>
                                                excluding VAT
                                            </div>
                                            <meta itemProp="priceCurrency" content="EUR" />
                                            <meta itemProp="price" content="139.96" />
                                            <link itemProp="availability" href="http://schema.org/InStock" />
                                        </div>
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
                                            <button type="button" name="add_product_form[add]" className="btn--success  btn id__add_product_form_add" onClick={() => addItem( data.product )}>Add to cart</button>
                                            <input type="hidden" name="add_product_form[productId]" className="input id__add_product_form_productId" value="1" />
                                        </form>
                                    </div>
                                    <dl className="box-detail__info__params">
                                        <dt>
                                            Brand:
                                        </dt>
                                        <dd><a href="http://master.heimdall.netdevelo:7980/sencor/"><span itemProp="brand">Sencor</span></a></dd>
                                        <dt>
                                            Catalog number:
                                        </dt>
                                        <dd>
                                            9177759
                                        </dd>
                                        <dt>
                                            Serial number:
                                        </dt>
                                        <dd>
                                            SLE 22F46DM4
                                        </dd>
                                        <dt>
                                            EAN:
                                        </dt>
                                        <dd>
                                            8845781245930
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="in-tab js-responsive-tabs">
                                <div className="in-tab__head dont-print">
                                    <a href="#" className="in-tab__head__item js-tabs-button active" data-tab-id="description">
                                    Product information
                                    </a>
                                    <a href="#" className="in-tab__head__item js-tabs-button" data-tab-id="accessories">
                                    Accessories
                                    </a>
                                </div>
                                <div className="in-tab__content">
                                    <a href="#" className="in-tab__content__title js-tabs-button active" data-tab-id="description">
                                    Product information
                                    <i className="svg svg-arrow"></i>
                                    </a>
                                    <div className="in-tab__content__item js-tabs-content active" data-tab-id="description">
                                        <div className="in-user-text" itemProp="description">
                                            <p>
                                                {data.product.shortDescription}
                                            </p>
                                            <div className="h3">Technical parameters</div>
                                            <table className="table-params margin-top-20">
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            HDMI
                                                        </th>
                                                        <td>
                                                            Yes
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Resolution
                                                        </th>
                                                        <td>
                                                            1920×1080 (Full HD)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Screen size
                                                        </th>
                                                        <td>
                                                            27
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            Technology
                                                        </th>
                                                        <td>
                                                            LED
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            USB
                                                        </th>
                                                        <td>
                                                            Yes
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="#" className="in-tab__content__title js-tabs-button" data-tab-id="accessories">
                                        Accessories
                                        <i className="svg svg-arrow"></i>
                                    </a>
                                    <div className="in-tab__content__item js-tabs-content" data-tab-id="accessories">
                                        <ul className="list-products js-list js-product-list ">
                                            <li className="list-products__item js-list-products-item">
                                                <div className="list-products__item__in">
                                                    <a href="master.heimdall.netdevelo:7980/kabel-hdmi-a-hdmi-a-m-m-2m-gold-plated-connectors-high-speed-hd/" className="list-products__item__block">
                                                        <h2 className="list-products__item__title js-list-products-item-title">
                                                            Kabel HDMI A - HDMI A M/M 2m gold-plated connectors High Speed HD
                                                        </h2>
                                                        <div className="list-products__item__image dont-print">
                                                            <picture>
                                                                <img alt="Kabel HDMI A - HDMI A M/M 2m gold-plated connectors High Speed HD" title="Kabel HDMI A - HDMI A M/M 2m gold-plated connectors High Speed HD" src="master.heimdall.netdevelo:7980/content/images/product/list/24.jpg" loading="lazy" data-src="master.heimdall.netdevelo:7980/content/images/product/list/24.jpg" className="image-product-list loaded" itemProp="image" />
                                                            </picture>
                                                        </div>
                                                        <div className="list-products__item__info dont-print">
                                                            <p className="list-products__item__info__description">
                                                                A cable HDMI - HDMI AM / M 2 m gold-plated connector High Speed HDMI Cable with Ethernet 1.4 support 1080p FULL HD
                                                            </p>
                                                            <div className="list-products__item__info__price">
                                                                <div className="list-products__item__info__price__item list-products__item__info__price__item--main">
                                                                    €4.74
                                                                </div>
                                                                <div className="list-products__item__info__price__item">
                                                                    €3.92
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
                                                            <button type="button" name="add_product_form[add]" className="btn--success  btn id__add_product_form_add" onClick={() => addItem( data.product )}>Add to cart</button>
                                                            <input type="hidden" name="add_product_form[productId]" className="input id__add_product_form_productId" value="1" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-products__item js-list-products-item">
                                                <div className="list-products__item__in">
                                                    <a href="http://master.heimdall.netdevelo:7980/defender-2-0-spk-480/" className="list-products__item__block">
                                                        <h2 className="list-products__item__title js-list-products-item-title">
                                                            Defender 2.0 SPK-480
                                                        </h2>
                                                        <div className="list-products__item__image dont-print">
                                                            <picture>
                                                                <img alt="Defender 2.0 SPK-480" title="Defender 2.0 SPK-480" src="http://master.heimdall.netdevelo:7980/content/images/product/list/13.jpg" loading="lazy" data-src="http://master.heimdall.netdevelo:7980/content/images/product/list/13.jpg" className="image-product-list loaded" itemProp="image" />
                                                            </picture>
                                                            <div className="in-flag dont-print in-flag--in-list">
                                                                <span className="in-flag__item" htmlStyle="backgroundColor: #efd6ff;">
                                                                New
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="list-products__item__info dont-print">
                                                            <p className="list-products__item__info__description">
                                                                Defender SPK-480, easy to fit into any bag or backpack
                                                            </p>
                                                            <div className="list-products__item__info__price">
                                                                <div className="list-products__item__info__price__item list-products__item__info__price__item--main">
                                                                    €4.76
                                                                </div>
                                                                <div className="list-products__item__info__price__item">
                                                                    €3.93
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
                                                            <button type="button" name="add_product_form[add]" className="btn--success  btn id__add_product_form_add" onClick={() => addItem( data.product )}>Add to cart</button>
                                                            <input type="hidden" name="add_product_form[productId]" className="input id__add_product_form_productId" value="1" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </ApolloProvider>
    )
}

export default ProductDetail;
