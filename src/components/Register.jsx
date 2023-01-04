import { useState } from "react";
import "../App.css";

export default function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNum) {
      errors.phoneNum = "Phone Number is required";
    } else if (values.phoneNum.length < 9) {
      errors.phoneNum = "This is not a valid phone number";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Registration Successful</div>
        ) : (
          <div></div>
        )}
        <div className="ui form">
          <div className="field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstName}</p>
          <div className="field">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastName}</p>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <input
              type="number"
              name="phoneNum"
              placeholder="Phone Number"
              value={formValues.phoneNum}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phoneNum}</p>
          <button className="fluid ui button blue">Register</button>
        </div>
      </form>
    </div>
  );
}
