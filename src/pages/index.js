import React from "react"
import { useStaticQuery, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/styles.scss'
import '../styles/pages.scss'
import headshotImg from '../images/about-pic.jpg'

function Home() {
  
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
    <Layout>
      <div className="background-container">
        <div className="about-container">
          <div className="about-card">
            <img src={headshotImg} alt="headshot-pic" />
            <h2>{data.site.siteMetadata.mainTitle}</h2>
            <div className="line"></div>
            <h5>{data.site.siteMetadata.subTitle}</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;

