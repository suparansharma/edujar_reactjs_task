import React, { useState } from 'react';
import Avtr from '../../images/avtr.jpg';
import Avtr2 from '../../images/avtr2.png';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';
import photo4 from '../../images/photo4.png';
import photo5 from '../../images/photo5.png';
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
      imgurl: Avtr2,
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
        <div className="col-md-7 position-relative">
          <div className="card big-card">
            <div className="card-body">
              <div id="dynamicCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {testimonialsData.map((testimonial, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                      <div className="carousel-content">
                        <div className="row">
                          <div className="col-12 col-md-5">
                            <div className="row mt-4">
                              <div className="col-4 mb-0">
                                <img
                                  src={testimonial?.imgurl}
                                  alt="Avatar"
                                  className="img-fluid rounded-circle"
                                  style={{ borderRadius: '50%', height: '50px' }}
                                />
                              </div>
                              <div className="col-8 p-0">
                                <h5 className="mt-0" style={{ fontSize: '16px' }}>
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
                        <p className='py-4'>{testimonial.content}</p>
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

        <div className="col-md-5 testers">
          <div className=''>
            <div className="row">
              <div className="col-6 col-md-8">
                <img src={photo1} alt="" />
              </div>
              <div className="col-6 col-md-4 position-relative">
                <img className='position-absolute bottom-0'  src={photo2} alt="" />
              </div>
            </div>


            <div className="row ">
              <div className="col-6 col-md-4 position-relative">
                <div className='position-absolute bottom-0'>
                  <img className='sm:height-full right-0 bottom-0'  src={photo3} alt="" />
                </div>
              </div>
              <div className="col-6 col-md-8">
                <img  src={photo4} alt="" />
              </div>
            </div>


            <div className="row " >
              <div className="col-12 col-md-8 position-relative">
                <div className='position-absolute end-0'>
                  <img  src={photo5} alt="" />
                </div>
              </div>
              <div className='col-md-4'>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
};

export default Testimonials;