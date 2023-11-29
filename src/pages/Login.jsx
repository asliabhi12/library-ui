import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";


function SignIn() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {

      password: "",
      email: "",
      libId: 1,
      role: ""
    },

   
    onSubmit: async (values) => {
      try {
        await login(values)
        navigate("/");
      } catch (err) {
        alert(err.response.data);
      }
    }

    // onSubmit: (values) => {
    //   axios.post("/login", values).then(function (response) {
    //     alert("Login Successful: ", response.data.message)
    //     console.log(response)
    //     localStorage.setItem("role", response.data.user.role)
    //     localStorage.setItem("contactNumber",response.data.user.contactNumber)
    //     localStorage.setItem("email", response.data.user.email)
    //     localStorage.setItem("name", response.data.user.name)
    //     localStorage.setItem("libId", response.data.user.libId)
    //     navigate("/")
    //   }).catch(function (err) {
    //     alert(err)
    //   })
    //},
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
                  <input type="submit" value="Login" />
                </div>
              </div>
              <p>If a new user please <Link to="/signup">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
