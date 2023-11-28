import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './CourseCard.css';
import Avtr from '../../images/avtr.jpg';

const Card = ({ data }) => {
  const { imageUrl, title, text, star } = data;
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 4; i++) {
      stars.push(
        <i key={i} className={`fa fa-star ${i < star ? 'text-warning' : 'text-white'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card custom-card-body">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" style={imageStyle} />
        <div className="card-body">
          <div className="row">
            <div className="col d-flex align-items-center">
              <i className="fa fa-play-circle play-icon" style={{ fontSize: '2rem', color: 'red' }} />
              <p style={{ marginTop: '8px', marginLeft: '5px' }}>10x lesson</p>
            </div>
            <div className="col">
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <p className="card-title custom-title text-center ">{title}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="card-text description">{text}</p>
          <span
            className="d-block border-top"
            style={{ borderColor: 'rgba(255, 255, 255, 0.5)', marginTop: '10px', marginBottom: '10px' }}
          ></span>
          <div className="row ">
            <div className="col-8">
              <div className="row">
                <div className="col-4 m-0">
                  <img
                    src={Avtr}
                    alt="Avatar"
                    className="img-fluid rounded-circle"
                    style={{ borderRadius: '50%', height: '50px' }}
                  />
                </div>
                <div className="col-7 custom_col_7">
                  <h5 className="mb-0" style={{ fontSize: '16px' }}>
                    Adam Smith
                  </h5>
                  <p className="mb-0" style={{ fontSize: '14px' }}>
                    Python Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <p>50+ Student</p>
            </div>
          </div>
          <span
            className="d-block border-top"
            style={{ borderColor: 'rgba(255, 255, 255, 0.5)', marginTop: '10px', marginBottom: '10px' }}
          ></span>
          <div className="row">
            <div className="col-8">{renderStars()}</div>
            <div className="col-4">
              <p style={{ fontSize: '18px', textDecoration: 'underline' }}>Enroll Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
