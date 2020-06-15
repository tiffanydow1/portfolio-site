import React from 'react'
// import en from 'react-intl/locale-data/en'
// import fr from 'react-intl/locale-data/fr'
import { IntlProvider } from 'react-intl'
import { Context } from '../Context'
import Provider from './Provider' 
import Navigation from './navigation'
import localEng from '../../../messages/en.json'
import localFr from '../../../messages/fr.json'
import '../../../styles/layout.scss'

import '@formatjs/intl-relativetimeformat/dist/locale-data/en'
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr'

//addLocaleData(en, fr)

const Layout = ({ children }) => (
    <Provider>
        <Context.Consumer>
            {({ lang }) => (
                <IntlProvider locale={lang} messages={lang === 'en' ? localEng : localFr}>
                    <Navigation />
                    {children}
                </IntlProvider>
            )}
        </Context.Consumer>
    </Provider>
)

export default Layout


// function Layout({ children }) {
    
//     return (
//         <div>
//             <Navigation />
//             {children}
//         </div>
//     )
// }

// export default Layout;