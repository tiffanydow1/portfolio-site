import React, { useState } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { LangSwitcher } from '../../common/LangSwitcher'
import HamburgerMenu from '../../hamburgerMenu'
import MobileMenu from '../../mobileMenu'
import { showCurrentPage } from '../../../state/app'
import '../../../styles/navigation.scss'

const Navigation = ({ currentPage, menuItems, dispatch }) => {

    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <div className="colored-block"></div>
                    <h2>Tiffany Dow</h2>
                    <h5 className="line-break">/</h5>
                    <h5>Software Developer</h5>
                </Link>
                <ul className="nav-links">
                    {menuItems.map((item, index) => 
                        <li key={index}>
                            <Link to={item.url}
                                  key={index} 
                                  className={currentPage === item.title ? 'nav-active' : ''}
                                  onClick={() => dispatch(showCurrentPage(item.title))}
                            >
                            <FormattedMessage id={item.title} />
                            </Link>
                        </li>
                    )} 
                    {/* <LangSwitcher /> */}
                </ul>
                <HamburgerMenu open={open} setOpen={setOpen} />
                <MobileMenu open={open} />
            </div>
        </header>
    )
}

export default connect(state => ({
    currentPage: state.app.currentPage,
    menuItems: state.app.menuItems,
}), null)(Navigation)



// class Navigation extends Component {

//     state = {
//         // menuItems: [
//         //     { title: 'about', url: '/' },
//         //     { title: 'resume', url: '/resume' },
//         //     { title: 'projects', url: '/projects' },
//         //     { title: 'contact', url: '/contact' }
//         // ],
//     }
    
//     render() {
        
//         return (
//             <header>
//                 <div className="nav-container">
//                     <Link to="/" className="logo-link">
//                         <div className="colored-block"></div>
//                         <h2>Tiffany Dow</h2>
//                         <h5>/</h5>
//                         <h5>Software Developer</h5>
//                     </Link>
//                     <ul className="nav-links">
//                         {this.props.menuItems.map((item, index) => 
//                             <li key={index}>
//                                 <Link to={item.url}
//                                       key={index} 
//                                       className={this.props.currentPage === item.title ? 'nav-active' : ''}
//                                       onClick={() => this.props.dispatch(showCurrentPage(item.title))}
//                                 >
//                                 <FormattedMessage id={item.title} />
//                                 </Link>
//                             </li>
//                         )} 
//                         {/* <LangSwitcher /> */}
//                     </ul>
//                     <MobileMenu />
//                 </div>
//             </header>
//         )
//     }
// }



