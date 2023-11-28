import React, { useState } from 'react';
import Avtr from '../../images/avtr.jpg';
/* Testimonials.css */


import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonialsData = [
        {
            title: 'Cat',
            content: 'A cat is a small, typically furry, carnivorous mammal. They are often kept as pets for companionship.A cat is a small, typically furry, carnivorous mammal. They are often kept as pets for companionship.',
            name: 'Mr Omuk',
            imgurl: Avtr,
            work: 'Python Developer',
            start: 4
        },
        {
            title: 'Dog',
            content: 'A dog is known as "man\'s best friend." They come in various breeds and loyal companions, often A dog is known as "man\'s best friend." They come in various breeds and loyal companions, often and loyal companions, often ',
            name: 'Mr Tomuk',
            imgurl: Avtr,
            work: 'Jango Developer',
            start: 3

        },
        // Add more testimonial objects as needed
    ];




    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-7 position-relative">
            <div className="card big-card">
              <div className="card-body">
                <div id="dynamicCarousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {testimonialsData.map((testimonial, index) => (
                      <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="carousel-content">
                          <div className="row">
                            <div className="col-12 col-md-5">
                              <div className="row">
                                <div className="col-4 mb-0">
                                  <img
                                    src={testimonial?.imgurl}
                                    alt="Avatar"
                                    className="img-fluid rounded-circle"
                                    style={{ borderRadius: '50%', height: '50px' }}
                                  />
                                </div>
                                <div className="col-8 p-0">
                                  <h5 className="mb-0" style={{ fontSize: '16px' }}>
                                    {testimonial?.name}
                                  </h5>
                                  <p className="mb-0" style={{ fontSize: '14px' }}>
                                    {testimonial?.work}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-5"></div>
                            <div className="col-12 col-md-2">
                              {[...Array(4)].map((_, starIndex) => (
                                <i
                                  key={starIndex}
                                  className={`fa fa-star ${starIndex < testimonial?.start ? 'text-warning' : 'text-white'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span
                            className="d-block border-top"
                            style={{ borderColor: 'rgba(255, 255, 255, 0.5)', marginTop: '10px', marginBottom: '10px' }}
                          ></span>
                          <p>{testimonial.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12 d-md-none text-center">
                      {/* Display navigation arrows centered for mobile view */}
                      <span
                        aria-hidden="true"
                        style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}
                        onClick={handlePrev}
                      >
                        ←
                      </span>
                      <span
                        aria-hidden="true"
                        style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}
                        onClick={handleNext}
                      >
                        →
                      </span>
                    </div>
                    <div className="col-md-2 d-none d-md-block">
                      {/* Display navigation arrows to the right for desktop and tablet view */}
                      <span
                        aria-hidden="true"
                        style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}
                        onClick={handlePrev}
                      >
                        ←
                      </span>
                      <span
                        aria-hidden="true"
                        style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}
                        onClick={handleNext}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            
          </div>
        </div>
      </div>
      
    );
};

export default Testimonials;
