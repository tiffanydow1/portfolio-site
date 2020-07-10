import React, { Component } from 'react';
import Head from '../components/common/Head'
import Header from '../components/header'
import Layout from '../components/common/Layout/index'
import Button from '../components/button'
import '../styles/styles.scss'
import '../styles/pages.scss'

import { jobData } from '../resumeData.js'

class Resume extends Component {

    state = {
        resumeInfo: null
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
                            <h5>{data.firstPara}</h5>
                            <h5>{data.secondPara}</h5>
                        </div>
                    </div>
                </div>
            )
        })

        this.setState({
            resumeInfo: jobText
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
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Resume;


