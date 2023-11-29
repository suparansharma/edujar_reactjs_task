import React from 'react';
import './Category.css';

const categories = [
    { name: 'Development', icon1: 'fa fa-play-circle', icon2: 'fa  fa-arrow-up' },
    { name: 'Development', icon1: 'fa fa-wrench', icon2: 'fa f fa-arrow-up' },
    { name: 'Photography', icon1: 'fa fa-camera', icon2: 'fa  fa-arrow-up' },
    { name: 'Music', icon1: 'fa fa-music', icon2: 'fa fa-arrow-up' },
    { name: 'Database', icon1: 'fa fa-database', icon2: 'fa fa-arrow-up' },
    { name: 'Business', icon1: 'fa fa-briefcase', icon2: 'fa fa-arrow-up' },
    { name: 'Marketing', icon1: 'fa fa fa-bullhorn', icon2: 'fa fa-arrow-up' },
    { name: 'Development', icon1: 'fa fa-play-circle', icon2: 'fa fa-arrow-up' },

    // Add more categories as needed
];

const Category = () => {
    return (
        <div className="category container">
            <div className="text-center mt-5">
                <p className="categoryHeader">Most Popular <span>Category</span></p>
            </div>

            <div className="allCategory">
                <div className="row">
                    {categories.map((category, index) => (
                        <div key={index} className="col-md-3">
                            <div className="box">
                                <div className="row">
                                    <div className="col-3  d-flex align-items-center justify-content-center">
                                        <i className={`${category.icon1} play-icon`} style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="col-6 mt-3 first-icon justify-content-center">
                                        <p className='bold-text'>{category.name}</p>
                                    </div>
                                    <div className="col-3 d-flex align-items-center justify-content-center ">
                                        <div className="icon-wrapper " style={{ backgroundColor: 'rgb(12 135 197)', padding: '6px' }}>
                                            <i className={`${category.icon2} play-icon arrow-icon-rt`} style={{ fontSize: '1.8rem', color: 'white' }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
