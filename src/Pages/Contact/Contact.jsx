import React from "react";
import GoogleMapReact from "google-map-react";
import { Formik } from "formik";

import "./Contact.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="ContactContainer">
      <div style={{ color: "#000" }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "*";
            }
            if (!values.email) {
              errors.email = "*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.phone) {
              errors.phone = "*";
            }
            if (!values.subject) {
              errors.subject = "*";
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
            <form onSubmit={handleSubmit} className="ContactFromContainer">
              <div style={{ color: "red" }}>
                {errors.name && touched.name && errors.name}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="ContactInputs"
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="ContactInputs"
                />
              </div>
              <div style={{ color: "red" }}>
                {errors.phone && touched.phone && errors.phone}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className="ContactInputs"
                />
                {errors.subject && touched.subject && errors.subject}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  className="ContactInputs"
                />
              </div>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="ContactMessageInput"
              />
              <button
                className="ContactFormButton"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div style={{ height: 250, width: 250 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDWJNd-TqwPYFNHw2Unn8s_eYrcQtodgts" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Contact;
