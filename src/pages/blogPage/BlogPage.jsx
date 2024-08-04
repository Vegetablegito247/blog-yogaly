import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BlogMain from './BlogMain'
import Header from '../../components/pageHead/Header'
import Footer from '../../components/footer/Footer'

function BlogPage() {
    return (
        <>
            <Navbar />
            <Header head='Blogs' />
            <BlogMain />
            <Footer />
        </>
    )
}

export default BlogPage