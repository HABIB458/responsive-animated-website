import React from 'react'
import '../App.css';
import Comp from './Comp';

//col-md-6 md means, that numerical value is applied to them i.e. 6 will applied to the screen size of medium and aboves.
const Home = () => {
  return (
    <>
      <Comp 
        name = 'Grow your business with'
        imgSrc = "https://www.datocms-assets.com/22642/1617790238-faire-decoller-sa-marque.svg"
        visit = '/services'
        btnName = 'Get Started'
      />
    </>
  )
}

export default Home;