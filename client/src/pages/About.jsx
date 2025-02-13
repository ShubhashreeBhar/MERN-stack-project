import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
           
              <h2><i>
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}</i>
                </h2>
                <br></br>
              <h1>Our vision</h1>
              <p>
              At Eventique, we turn your vision into reality with seamless event planning and flawless execution. Whether it's a corporate conference, a grand wedding, a product launch, or a live concert, our expert team ensures every detail is meticulously crafted to perfection. From creative concept development to vendor coordination and on-the-day management, we handle it all so you can enjoy a stress-free, unforgettable experience. Let us bring your event to life with innovation, precision, and a touch of elegance. Your event, our expertise!
              <br></br>
              </p>
              
              
            </div>
            <div className="hero-image">
              <img
                src="/img/wed.jpg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
        
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-image">
              <img
                src="/img/conference.jpg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              
             
              <h1>What we do?</h1>
              
              <p>
              We specialize in creating extraordinary experiences through seamless event planning and execution. Whether it’s a corporate conference, a luxury wedding, a brand activation, or a live concert, we bring creativity, precision, and professionalism to every detail. From concept development to vendor coordination and on-the-day management, we ensure your event runs flawlessly. Our expertise spans corporate gatherings, social celebrations, exhibitions, and virtual events, making every occasion memorable. With a passion for innovation and a commitment to excellence, Eventique transforms your vision into reality—because every event deserves to be unforgettable.
              <br></br>


<b>Would you like any customization based on your company's style or services? 😊</b>
              </p>
              
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <NavLink to="/service">
                <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
};
