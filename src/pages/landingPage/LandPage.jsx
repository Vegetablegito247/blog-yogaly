import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Landhead from './Landhead'
import LandMain from './LandMain'
import Footer from '../../components/footer/Footer'

function LandPage() {
    return (
        <>
            <Navbar />
            <Landhead />
            <LandMain />
            <Footer />
        </>
    )
}

export default LandPage