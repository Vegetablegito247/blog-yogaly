import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/pageHead/Header'
import ClassMain from './ClassMain'
import Footer from '../../components/footer/Footer'

function ClassPage() {
    return (
        <>
            <Navbar />
            <Header head='Classes' />
            <ClassMain />
            <Footer />
        </>
    )
}

export default ClassPage