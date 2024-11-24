import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login =()=>{
    const [user,setUser]= useState({
        
        email:"",
        password:"",

    });
    const Navigate=useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput=(e)=>{
        console.log(e);
        let name =e.target.name;
        let value =e.target.value;
        setUser({
            ...user,
            [name]:value,
        })

    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
      try{
        const response=  await fetch(`http://localhost:4000/api/auth/login`,
            {method:"POST",
              headers:{
                "Content-Type":"application/json",
              } ,
              body:JSON.stringify(user), 
            });
            console.log("login form", response);
            const res_data = await response.json();

            if(response.ok){
                //alert("login successful");
                storeTokenInLS(res_data.token);
                setUser({email:"",password:""});
                toast.success("Login successful");
                Navigate("/");
                
            }
            else{
                toast.error(
                    res_data.extraDetails ? res_data.extraDetails : res_data.message
                  );
                  console.log("invalid credential");  
            }

            console.log("login form",response);
        }
        catch(error){
            console.log(error);
        }
    };

    return<>
        <section>
            <main>
                <div className="section-registrstion">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/img/login.png" alt="login form"width="400"height="400" />
                        </div>

                    

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">login form</h1>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                
                                
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                    type="email"
                                    name="email"
                                    placeholder="enter your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                    type="password"
                                    name="password"
                                    placeholder="enter your password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}/>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">
                                    Register Now</button>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    
    </>
};
