import React from 'react'
import '../styles/Home.scss';
import vg from "../assets/computer6.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h2>Web developer</h2>
            <p>Solution to all your problems</p>
        </main>
    </div>
    
    <div className="home2">

      <img src={vg} alt="Graphics" />

      <div>
        <p>
          We are your one and only solution to the tech problems
          you face evey day. We are leading tech company whose aim 
          is to increase the problem solving ability in children .  
        </p>
      </div>
    </div>

     <div className="home3" id='about'>
       <div>
        <h1>Who we are ?</h1>
        <p>
        Web Developers design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback. Those interested in a Web Developer position should emphasize in their resumes web design experience, content management knowledge, multimedia programming, time management, and creativity. Successful candidates usually hold at least and Associate's Degree in a relevant field, such as software engineering.
        </p>
       </div>
     </div>

     <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div
          style={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div
          style={{
            animationDelay:"0.5s",
          }}
          >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div
          style={{
            animationDelay:"0.7s",
          }}
          >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>

          <div
          style={{
            animationDelay:"0.1s",
          }}
          >
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
     </div>
    </>
  )
}

export default Home;