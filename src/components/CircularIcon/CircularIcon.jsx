import React from 'react'

const CircularIcon = ({ iconClass, number, title }) => {
    return (
      <div className="row mt-5">
        <div className="col-4">
          <div className="circular-icon">
            <i className={iconClass} />
          </div>
        </div>
        <div className="col-8">
          <h2 className='number'>{number}</h2>
          <p className='title'>{title}</p>
        </div>
      </div>
    );
  };

export default CircularIcon