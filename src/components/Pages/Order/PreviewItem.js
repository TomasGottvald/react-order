import React from 'react'
import CONFIG from '../../../Config'
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
                        value={ props.data.priceWithVat*props.data.amount }
                        style={`currency`}
                        currency={ CONFIG.CURRENCY }
                        />
                </IntlProvider>
            </td>
        </tr>
    )
}

export default PreviewItem;
