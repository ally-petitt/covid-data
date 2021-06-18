import React from 'react'
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <section className="footer container m-0 vw-100 d-flex flex-column justify-content-center align-items-center p-5" 
        style={{backgroundColor: "#333333"}}>
            <div className="social-icons row w-50">
                <FontAwesomeIcon icon={faTwitter} className="text-light col-sm-3 col-6" />
                <FontAwesomeIcon icon={faInstagram} className="text-light col-sm-3 col-6" />
                <FontAwesomeIcon icon={faLinkedin} className="text-light col-sm-3 col-6" />
                <a href="https://github.com/ally-petitt/covid-data" className="col-sm-3 col-6">
                    <FontAwesomeIcon icon={faGithub} className="text-light" />
                </a>
            </div>
            <div className="legal text-secondary mt-4">
                Ally Petitt &copy; 2021 | <span className="text-secondary privacy-policy">Privacy Policy</span>
            </div>
        </section>
    )
}

export default Footer
