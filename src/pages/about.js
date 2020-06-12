import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'

function About({ data }) {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <Header headerText="About Page Header" />
                <h1>About Page</h1>
                {/* <p>{data.site.siteMetadata.title}</p> */}
            </div>
        </Layout>
    )
}

export default About;

// Page queries live outside of the component definition - by convention at the end of a page 
// component file - and are only available on page components.
// export const query = graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `