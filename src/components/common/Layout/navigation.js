import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { LangSwitcher } from '../../common/LangSwitcher'
import { showCurrentPage } from '../../../state/app'
import '../../../styles/navigation.scss'

class Navigation extends Component {

    state = {
        menuItems: [
            { title: 'about', url: '/' },
            { title: 'resume', url: '/resume' },
            { title: 'projects', url: '/projects' },
            { title: 'contact', url: '/contact' }
        ],
    }
    
    render() {
        console.log(this.props.currentPage, 'cP')
        return (
            <header>
                <div className="nav-container">
                    <Link to="/" className="logo-link">
                        <div className="colored-block"></div>
                        <h2>Tiffany Dow</h2>
                        <h5>/</h5>
                        <h5>Software Developer</h5>
                    </Link>
                    <ul className="nav-links">
                        {this.state.menuItems.map((item, index) => 
                            <li key={index}>
                                <Link to={item.url}
                                      key={index} 
                                      className={this.props.currentPage === item.title ? 'nav-active' : ''}
                                      onClick={() => this.props.dispatch(showCurrentPage(item.title))}
                                >
                                <FormattedMessage id={item.title} />
                                </Link>
                            </li>
                        )} 
                        {/* <LangSwitcher /> */}
                    </ul>
                </div>
            </header>
        )
    }
}

export default connect(state => ({
    currentPage: state.app.currentPage
}), null)(Navigation)

