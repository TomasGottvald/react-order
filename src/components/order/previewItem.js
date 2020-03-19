import React from 'react'
import CONFIG from '../../config'
import { IntlProvider, FormattedNumber } from 'react-intl';

function PreviewItem(props) {
    return (
        <tr className="table-cart-preview__row">
            <td className="table-cart-preview__cell">
                <strong>{ props.data.amount } pcs</strong>
                { props.data.name }
            </td>
            <td className="table-cart-preview__cell table-cart-preview__cell--price">
                <IntlProvider locale={ CONFIG.LOCALE }>
                    <FormattedNumber
                        value={ props.data.prices[0].withVat*props.data.amount }
                        style="currency"
                        currency={ props.data.prices[0].currency }
                        />
                </IntlProvider>
            </td>
        </tr>
    )
}

export default PreviewItem;
