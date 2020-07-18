import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/common/Layout/index'
import Button from '../components/button'
import Head from '../components/common/Head'
import ScrollArrow from '../components/scrollArrow'
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
            <div className="btn-container">
              <Link to="/resume">
                <Button classname="resume-btn" text={"Resume"} />
              </Link>
              <Link to="/projects">
                <Button classname="project-btn" text={"Projects"} />
              </Link>
            </div>
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
            <h3>I'm Tiffany, a software developer based in Montreal, QC.</h3>
            <div className="btn-container">
              <Link to="/resume">
                <Button classname="resume-btn" text={"Resume"} />
              </Link>
              <Link to="/projects">
                <Button classname="project-btn" text={"Projects"} />
              </Link>
            </div>
            <p>I aim to create seamless user experiences. I'm most experienced as a MERN (MongoDB, Express, React & Node.js) developer however as a life-long learner, I'm always looking to improve my skills in different areas.</p>
          </div>
        </div>
      </div>
      {/* <ScrollArrow /> */}
    </Layout>
  )
}

export default Home;



