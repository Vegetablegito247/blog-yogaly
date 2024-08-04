import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer_list">
                <div className="footer_item">
                    <h3>Yogaly</h3>
                </div>
                <div className="footer_item">
                    <div className="foot_contact">
                        <span>256A Agbomalu Crescent</span>
                        <span>Lekki, Nig</span>
                        <span>(234)-706-456-0337</span>
                    </div>
                </div>
                <div className="footer_item">
                    <div className="foot_pages">
                        <Link to=''>About</Link>
                        <Link to=''>Our Instructors</Link>
                        <Link to=''>Classes</Link>
                        <Link to=''>Blogs</Link>
                    </div>
                </div>
                <div className="footer_item">
                    <div className="foot_social">
                        <Link to=''>
                            <FaTwitter />
                        </Link>
                        <Link to=''>
                            <FaInstagram />
                        </Link>
                        <Link to=''>
                            <FaFacebook />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer