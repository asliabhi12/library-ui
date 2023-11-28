import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


function CreateLibrary() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: ""
    },

    onSubmit: (values) => {
      axios.post("/library", values).then(function (response) {
        alert("Library created Successfully", response)
        navigate("/libraries")
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
            <div class="text">Create Library</div>
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
                  <label for="">Libray Name</label>
                </div>
              </div>
             
              
              <div class="form-row submit-btn">
                <div class="input-data" id="add-book-btn">
                  <div class="inner"></div>
                  <input type="submit" value="Create Library" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLibrary;
