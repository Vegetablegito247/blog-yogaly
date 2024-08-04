import React from 'react';
import yogaPlant from '../../images/yogaPlant.jpg';
import goat from '../../images/goatClass.jpg';
import { Link } from 'react-router-dom';
import './style/landMain.css';

function LandMain() {
    return (
        <main>
            <section>
                <div className="upcoming">
                    <div className="upcoming_head">
                        <h1>Upcoming Classes</h1>
                    </div>
                    <div className="classes">
                        <div className="class">
                            <img src={yogaPlant} alt="" />
                            <h3>Female Plant Yoga (Embracing nature)</h3>
                        </div>
                        <div className="class">
                            <img src={goat} alt="" />
                            <h3>Goat yoga training</h3>
                        </div>
                    </div>
                    <div className="more_class">
                        <h4>
                            Besides our regular schedule, we also frequently host visiting teachers and speakers.
                        </h4>
                        <Link to=''>View More</Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="techniques">
                    <div className="tech_detail">
                        <p>
                            With an emphasis on breathing techniques and meditation, we promote thoughtful and reflexive yoga to promote both physical and mental well-being.
                        </p>
                    </div>
                    <div className="tech_more">
                        <p>Learn more about our studio and philosophy around yoga.</p>
                        <Link to=''>Learn More</Link>
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
    )
}

export default LandMain