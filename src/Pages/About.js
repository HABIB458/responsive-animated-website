import React from 'react';
import Comp from './Comp';

const About = () => {
  return (
    <Comp 
        name = 'About This Organiztion'
        imgSrc = "https://www.datocms-assets.com/22642/1617790238-faire-decoller-sa-marque.svg"
        visit = '/contact'
        btnName = 'Contact Now'
      />
  )
}

export default About;