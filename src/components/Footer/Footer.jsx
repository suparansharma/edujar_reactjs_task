import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xs-12 about-company">
              <h2>Heading</h2>
              <p className="pr-5 text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                ante mollis quam tristique convallis{" "}
              </p>
              <p>

              </p>
            </div>

            <div className="col-lg-3 col-xs-12 links text-center">
              <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>

              <div className="row">
                <div className="col">
                  <ul className="m-0 p-0">
                    <li style={{ opacity: 0.5 }}>About </li>
                    <li style={{ opacity: 0.5 }}>Course</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="m-0 p-0">
                    <li style={{ opacity: 0.5 }}>Blog</li>
                    <li style={{ opacity: 0.5 }}>Contact</li>
                  </ul>
                </div>
              </div>

            </div>


            <div className="col-lg-3 col-xs-12">
              <h4 className="mt-lg-0 mt-sm-3">Contact us</h4>
              <p className="mb-0" style={{ opacity: 0.5 }}>
                <i className="fa fa-phone mr-3" style={{ marginRight: "10px" }} />
                (541) 754-3010
              </p>
              <p style={{ opacity: 0.5 }}>
                <i className="fa fa-envelope-o mr-3" style={{ marginRight: "10px" }} />
                info@hsdf.com
              </p>
            </div>



            <div className="col-lg-3 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p style={{ opacity: 0.5 }}>22, Lorem ipsum dolor, consectetur adipiscing</p>

            </div>



          </div>
          <div className="row mt-5 copyright">
            <div className="col-10">
              <p className="">
                <small className="text-white-50">© 2023. All Rights Reserved.</small>
              </p>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <i className="fa circle fa-facebook-square text-black ml-2 mr-2" />
              <i className="fa fa-linkedin-square circle ml-2 mr-2" />
              <i className="fa fa-linkedin-square circle ml-2 mr-2" />
              <i className="fa fa-linkedin-square circle ml-2 mr-2" />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Footer