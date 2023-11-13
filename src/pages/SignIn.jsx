import React from "react";
import {useFormik} from 'formik'

function SignIn() {
  const formik = useFormik({
    initialValues: {
      username:"",
      password:""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div id="main">
      {/* <span
        style="font-size:30px;cursor:pointer"
        id="ham-burger"
        onclick="openNav()"
      >
        &#9776;
      </span> */}
      <div class="add-book-form">
        <div class="sign-in-logo-left">
          <div class="dark-sign-in-logo">
            <img src="./images/lm-logo-dark.png" alt="" srcset="" />
          </div>
        </div>
        <div class="sign-in-right">
          <div class="text-sign-in">
            <span>Sign In </span> <span style={{"color": "gray"}}>Sign Up</span>
          </div>
          <div class="sign-in-container">
            <div class="sign-in-text">
              <p>Please Sign in to Continue</p>
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
                  <input type="submit" value="Sign In" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
