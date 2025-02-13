import React from "react";
import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
export const Home =()=>{
    return<>
       
        <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
           <h1>Welcome</h1>
           <br></br>
             <h1><b>India's leading event &
                Wedding management company</b></h1>
             
               <br></br>
                    <div className="btn btn-group">
                             <a href="/contact">
                              <button className="btn"> Connect Now</button></a>
                            <NavLink to="/service">
                            <button className="btn secondary-btn">learn more</button></NavLink>
                    </div>
                    </div>
            <div className="hero-image">
              <img
                src="/img/event.jpeg"
                alt="coding buddies "
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
         </main>

        <Analytics/>

        <section className="section-hero">
        <div className="container grid grid-two-cols">
                <div className="hero-image">
                    <img src="/img/th.jpeg" alt="home" width="500" height="300"/>
                </div>

        
                <div className="hero-content">
                
              
                <p>Our vision is to be the leading event management company, renowned for creating extraordinary and seamless experiences that inspire, connect, and celebrate life’s most important moments. We strive to blend creativity, innovation, and precision in every event we curate, ensuring unforgettable memories for our clients and their guests. With a strong commitment to excellence,
                    sustainability, and customer satisfaction, we aim to set new standards in the industry by delivering bespoke, immersive, and flawlessly executed events. Through a fusion of global trends and local expertise, we aspire to transform visions into reality, making every occasion truly exceptional.</p>
                
                </div>
                
            </div>    
        </section>
        
        
    </>
};

