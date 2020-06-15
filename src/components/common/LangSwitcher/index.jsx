import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Context } from '../Context'

const LangSwitcher = () => (
    <Context.Consumer>
        {({ toggleLanguage }) => (
            <button type="button" onClick={toggleLanguage}>
                <FormattedMessage id="language" />
            </button>
        )}
    </Context.Consumer>
)

export { LangSwitcher }