import React from 'react'

class Footer extends React.Component {
    render () {
        return (
            <div className="web__footer web__footer--with-cookies js-eu-cookies-consent-footer-gap">
                <div className="footer">
                    <div className="web__line web__line--grey clearfix dont-print">
                        <div className="web__container">
                            <form name="subscription_form" method="post" action="/newsletter/subscribe-email/" noValidate="noValidate" data-on-submit="ajaxSubmit" data-success="false">
                                <div className="footer__newsletter">
                                    <div className="footer__newsletter__text">
                                        <p>
                                            Do you want to receive the newest information about our shop? Subscribe to our email newsletter.
                                        </p>
                                    </div>
                                    <div className="footer__newsletter__form">
                                        <div className="footer__newsletter__form__wrap">
                                            <div className="footer__newsletter__form__in">
                                                <input type="email" id="subscription_form_email" name="subscription_form[email]" required="required" placeholder="Enter email" className="footer__newsletter__input input" />
                                                <span className="js-validation-errors-list js-validation-error-list-subscription_form_email form-error  display-none">
                                                    <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                    <ul className="form-error__list"></ul>
                                                </span>
                                            </div>
                                            <button type="submit" id="subscription_form_send" name="subscription_form[send]" className="footer__newsletter__form__btn btn">Log in</button>
                                        </div>
                                        <span className="js-validation-errors-list js-validation-error-list-subscription_form in-message in-message--alert display-none">
                                            <ul className="in-message__list"></ul>
                                        </span>
                                        <div className="form-choice">
                                            <input type="checkbox" id="subscription_form_privacyPolicyAgreement" name="subscription_form[privacyPolicyAgreement]" required="required" className="css-checkbox" value="1" />
                                            <label className="css-checkbox__image form-choice__label" htmlFor="subscription_form_privacyPolicyAgreement">
                                                I agree with <a href="http://127.0.0.1:8000/privacy-policy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                                <span className="js-validation-errors-list js-validation-error-list-subscription_form_privacyPolicyAgreement form-error form-error--choice display-none">
                                                    <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                    <ul className="form-error__list"></ul>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" id="subscription_form__token" name="subscription_form[_token]" className="input" value="Y-P7PLwSOkZ3BuiirJU_XCJtPiEuntJaHk5YFdmQN70" />
                            </form>
                        </div>
                    </div>
                    <div className="web__line">
                        <footer className="web__container footer__bottom">
                            <div className="footer__bottom__copyright dont-print">
                                Made with passion by <a href="http://www.shopsys-framework.com/">Shopsys Framework</a>
                            </div>
                            <div className="footer__bottom__articles">
                                +1-234-567-8989
                                no-reply@shopsys.com
                                <ul className="menu dont-print">
                                    <li className="menu__item">
                                        <a className="menu__item__link" href="http://127.0.0.1:8000/terms-and-conditions/">Terms and conditions</a>
                                    </li>
                                </ul>
                                <a className="menu__item__link" href="http://127.0.0.1:8000/contact/">Contact</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
