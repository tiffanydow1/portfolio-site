import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import '../styles/navigation.scss'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

function Navigation() {
    // Non-Page Components use StaticQuery
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        mainTitle
                        subTitle
                    }
                }
            }
        `
    )
    
    return (
        <header>
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <div className="colored-block"></div>
                    <h2>{data.site.siteMetadata.mainTitle}</h2>
                    <h5>/</h5>
                    <h5>{data.site.siteMetadata.subTitle}</h5>
                </Link>
                <ul className="nav-links">
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about">About</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                </ul>
            </div>
        </header>
    )
}

export default Navigation;
