import React from 'react';
import './DifferenceCon.css';
import CircularIcon from '../CircularIcon/CircularIcon';
import grd from '../../images/grd.png'

const DifferenceCon = () => {
  const data = [
    { iconClass: 'fa fa-graduation-cap', number: "300", title: 'Instructor' },
    { iconClass: 'fa fa-users', number: "2,000+", title: 'Students' },
    { iconClass: 'fa fa-video-camera', number: "10,000+", title: 'Video' },
    { iconClass: 'fa fa-users', number: "100000", title: 'Users' },
    // Add more data items as needed
  ];

  return (
    <div className='container'>
      <div className="row main-section ">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h3 className="question">
            What is our <br />
            <span>Difference</span>
          </h3>
          <p className='answer mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto blanditiis ad quisquam esse quasi quas, nulla, doloribus maxime commodi praesentium odio, provident ipsum animi tempore.
          </p>
          <p className='answer mt-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, tempore dolores doloribus et iure reiciendis.
          </p>

          <div className="mt-4">
            <p className='learn-btn'>Learn more</p>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <div className="middle-box">
            <img src={grd} alt="" className="img-responsive " />
          </div>
        </div>

        <div className="col-lg-3 col-md-12">

        <i className='fa fa-star text-warning big-star ' />

          {data.map((item, index) => (
            <CircularIcon key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferenceCon;
