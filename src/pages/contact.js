import React from 'react'
import Header from '../components/header'
import Layout from '../components/common/Layout/index'

const Contact = () => (
        <Layout>
            <div className="contact-container">
                <Header headerText="Contact Me" />
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" /> 
                    <div className="flex">
                        <label>
                            <p>Name <span>*</span></p>
                            <input type="text" name="name" id="name" />
                        </label>
                        <label>
                            <p>Email <span>*</span></p>
                            <input type="email" name="email" id="email" />
                        </label>
                    </div>
                    <label>
                        <p>Subject</p>
                        <input type="text" name="subject" id="subject" />
                    </label>
                    <label>
                        <p>Message</p>
                        <textarea name="message" id="message" rows="4" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
)

export default Contact;