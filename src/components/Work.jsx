import React from 'react';
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData =[
    {
        image: PickMeals,
        title: "Pick Meals",
        text: "Lorem ipsun dolor sit amet consectetur. Maecenas orci et sagittis dui facilisi bibendum.",
    },
    {
        image: ChooseMeals,
        title: "Choose How Often",
        text: "Lorem ipsun dolor sit amet consectetur. Maecenas orci et sagittis dui facilisi bibendum.",
    },
    {
        image: DeliveryMeals,
        title: "Fast Deliveries",
        text: "Lorem ipsun dolor sit amet consectetur. Maecenas orci et sagittis dui facilisi bibendum.",
    },
   ];
   return (
   <div className='work-section-wrapper'>
     <div className='work-section-top'>
         <p className='primary-subheading'>Work</p>
         <h1 className='primary-heading'  data-aos="fade-up" data-aos-duration="2000">How It Works</h1>
         <p className='primary-text' data-aos="fade-down" data-aos-duration="2500">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sapiente quos quia molestiae alias,
             architecto laudantium, est non assumenda nulla repudiandae placeat ipsa distinctio numquam enim.
         </p>
     </div>
     <div className='work-section-bottom'>
        {
            workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'  data-aos="flip-left" data-aos-duration="2500">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ) )
        }

     </div>
  </div>
   );
}

export default Work;