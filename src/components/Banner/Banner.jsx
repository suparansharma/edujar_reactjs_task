// Banner.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import boy from '../../images/boy.png';
import banner from '../../images/banner.png';
import './Banner.css';
import 'font-awesome/css/font-awesome.min.css';

const Banner = () => {


  return (
    <>
      <Container className="banner-container">
        <Row>
          <Col lg={6} md={12}>
            <h2 className="banner-text banner-title">
              <span className="highlighted-text">Best Courses</span> are <br />waiting to enrich <br />your skill
            </h2>

            <p className="banner-text banner-description">
              Provides you with the latest online learning system and material that help your knowledge growing
            </p>

            <div className="search mt-5">
              <i className="fa fa-search" />
              <input
                type="text"
                className="form-control search-box"
                placeholder="What to learn"
              />
              <button className="btn btn-primary">Search</button>
            </div>

          </Col>
          <Col lg={6} md={12}>
            <img src={banner} className="img-fluid banner-image" alt="Boy" />
            {/* <img src={boy} className="img-fluid" alt="Boy" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
