import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/common/Layout/index'
import Button from '../components/button'
import Head from '../components/common/Head'
import '../styles/styles.scss'
import '../styles/pages.scss'
import headshotImg from '../images/about-pic.jpg'
import linkedinIcon from '../images/linkedin-logo.png'
import githubIcon from '../images/github-logo.png'
import gmailIcon from '../images/gmail_icon.png'



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
    <Layout currentPage="about">
      <Head title="Tiffany Dow | Welcome" />
      <div className="background-container">
        <div className="color-bg"></div>
        <div className="about-container">
          <div className="about-card">
            <img src={headshotImg} alt="headshot-pic" />
            <h2>{data.site.siteMetadata.mainTitle}</h2>
            <div className="line"></div>
            <h5>{data.site.siteMetadata.subTitle}</h5>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tiffany-dow" target="_blank">
                <img src={linkedinIcon} alt="linkedIn icon" />
              </a>
              <a href="https://github.com/tiffanydow1" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
              <a href="mailto: tiffanyjdow@gmail.com">
                <img src={gmailIcon} alt="gmail icon" />
              </a>
            </div>
          </div>
          <div className="about-text">
            <h1>
              <FormattedMessage id="hello" />
            </h1>
            <h3>Here's who I am & what I do</h3>
            <div className="btn-container">
              <Link to="/resume">
                <Button classname="resume-btn" text={"Resume"} />
              </Link>
              <Link to="/projects">
                <Button classname="project-btn" text={"Projects"} />
              </Link>
            </div>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” 
               or double click me to add your own content and make changes to the font.</p>
            <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;



