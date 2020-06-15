import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Context } from '../Context'

const Provider = ({ children, lang, toggleLanguage }) => (
    <Context.Provider 
        value={{ lang, toggleLanguage: () => toggleLanguage()}}
    >
        {children}
    </Context.Provider>
)

const enhance = compose(
    withState('lang', 'handleLanguage', 'en'),
    withHandlers({
        toggleLanguage: ({ lang, handleLanguage }) => () => {
            if (lang === 'fr') {
                handleLanguage('en')
                localStorage.setItem('lang', 'en')
            } else {
                handleLanguage('fr')
                localStorage.setItem('lang', 'fr')
            }
        }
    }),
    lifecycle({
        componentDidMount() {
            const localLang = localStorage.getItem('lang')
            if (localLang) {
                this.props.handleLanguage(localLang)
            } else {
                this.props.handleLanguage(navigator.language.split('-')[0])
            }
        }
    })
)

export default enhance(Provider)