import React from 'react';
import { NavLink } from 'react-router-dom';


const Comp = (props) => {
  return (
    <>
        <section id="header" className='d-flex align-items-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <strong className="brand-name">Habib the tech server</strong>
                  </h1>
                  <h2 className='my-3' style={{fontWeight: '400', fontSize: '1em',color: '#747474'}}>
                    We're the team of Developers to make you the best creative and ineractive cross-platform Applications
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className='btn-get-started py-2 px-2'>
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className='img-fluid Animated' alt="home image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comp;