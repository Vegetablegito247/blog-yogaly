import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/pageHead/Header'
import InstructorMain from './InstructorMain'
import Footer from '../../components/footer/Footer'

function InstructorPage() {
    return (
        <>
            <Navbar />
            <Header head='Our Instructors' />
            <InstructorMain />
            <Footer />
        </>
    )
}

export default InstructorPage