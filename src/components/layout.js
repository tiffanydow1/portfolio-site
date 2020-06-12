import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Navigation from './navigation'
import '../styles/layout.scss'


function Layout({ children }) {
    
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;