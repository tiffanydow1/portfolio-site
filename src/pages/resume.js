import React, { Component } from 'react';
import Head from '../components/common/Head'
import Header from '../components/header'
import Layout from '../components/common/Layout/index'
import Button from '../components/button'
import '../styles/styles.scss'
import '../styles/pages.scss'

import { jobData } from '../resumeData.js'
import { educationData } from '../resumeData.js' 
import { skillsData } from '../resumeData.js'

class Resume extends Component {

    state = {
        resumeInfo: null,
        educationInfo: null,
        skillsInfo: null
    }

    componentDidMount() {
        this.getResumeData();
    }

    getResumeData = () => {
        const jobText = jobData.map((data) => {
            return (
                <div className="resume-block">
                    <h4 className="date-text">{data.date}</h4>
                    <div className="resume-text">
                        <div className="left-container">
                            <h6>{data.title}</h6>
                            <p>{data.company}</p>
                            <p>{data.location}</p>
                        </div>
                        <div className="right-container">
                            <ul>
                                {data.jobDescriptions && data.jobDescriptions.map((item) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                            {data.link ? ( <a href={data.link} target="_blank">Sample of Work</a>) : ''}
                        </div>
                    </div>
                </div>
            )
        })

        const educationText = educationData.map((data) => {
            return (
                <div className="education">
                    <div className="education-image">
                        <h4 className="date-text">{data.date}</h4>
                        <img src={data.logoLink} alt="logo" />
                    </div>
                    
                    <div className="education-text">
                        <h6>{data.schoolName}</h6>
                        <p>{data.program}</p>
                    </div>
                </div>
            )
        })

        const skillsText = skillsData.map((data) => {
            return (
                <div className="skills">
                    <div className="colored-block"></div>
                    <h4 className="skills-text">{data}</h4>
                </div>
            )
        })

        this.setState({
            resumeInfo: jobText,
            educationInfo: educationText,
            skillsInfo: skillsText
        })
    }


    render() {
        
        return (
            <Layout>
                <div className="resume-container">
                    <Head title="Tiffany Dow | Resume" />
                    <Header headerText="Resume" />
                    <div className="body-container">
                        <div className="title-container">
                            <h2>Experience</h2>
                            <Button classname="download-btn" text={"Download CV"} />
                        </div>
                        {this.state.resumeInfo}
                        <h2>Education</h2>
                        <div className="resume-block">
                            {this.state.educationInfo}
                        </div>
                        <h2>Skills</h2>
                        <div className="resume-block skills-block">
                            {this.state.skillsInfo}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Resume;


