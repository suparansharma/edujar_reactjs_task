import React from 'react';
import Container from 'react-bootstrap/Container';
import './CoursesNav.css';

const CoursesNav = () => {
    return (
        <Container>
            <div className="row coursesnav ">
                <div className="col-md-4 popular-headline">
                    <h2 className='nav-headline'> <span>Popular</span> Courses</h2>
                </div>
                <div className="col-md-8">
                    <div className="row custom-nav-row text-center">
                        <div className="col-6 col-md-3 custom-nav-col">Design</div>
                        <div className="col-6 col-md-3 custom-nav-col">Development</div>
                        <div className="col-6 col-md-3 custom-nav-col">Business</div>
                        <div className="col-6 col-md-3 custom-nav-col">Data Science</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CoursesNav;
