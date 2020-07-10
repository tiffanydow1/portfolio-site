import React from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import { Context } from '../Context'

const Head = ({title}) => (
    <Context.Consumer>
        {({ lang }) => (
            <Helmet>
                <html lang={lang} />
                <title>{title}</title>
            </Helmet>
        )}
    </Context.Consumer>
)

export default injectIntl(Head)


// const Head = ({ title, intl: { formatMessage } }) => (
//     <Context.Consumer>
//         {({ lang }) => (
//             <Helmet>
//                 <html lang={lang} />
//                 <title>
//                     {/* {formatMessage({ id: title })} */}
//                     Tiffany Dow | Portfolio
//                 </title>
//             </Helmet>
//         )}
//     </Context.Consumer>
// )