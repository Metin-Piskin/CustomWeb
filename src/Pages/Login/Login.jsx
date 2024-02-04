import React from "react";
import { Formik } from "formik";

import "./Login.css";

const Login = () => {
  return (
    <div className="LoginContainer">
      <div>
        <h2 className="LoginTitle">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="LoginFromContainer">
              <div className="LoginInputContainer">
                {errors.email && touched.email && errors.email}
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="LoginInput"
                />
              </div>
              <div className="LoginInputContainer">
                {errors.password && touched.password && errors.password}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="LoginInput"
                />
              </div>
              <button
                className="LoginFormButton"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
