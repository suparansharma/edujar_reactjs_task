import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xs-12 about-company">

              <h2 className='footer_heading'>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="30"
            height="30"
            className="w-6 h-6 logoIcon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
                Heading</h2>
              <p className="pr-5 text-white-50 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                ante mollis quam tristique convallis{" "}
              </p>
              <p>

              </p>
            </div>

            <div className="col-lg-3 col-12 links text-center">
              <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>

              <div className="row mt-4">
                <div className="col">
                  <ul className="m-0 p-0">
                    <li className='children-text' style={{ opacity: 0.5 }}>About </li>
                    <li className='children-text' style={{ opacity: 0.5 }}>Course</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="m-0 p-0">
                    <li className='children-text' style={{ opacity: 0.5 }}>Blog</li>
                    <li className='children-text' style={{ opacity: 0.5 }}>Contact</li>
                  </ul>
                </div>
              </div>
            </div>



            <div className="col-lg-3 col-xs-12 ">
              <h4 className="mt-lg-0 mt-sm-3 contact  ">Contact us</h4>
              <p className="mb-0 mt-4 children-text" style={{ opacity: 0.5 }}>
                <i className="fa fa-phone mr-3" style={{ marginRight: "10px" }} />
                (541) 754-3010
              </p>
              <p style={{ opacity: 0.5 }} className='children-text'>
                <i className="fa fa-envelope-o mr-3" style={{ marginRight: "10px" }} />
                info@hsdf.com
              </p>
            </div>



            <div className="col-lg-3 col-xs-12 location ">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p style={{ opacity: 0.5 }} className='mt-4 children-text'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 location"> {/* Adjust the size by changing w-4 h-4 */}
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                22, Lorem ipsum dolor, consectetur adipiscing</p>

            </div>



          </div>
          <div className="row mt-5 copyright">
            <div className="col-10 mt-5 ">
              <p className="">
                <small className="text-white-50 footer-text">© 2023. All Rights Reserved.</small>
              </p>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <i className="fa circle fa-facebook icon-font ml-2 mr-2" />
              <i className="fa fa-instagram icon-font circle ml-2 mr-2" />
              <i className="fa fa-linkedin icon-font circle ml-2 mr-2" />
              <i className="fa fa-twitter icon-font circle ml-2 mr-2" />

            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Footer