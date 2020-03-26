import React from 'react'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Header() {
    const inCartItems = useSelector( state => state.inCart.items )

    let headerCartCount = 0;
    let headerCartAmount = 0;

    if(inCartItems && inCartItems.length > 0 ) {
        headerCartCount = inCartItems.length

        const cartItems = inCartItems.map(function(item){
            headerCartAmount += parseInt(item.prices[0].withVat) * parseInt(item.amount)
        })
    }

    return (
        <div className="web__in">
            <div className="web__header">
                <div className="web__line">
                    <div className="web__container">
                        <header className="header">
                            <div className="header__logo">
                                <a className="logo" href="http://127.0.0.1:8000/">
                                    <img src="files/logo.svg" alt="Online shop" />
                                </a>
                            </div>
                            <div className="header__middle dont-print">
                                <div className="search" id="js-search-autoComplete">
                                    <form action="http://127.0.0.1:8000/search" method="get">
                                        <div className="search__form">
                                            <div className="search__form__input">
                                                <input type="text" name="q" placeholder="Searching" className="input search__input" id="js-search-autoComplete-input" autoComplete="off" data-autocomplete-url="http://127.0.0.1:8000/search/autoComplete/" />
                                                <span className="search__form__icon">
                                                <i className="svg svg-search"></i>
                                                </span>
                                            </div>
                                            <button type="submit" className="btn search__form__button">
                                            Search
                                            </button>
                                        </div>
                                        <div id="js-search-autoComplete-results"></div>
                                    </form>
                                </div>
                                <div className="contact-us">
                                    <span className="contact-us__phone">
                                    <i className="svg svg-phone"></i>
                                    +1-234-567-8989
                                    </span>
                                    <span className="contact-us__days">
                                    (Mon - Sat: 9 - 10 a.m. to 8 - 10 p.m.)
                                    </span>
                                    <span className="contact-us__email">
                                    no-reply@shopsys.com
                                    </span>
                                </div>
                            </div>
                            <div className="header__mobile dont-print">
                                <div className="header__mobile-button header__mobile-button--menu">
                                    <span className="header__mobile-button__in js-responsive-toggle" data-element="js-categories" data-hide-on-click-out="true">
                                    <i className="svg svg-burger-menu"></i>
                                    Menu
                                    </span>
                                </div>
                                <div className="header__mobile-button dont-print">
                                    <a href="tel:+1-234-567-8989" className="header__mobile-button__in">
                                    <i className="svg svg-phone"></i>
                                    </a>
                                </div>
                                <div className="header__mobile-button">
                                    <span className="header__mobile-button__in js-responsive-toggle" data-element="js-user-menu" data-hide-on-click-out="true">
                                    <i className="svg svg-user"></i>
                                    </span>
                                    <div className="header__mobile-button__menu" id="js-user-menu">
                                        <a className="js-login-button" href="http://127.0.0.1:8000/login/" data-url="http://127.0.0.1:8000/login/form">
                                        Log in
                                        </a>
                                        <a href="http://127.0.0.1:8000/registration/">
                                        Registration
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="header__cart dont-print">
                                <div id="js-cart-box" data-reload-url="/cart/box/">
                                    <div className="cart">
                                        <Link className="cart__block" to="/cart/">
                                            <span className="cart__icon">
                                            <i className="svg svg-cart"></i>
                                            </span>
                                            <div className="cart__info js-cart-info">
                                                <strong className="cart__state">{ headerCartCount }</strong>
                                                    &nbsp; item for &nbsp;
                                                    <strong className="cart__state">
                                                        <IntlProvider locale={ CONFIG.LOCALE }>
                                                            <FormattedNumber
                                                                value={ headerCartAmount }
                                                                style={`currency`}
                                                                currency={ CONFIG.CURRENCY }
                                                                />
                                                        </IntlProvider>
                                                    </strong>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="cart-mobile header__mobile-button">
                                        <a href="http://127.0.0.1:8000/cart/" className="header__mobile-button__in">
                                        <i className="svg svg-cart"></i>
                                        <span className="header__mobile-button__in__info">
                                        1
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="header__top dont-print">
                                <div className="header__top__left">
                                    <ul className="menu dont-print">
                                        <li className="menu__item">
                                            <a className="menu__item__link" href="http://127.0.0.1:8000/news/">News</a>
                                        </li>
                                        <li className="menu__item">
                                            <a className="menu__item__link" href="http://127.0.0.1:8000/shopping-guide/">Shopping guide</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__top__right">
                                    <ul className="menu-iconic">
                                        <li className="menu-iconic__item">
                                            <a href="http://127.0.0.1:8000/login/" data-url="http://127.0.0.1:8000/login/form" className="js-login-link-desktop js-login-button menu-iconic__item__link">
                                            <i className="svg svg-user"></i>
                                            <span>
                                            Log in
                                            </span>
                                            </a>
                                        </li>
                                        <li className="menu-iconic__item">
                                            <a href="http://127.0.0.1:8000/registration/" className="js-registration-link-desktop menu-iconic__item__link">
                                            <span>
                                            Registration
                                            </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
            <div className="web__line">
                <div className="web__container">
                    <ul className="js-category-list list-menu dont-print
                        list-menu--root        " id="js-categories">
                        <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
                            <a href="http://127.0.0.1:8000/electronics/" className="list-menu__item__link list-menu__item__link--level-1 ">
                            Electronics
                            <i className="list-menu__item__control svg svg-arrow js-category-collapse-control" data-url="http://127.0.0.1:8000/categoryPanel/2/"></i>
                            </a>
                            <div className="display-none js-category-list-placeholder"></div>
                        </li>
                        <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
                            <a href="http://127.0.0.1:8000/books/" className="list-menu__item__link list-menu__item__link--level-1 ">
                            Books
                            </a>
                            <div className="display-none js-category-list-placeholder"></div>
                        </li>
                        <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
                            <a href="http://127.0.0.1:8000/toys/" className="list-menu__item__link list-menu__item__link--level-1 intented">
                            Toys
                            </a>
                            <div className="display-none js-category-list-placeholder"></div>
                        </li>
                        <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
                            <a href="http://127.0.0.1:8000/garden-tools/" className="list-menu__item__link list-menu__item__link--level-1 intented">
                            Garden tools
                            </a>
                            <div className="display-none js-category-list-placeholder"></div>
                        </li>
                        <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
                            <a href="http://127.0.0.1:8000/food/" className="list-menu__item__link list-menu__item__link--level-1 ">
                            Food
                            </a>
                            <div className="display-none js-category-list-placeholder"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
