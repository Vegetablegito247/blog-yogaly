import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/pageHead/Header'
import AboutMain from './AboutMain'
import Footer from '../../components/footer/Footer'

function AboutPage() {
    return (
        <>
            <Navbar />
            <Header head='About Us' />
            <AboutMain />
            <Footer />
        </>
    )
}

export default AboutPage