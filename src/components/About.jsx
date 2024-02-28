import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import AboutBackground from "../assets/About Section Background.png";
import AboutBackgroundImage from "../assets/About Background Image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';
// import { duration } from '@mui/material';

const About = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return ( 
   <div className='about-section-container'>
     <div className='about-background-image-container'>
        <img src={AboutBackground} alt="" />
     </div>
     <div className='about-section-image-container' data-aos="fade-right" data-aos-duration="3000">
        <img src={AboutBackgroundImage} alt="" />
     </div>
     <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading' data-aos="fade-left" data-aos-duration="2000">
            Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className='primary-text' data-aos="fade-left" data-aos-duration="2500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, 
            maiores possimus repellendus facilis exercitationem voluptate hic, 
            alias ut architecto odio illum aliquid magni aut culpa ex. Iusto, praesentium aliquid!
        </p>
        <p className='primary-text' data-aos="fade-left" data-aos-duration="2800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, 
            maiores possimus repellendus facilis exercitationem voluptate hic, 
            alias ut architecto odio illum aliquid magni aut culpa ex. Iusto, praesentium aliquid!
        </p>
        <div className='about-buttons-container'>
            <button className='secondary-button' data-aos="zoom-out">Learn More</button>
            <button className='watch-video-button' data-aos="zoom-in"> <BsFillPlayCircleFill/> Watch Video</button>
        </div>
     </div>
   </div>
  );
};

export default About;