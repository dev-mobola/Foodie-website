import React from 'react';
import ProfilePic from "../assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading' data-aos="fade-down-left" data-aos-duration="2500">What They Are Saying</h1>
            <p className='primary-text' data-aos="fade-down-right" data-aos-duration="2500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo a dolore inventore? 
                Aliquam unde accusamus odio eos vero illum voluptino.
            </p>
        </div>
        <div className='testimonial-section-bottom' data-aos="zoom-in" data-aos-duration="2000">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium placeat perferendis at aliquid quos, 
                architecto tempora odit quam maxime velitiste.
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  );
};

export default Testimonial;