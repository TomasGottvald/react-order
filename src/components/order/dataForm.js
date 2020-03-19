import React from 'react'
import OrderPreview from './preview'

class OrderDataForm extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            telephone: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    render () {
        return (
            <div className="web__line">
                <div className="web__container">
                    <div className="box-order">
                        <div className="box-order__info">
                            <h2>Personal data</h2>
                            <fieldset>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_firstName" className="required">
                                        First name
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input onChange={this.handleChange} value={this.state.firstName}
                                            type="text" id="order_personal_info_form_firstName"
                                            name="firstName" required="required" className="input" />

                                    <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_firstName form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_lastName" className="required">
                                        Last name
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input onChange={this.handleChange} value={this.state.lastName}
                                        type="text" id="order_personal_info_form_lastName" name="lastName" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_lastName form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_email" className="required">
                                        Email
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input onChange={this.handleChange} value={this.state.email}
                                             type="email" id="order_personal_info_form_email" name="email" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_email form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_telephone" className="required">
                                        Telephone
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input onChange={this.handleChange} value={this.state.telephone}
                                             type="text" id="order_personal_info_form_telephone" name="telephone" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_telephone form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                            </fieldset>
                            <h2>Company data <span className="heading-addition">(If I buy on the company behalf)</span></h2>
                            <fieldset>
                                <div className="form-line">
                                    <div className="form-choice">
                                        <input type="checkbox" id="order_personal_info_form_companyCustomer" name="order_personal_info_form[companyCustomer]" className="js-checkbox-toggle css-checkbox" data-checkbox-toggle-container-id="js-company-fields" value="1" />
                                        <label className="css-checkbox__image" for="order_personal_info_form_companyCustomer">
                                        I buy on company behalf
                                        </label>
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_companyCustomer form-error form-error--choice display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </div>
                                </div>
                                <div id="js-company-fields">
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_companyName" className="required">
                                            Company name
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_companyName" name="order_personal_info_form[companyName]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_companyName form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_companyNumber" className="required">
                                            Company number
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_companyNumber" name="order_personal_info_form[companyNumber]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_companyNumber form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_companyTaxNumber">
                                            Tax number
                                            :                            </label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_companyTaxNumber" name="order_personal_info_form[companyTaxNumber]" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_companyTaxNumber form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </fieldset>
                            <h2>Billing data <span className="heading-addition">(This address will be on the tax invoice)</span></h2>
                            <fieldset>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_street" className="required">
                                        Street
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input type="text" id="order_personal_info_form_street" name="order_personal_info_form[street]" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_street form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_city" className="required">
                                        City
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input type="text" id="order_personal_info_form_city" name="order_personal_info_form[city]" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_city form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_postcode" className="required">
                                        Postcode
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <input type="text" id="order_personal_info_form_postcode" name="order_personal_info_form[postcode]" required="required" className="input" />
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_postcode form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_country" className="required">
                                        Country
                                        :                <span className="form-input-required">*</span></label>
                                    </dt>
                                    <dd>
                                        <select id="order_personal_info_form_country" name="order_personal_info_form[country]" className="input">
                                            <option value="1">Czech republic</option>
                                            <option value="2">Slovakia</option>
                                        </select>
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_country form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                            </fieldset>
                            <h2>Shipping address <span className="heading-addition">(Products will be delivered to this address)</span></h2>
                            <fieldset>
                                <div className="form-line">
                                    <div className="form-choice">
                                        <input type="checkbox" id="order_personal_info_form_deliveryAddressFilled" name="order_personal_info_form[deliveryAddressFilled]" className="js-checkbox-toggle css-checkbox" data-checkbox-toggle-container-id="js-delivery-address-fields" value="1" />
                                        <label className="css-checkbox__image" for="order_personal_info_form_deliveryAddressFilled">
                                        I want to deliver products to different address than the billing one
                                        </label>
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryAddressFilled form-error form-error--choice display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </div>
                                </div>
                                <div id="js-delivery-address-fields">
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryFirstName" className="required">
                                            First name
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryFirstName" name="order_personal_info_form[deliveryFirstName]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryFirstName form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryLastName" className="required">
                                            Last name
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryLastName" name="order_personal_info_form[deliveryLastName]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryLastName form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryCompanyName">
                                            Company
                                            :                            </label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryCompanyName" name="order_personal_info_form[deliveryCompanyName]" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryCompanyName form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryTelephone">
                                            Telephone
                                            :                            </label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryTelephone" name="order_personal_info_form[deliveryTelephone]" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryTelephone form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryStreet" className="required">
                                            Street
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryStreet" name="order_personal_info_form[deliveryStreet]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryStreet form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryCity" className="required">
                                            City
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryCity" name="order_personal_info_form[deliveryCity]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryCity form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryPostcode" className="required">
                                            Postcode
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <input type="text" id="order_personal_info_form_deliveryPostcode" name="order_personal_info_form[deliveryPostcode]" required="required" className="input" />
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryPostcode form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl className="form-line">
                                        <dt>
                                            <label for="order_personal_info_form_deliveryCountry" className="required">
                                            Country
                                            :                <span className="form-input-required">*</span></label>
                                        </dt>
                                        <dd>
                                            <select id="order_personal_info_form_deliveryCountry" name="order_personal_info_form[deliveryCountry]" className="input">
                                                <option value="1">Czech republic</option>
                                                <option value="2">Slovakia</option>
                                            </select>
                                            <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_deliveryCountry form-error form-error--line display-none">
                                                <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                                <ul className="form-error__list"></ul>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </fieldset>
                            <h2>Note</h2>
                            <fieldset>
                                <dl className="form-line">
                                    <dt>
                                        <label for="order_personal_info_form_note">
                                        Contact us
                                        :                            </label>
                                    </dt>
                                    <dd>
                                        <textarea id="order_personal_info_form_note" name="order_personal_info_form[note]" className="input input--textarea" rows="8"></textarea>
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_note form-error form-error--line display-none">
                                            <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </dd>
                                </dl>
                            </fieldset>
                            <h2>Terms and conditions</h2>
                            <div className="box-condition">
                                <div className="box-condition__in">
                                    <iframe title="Terms and conditions" name="js-terms-and-conditions-frame" src="http://127.0.0.1:8000/order/terms-and-conditions/" width="100%"></iframe>
                                </div>
                                <div className="box-condition__control">
                                    <button id="js-terms-and-conditions-print" className="btn btn--small" type="button">Print</button>
                                    <a href="http://127.0.0.1:8000/order/terms-and-conditions-download/" className="btn btn--small">Download</a>
                                </div>
                            </div>
                            <div className="form-line">
                                <div className="form-choice">
                                    <div className="form-choice__label">
                                        <input type="checkbox" id="order_personal_info_form_legalConditionsAgreement" name="order_personal_info_form[legalConditionsAgreement]" required="required" className="css-checkbox" value="1" />
                                        <label for="order_personal_info_form_legalConditionsAgreement" className="css-checkbox__image">
                                        I agree with <a href="http://127.0.0.1:8000/terms-and-conditions/" target="_blank" rel="noopener noreferrer">terms and conditions</a> and <a href="http://127.0.0.1:8000/privacy-policy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                        </label>
                                        <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_legalConditionsAgreement form-error form-error--choice display-none">
                                            <span className="form-error__icon">
                                            <i className="svg svg-warning"></i>
                                            </span>
                                            <ul className="form-error__list"></ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-line">
                                <div className="form-choice">
                                    <input type="checkbox" id="order_personal_info_form_newsletterSubscription" name="order_personal_info_form[newsletterSubscription]" className="css-checkbox" value="1" />
                                    <label className="css-checkbox__image" for="order_personal_info_form_newsletterSubscription">
                                    I want to subscribe to the newsletter
                                    </label>
                                    <span className="js-validation-errors-list js-validation-error-list-order_personal_info_form_newsletterSubscription form-error form-error--choice display-none">
                                        <span className="form-error__icon"><i className="svg svg-warning"></i></span>
                                        <ul className="form-error__list"></ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <OrderPreview />
                    </div>
                    <div className="in-action">
                        <div className="in-action__right">
                            <button type="submit" id="order_personal_info_form_save" name="order_personal_info_form[save]" className="btn btn--success in-action__btn in-action__btn--big btn">Finish the order</button>
                        </div>
                        <div className="in-action__left">
                            <button type="submit" name="flow_order_transition" value="back" className="btn in-action__btn js-no-validate-button">
                            Back to shipping and payment selection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDataForm;
