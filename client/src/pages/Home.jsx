import React from "react";

import { Analytics } from "../components/Analytics";
export const Home =()=>{
    return<>
       
        <main>
            < section className="setion-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                <p>We are the </p>
                <h1>welcome</h1>
                <p>are you ready</p>
                <div className="btn btn-group">
                    <a href="/contact">
                    <button className="btn">Connect now</button></a>
                
                
                    <a href="/services">
                    <button className="btn secondary-btn">learn more</button></a>
                
                </div>
                </div>


                <div className="hero-image">
                    <img src="/img/home.png" alt="home" width="400" height="500"/>
                </div>

            </div>
                </section>
            
        </main>

        <Analytics/>

        <section className="section-hero">
        <div className="container grid grid-two-cols">
                <div className="hero-image">
                    <img src="/img/home.png" alt="home" width="400" height="500"/>
                </div>

        
                <div className="hero-content">
                <p>We are the </p>
                <h1>welcome</h1>
                <p>are you ready</p>
                <div className="btn btn-group">
                    <a href="/contact">
                    <button className="btn">Connect now</button></a>
                
                
                    <a href="/services">
                    <button className="btn secondary-btn">learn more</button></a>
                
                </div>
                </div>
            </div>    
        </section>
        
    </>
};

