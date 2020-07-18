import React from 'react';
import { Link } from 'gatsby'
import { connect } from 'react-redux';
import  { bool } from 'prop-types';
import '../styles/mobileMenu.scss';

const Menu = ({ menuItems, open, setOpen }) => (
    <div className={`mobile-menu-container ${open ? 'open' : ''}`} open={open}>
        <ul className="mobile-links">
            {menuItems.map((item, index) => 
                <li key={index}>
                    <Link to={item.url}>
                        <p>{item.title}</p>
                    </Link>        
                </li>
            )}
        </ul>
    </div>
)

Menu.propTypes = {
    open: bool.isRequired,
}

export default connect(state => ({
    menuItems: state.app.menuItems,
}), null)(Menu)





{/* <ul className="nav-links">
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
                // </ul> */}

          