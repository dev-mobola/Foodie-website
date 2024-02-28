import React from "react";
import { motion } from "framer-motion"
import Navbar from "./Navbar";
import BannerBackground from "../assets/Banner Background.png";
import BannerImage from "../assets/Banner Image.png";
import { FiArrowRight } from "react-icons/fi";

const homeVariants = {
  hidden: {opacity: 0}, 
    display: {opacity: 1}
}
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
       
          <motion.div 
            className="home-text-section">
            <h1 className="primary-heading">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
          </motion.div>

          <motion.div 
            className="home-image-section"
            variants={ homeVariants }
            initial={{opacity: 0}}
            animate={{opacity: 1, x: -20}}
            transition={{duration: 1.5, delay: 0.8}}>
            <img src={BannerImage} alt="" />
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
