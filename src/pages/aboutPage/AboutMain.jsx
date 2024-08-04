import React from 'react';
import aboutImage from '../../images/man.jpg'; // Add the correct path to the about image
import './aboutMain.css';

function AboutUs() {

    return (
        <main>
            <section>
                <div className="about_us">
                    <div className="about_img">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                    <div className="about_info">
                        <h3>Discover the Essence of Tranquility and Wellness</h3>
                        <br />
                        <p>
                            Welcome to our yoga studio, a serene space dedicated to promoting physical and mental well-being through the practice of yoga. Our studio embraces the beauty of nature, offering unique classes such as Female Plant Yoga and Goat Yoga Training. With an emphasis on breathing techniques and meditation, we aim to provide thoughtful and reflexive yoga practices.
                        </p>
                        <br />
                        <p>
                            Our experienced instructors are passionate about guiding you on your yoga journey, whether you're a beginner or an advanced practitioner. We frequently host visiting teachers and speakers, bringing fresh perspectives and new techniques to our community.
                        </p>
                        <br />
                        <p>
                            Join us to explore the profound benefits of yoga and become part of our supportive and welcoming community.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="newsletter">
                    <div className="news_cont">
                        <div className="newsletter_head">
                            <h3>Subscribe to our Newsletter</h3>
                            <p>Sign up to recieve news and update</p>
                        </div>
                        <div className="newsletter_form">
                            <form action="">
                                <div className="news_inp">
                                    <div className="news_ctrl">
                                        <input type="text" id="" placeholder='First name' />
                                    </div>
                                    <div className="news_ctrl">
                                        <input type="text" id="" placeholder='Last name' />
                                    </div>
                                    <div className="news_ctrl">
                                        <input type="email" id="" placeholder='Email' />
                                    </div>
                                </div>
                                <div className="news_btn">
                                    <button>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutUs;
