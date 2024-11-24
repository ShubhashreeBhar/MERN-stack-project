import React,{useState} from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };
  
  export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
  
    const [userData, setUserData] = useState(true);
  
    const { user } = useAuth();
  
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
  
      setUserData(false);
    }
  
    // lets tackle our handleInput
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setContact({
        ...contact,
        [name]: value,
      });
    };
  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:4000/api/form/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });
  
        if (response.ok) {
          setContact(defaultContactFormData);
          const data = await response.json();
          console.log(data);
          alert("Message send successfully");
        }
      } catch (error) {
        alert("Message not send");
        console.log(error);
      }
    };
  
    
    return<>
    <section className="section-contact">
        <div className="contact-content container">
            <h1 className="main-heading">Contact us</h1>
        </div>

        <div className="container grid grid-two-cols">
            <div className="contact-img">
                <img src="/img/contact.png" alt="we are always ready to help"/>
            </div>
            <section className="section-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                            type="text"
                            name="username"
                            placeholder="username"
                            id="username"
                            required
                            autoComplete="off"
                            value={contact.username}
                            onChange={handleInput}
                          />  
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="email"
                            id="email"
                            required
                            autoComplete="off"
                            value={contact.email}
                            onChange={handleInput}
                          />  
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                            
                            name="message"
                            placeholder="message"
                            id="message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            value={contact.message}
                            onChange={handleInput}
                            required
                          ></textarea> 
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </section>
        </div>
    </section>
    
    </>
    
};