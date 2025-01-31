import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

 
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  fullName: Yup.string()
    .required("Full name is required")
    .matches(/^[A-Za-z ]+$/, "Full name must contain only letters and spaces"),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date cannot be in the future"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?(\d.*){3,}$/, "Invalid phone number"),
  address: Yup.string().required("Address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignupForm = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f7fa",  
      }}
    >
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          dob: "",
          phone: "",
          address: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}

      >
        {() => (
          <Form
            style={{
              maxWidth: "600px",  
              width: "100%",
              padding: "15px",  
              border: "1px solid #ddd",
              borderRadius: "8px", 
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(143, 141, 11, 0.1)",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#333" }}>Sign Up</h2>

             
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email" style={{ color: "#333" }}>Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: "12px" }} />
            </div>

             
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="fullName" style={{ color: "#333" }}>Full Name:</label>
              <Field
                type="text"
                name="fullName"
                id="fullName"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="dob" style={{ color: "#333" }}>Date of Birth:</label>
              <Field
                type="date"
                name="dob"
                id="dob"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage name="dob" component="div" style={{ color: "red", fontSize: "12px" }} />
            </div>

             
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="phone" style={{ color: "#333" }}>Phone:</label>
              <Field
                type="tel"
                name="phone"
                id="phone"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage name="phone" component="div" style={{ color: "red", fontSize: "12px" }} />
            </div>

           
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="address" style={{ color: "#333" }}>Address:</label>
              <Field
                type="text"
                name="address"
                id="address"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage
                name="address"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

             
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="password" style={{ color: "#333" }}>Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

           
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
