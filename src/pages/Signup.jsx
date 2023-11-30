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
      email: "",
      contactNumber: "",
      role: "reader",
      libId: 1,
      role: ""
    },

    validate: (values) => {
      const errors = {};

      // Validate email
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      // Validate password
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      return errors;
    },

    onSubmit: (values) => {
      axios.post("/signup", values).then(function (response) {
        alert("Sign Up Successful:")
        navigate("/login")
      }).catch(function (err) {
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
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-message">{formik.errors.email}</div>
                  ) : null}
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
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error-message">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div class="input-data">
                <p>Role</p>
                <select
                  id="role"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  type="text"
                  required
                  style={{ "width": "600px", "height": "30px" }}>

                  <option value="" label="select role">Select Role:</option>
                  <option value="admin" label="admin">Admin</option>
                  <option value="owner" label="owner">Owner</option>
                  <option value="reader" label="reader">Reader</option>
                </select>
              </div>
              <div class="form-row submit-btn">
                <div class="input-data" id="add-book-btn">
                  <div class="inner"></div>
                  <input type="submit" value="Sign Up" />
                </div>
              </div>
              <p>If already a user please <Link to="/login">Log in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
