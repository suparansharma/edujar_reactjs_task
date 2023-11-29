import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './CoursePartners.css';
import loom from '../../images/loom.png';
import gitlab from '../../images/gitlab.svg';
import hubspot from '../../images/hubspot.png';
import livechat from '../../images/livechat.png';
// livechat  
const CoursePartners = () => {
    const partnersData = [
        { id: 1, name: 'Loom', imageUrl: loom },
        { id: 2, name: 'Gitlab', imageUrl: gitlab },
        { id: 3, name: 'Hubspot', imageUrl: hubspot },
        { id: 4, name: 'Partner', imageUrl: livechat },

        { id: 5, name: 'Loom', imageUrl: loom },
        { id: 6, name: 'Gitlab', imageUrl: gitlab },
        { id: 7, name: 'Hubspot', imageUrl: hubspot },
        { id: 8, name: 'Partner', imageUrl: livechat },

        { id: 9, name: 'Loom', imageUrl: loom },
        { id: 10, name: 'Gitlab', imageUrl: gitlab },
        { id: 11, name: 'Hubspot', imageUrl: hubspot },
        { id: 12, name: 'Partner', imageUrl: livechat },

    ];

    const renderPartnerItems = () => {
        // Assuming each partner occupies two columns
        const itemsPerSlide = 4;
        const slides = [];
        for (let i = 0; i < partnersData.length; i += itemsPerSlide) {
            const slidePartners = partnersData.slice(i, i + itemsPerSlide);
            const slideItems = slidePartners.map(partner => (
                <div key={partner.id} className="partner-item">
                    <div class="row">
                        <div className="col-md-6 col-lg-7 mb-3">
                            <img
                                className="d-block w-150 img-fluid carousel-image"
                                src={partner.imageUrl}
                                alt={`Slide ${i + 1}`}
                                // style={{ height: '100px', width: "100px" }}
                            // style={{ height: 'auto', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 col-lg-5 d-flex align-items-center">
                            <p className='carousel-text'
                            //  style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', margin: 0 }}
                             >
                                {partner.name}
                            </p>
                        </div>
                    </div>
                </div>
            ));
            slides.push(
                <Carousel.Item key={i}>
                    <div className="d-flex justify-content-between w-full px-5">{slideItems}</div>
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <Container className="carousel-container">
            <div className="form-group">
                <fieldset className="the-fieldset">
                    <legend style={{ color: 'white' }} className="the-legend">
                        Our Course Partners
                    </legend>
                    <Carousel id="carouselExampleControls">{renderPartnerItems()}</Carousel>
                </fieldset>
            </div>
        </Container>
    );
};

export default CoursePartners;