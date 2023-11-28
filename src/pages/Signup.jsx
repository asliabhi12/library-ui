import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email:"",
      contactNumber: "",
      role: "reader",
      libId:1
    },

    onSubmit: (values) => {
      axios.post("/signup", values).then(function(response){
        alert("posted successfully:", response)
        navigate("/")
      }).catch(function (err){
        alert(err)
      })
    },
  });
  return (
    <div id="main">
      
      <div class="add-book-form">
      <div class="sign-in-logo-left">
      <div class="dark-sign-in-logo">
            <img src="./images/lm-logo-dark.png" alt="" srcset="" />
          </div>
          </div>
        <div class="add-book-right">
          <div class="container">
            <div class="text">Sign Up</div>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-row">
                <div class="input-data">
                  <input
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Name</label>
                </div>
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
                    id="contactNumber"
                    name="contactNumber"
                    onChange={formik.handleChange}
                    value={formik.values.contactNumber}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Phone No</label>
                </div>
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
      </div>
    </div>
  );
}

export default SignIn;
