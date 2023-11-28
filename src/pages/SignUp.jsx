import React, { useState } from "react";
import {useFormik} from 'formik'
import { Link } from "react-router-dom";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      username:"",
      password:""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [isSignIn, setSignIn] = useState(false)
  return (
    <div id="main">
      
      <div class="add-book-form">
        <div class="sign-in-logo-left">
          <div class="dark-sign-in-logo">
            <img src="./images/lm-logo-dark.png" alt="" srcset="" />
          </div>
        </div>
        <div class="sign-in-right">
          <div class="text-sign-in">
            <span class = {`${isSignIn ?"black-sign":"grey-sign"}`} onClick={()=>setSignIn(true)}>Sign In </span > <span class = {`${!isSignIn ?"black-sign":"grey-sign"}`} onClick={()=>setSignIn(!isSignIn)}>Sign Up</span>
          </div>
          <div class="sign-in-container">
            <div class="sign-in-text">
                {isSignIn?<p>Please Sign In to continue</p>:<p>Register to LM to get started</p>}
              
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-row">
                <div class="input-data">
                  <input 
                  id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    type="text"
                    required />
                  <div class="underline"></div>
                  <label for="">Username</label>
                </div>
              </div>
              <div class="form-row">
                <div class="input-data">
                <input 
                  id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    required />
                  <div class="underline"></div>
                  <label for="">Password</label>
                </div>
              </div>
              <div class="form-row submit-btn">
                <div class="input-data">
                  <div class="inner"></div>
                  
                  <input type="submit" value={isSignIn?"Sign In":"Sign Up"}/>
                  
                </div>
              </div>
            </form>
            <p>If Librarian Please <Link to="/librarian-login">Click here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
