import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {

      password: "",
      email: "",
      libId: 1
    },

    onSubmit: (values) => {
      axios.post("/login", values).then(function (response) {
        alert("Login Successful: ", response)
        console.log(response)
        localStorage.setItem("role", response.data.data)
        navigate("/create-library")
      }).catch(function (err) {
        alert(err)
      })
    },
  });
  return (
    <div id="main">
      {
        localStorage.getItem("role")=="owner"?(<div class="add-book-form">
        <div class="sign-in-logo-left">
          <div class="dark-sign-in-logo">
            <img src="./images/lm-logo-dark.png" alt="" srcset="" />
          </div>
        </div>
        <div class="add-book-right">
          <div class="container">
            <div class="text">Login</div>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-row">

                <div class="input-data">
                  <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Email</label>
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
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Password</label>
                </div>
              </div>
              
              <div class="form-row submit-btn">
                <div class="input-data" id="add-book-btn">
                  <div class="inner"></div>
                  <input type="submit" value="Add Book" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>):<p>You aren't owner</p>
      }

      
    </div>
  );
}

export default SignIn;
