import React from 'react'
import '../styles/Services.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import computer1 from "../assets/computer1.jpg";
import computer2 from "../assets/computer2.jpg";
import computer3 from "../assets/computer3.jpg";
import computer4 from "../assets/computer4.jpg";
import computer7 from "../assets/computer7.jpg";
import group from "../assets/group.jpeg";



const Services = () => {
  return <div className='services'>
    <Carousel
     infiniteLoop
     autoPlay
     showStatus={false}
     showArrows={false}
     showThumbs={false}
    //  showIndicators={false}
     interval={2000} 
        >
      <div>
        <img src={computer1} alt="Item1" />
        <p className='legend'>Full Stack</p>
      </div>
      <div>
        <img src={computer2} alt="Item1" />
        <p className='legend'>Full Stack</p>
      </div>
      <div>
        <img src={computer3} alt="Item1" />
        <p className='legend'>Full Stack</p>
      </div>
      <div>
        <img src={computer4} alt="Item1" />
        <p className='legend'>Full Stack</p>
      </div>
      <div>
        <img src={group} alt="Item1" />
        <p className='legend'>Full Stack</p>
      </div>
      
      <div>
        <img src={computer7} alt="Item2" />
        <p className='legend'>Peer-To-Peer supports</p>
      </div>
    </Carousel>
  </div>
  
};

export default Services;