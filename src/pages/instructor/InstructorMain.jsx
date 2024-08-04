import React from 'react';
import instructor1 from '../../images/female.jpg';
import instructor2 from '../../images/male.jpg';
import './instructorMain.css';

function InstructorMain() {
    return (
        <main>
            <section>
                <div className="instructors">
                    <div className="tutor">
                        <div className="tut_img">
                            <img src={instructor1} alt="Instructor 1" />
                        </div>
                        <div className="tut_info">
                            <h3>Jane Doe</h3>
                            <p>
                                Jane is a certified yoga instructor with over 10 years of experience. She specializes in various yoga styles, focusing on mindfulness, breath control, and alignment. Jane's classes are designed to promote physical health and mental well-being, making yoga accessible and enjoyable for everyone, from beginners to advanced practitioners.
                            </p>
                        </div>
                    </div>
                    <div className="tutor">
                        <div className="tut_info">
                            <h3>John Smith</h3>
                            <p>
                                John specializes in Vinyasa and Power Yoga. With a background in fitness and wellness, he brings a dynamic and energetic approach to his sessions. John's classes are perfect for those looking to improve their strength, flexibility, and overall fitness while enjoying a challenging and invigorating yoga practice.
                            </p>
                        </div>
                        <div className="tut_img">
                            <img src={instructor2} alt="Instructor 2" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default InstructorMain;
