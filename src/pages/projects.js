import React, { Component } from 'react';
import Head from '../components/common/Head'
import Header from '../components/header'
import Layout from '../components/common/Layout/index'
import '../styles/styles.scss'
import '../styles/pages.scss'

import { projectsData } from '../projectsData.js'

class Projects extends Component {

    state = {
        projectsInfo: null
    }

    componentDidMount() {
        this.getProjectData()
    }

    getProjectData = () => {
        const projectText = projectsData.map((data) => {
            return (
                <div className="project-block">
                    <div className="left-container">
                        <div className="block-header">
                            <h2>{data.projectName}</h2>
                            <p>{data.company}</p>
                        </div>
                        <div className="block-text">
                            <p>{data.projectDescription}</p>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src="" alt="project image" />
                    </div>
                </div> 
            )
        })

        this.setState({
            projectsInfo: projectText
        })
    }

    render() {
        return (
            <Layout>
                <div className="projects-container">
                    <Head title="Tiffany Dow | Projects" />
                    <Header headerText="Projects" />
                    <div className="body-container">
                        <p className="intro-text">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click edit text or 
                        double click me to add your own comment and make changes to the font.</p>
                        {this.state.projectsInfo}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Projects;