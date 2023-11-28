// DifferenceCon.jsx

import React from 'react';
import './DifferenceCon.css';
import CircularIcon from '../CircularIcon/CircularIcon';
import graduate from '../../images/graduate.jpg'

const DifferenceCon = () => {
  const data = [
    { iconClass: 'fa fa-play-circle play-icon', number: 300, title: 'Instructor' },
    { iconClass: 'fa fa-star', number: 400, title: 'Another Title' },
    { iconClass: 'fa fa-star', number: 400, title: 'Another Title' },
    { iconClass: 'fa fa-star', number: 400, title: 'Another Title' },
    // Add more data items as needed
  ];

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h3 className="question">
            What is our <br />
            <span>Difference</span>
          </h3>
          <p className='answer mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto blanditiis ad quisquam esse quasi quas, nulla, doloribus maxime commodi praesentium odio, provident ipsum animi tempore.
          </p>
          <p className='answer mt-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, tempore dolores doloribus et iure reiciendis.
          </p>

          <div className="mt-4">
          <p className='learn-btn'>Learn more</p>
        </div>
        </div>
        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
  <div className="middle-box">
    <img src={graduate} alt="Your Image Alt Text" className="img-fluid" />
  </div>
</div>

        <div className="col-lg-3 col-md-12">
          {data.map((item, index) => (
            <CircularIcon key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferenceCon;
