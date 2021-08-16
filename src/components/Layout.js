import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Services from './Services'
import Works from './Works'

const Layout = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Works />
            <Contact />
        </div>
    )
}

export default Layout
