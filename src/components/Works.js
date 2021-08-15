import React, { useState } from 'react'
import assanaLogo from "../images/assana.png"
import macquarieLogo from "../images/mdg-logo.png"
import wimpLogo from "../images/logo_wimp.jpg"
import projectifyLogo from "../images/projectify-logo-white.png"
import marcommmLogo from "../images/assana.png"

const Works = () => {
    const data = [
        {
            img: "",
            title: "",
            subTitle: "",
            description: "",
            urlTitle: "",
            url: ""
        }
    ]
    const [data] = useState()
    return (
        <section id="works" className="Works">
            <div className="wrapper">
                <h3>Work</h3>
                <p>Our expertise is in creating, building, developing and repositioning brands</p>
            </div>
        </section>
    )
}

export default Works
