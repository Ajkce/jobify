import React from "react";
import { useEffect, useState } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormComponent } from "../components/index";
import { Alert } from "../components";
import { useGlobalContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    ismember: true,
  };
const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useGlobalContext();

  //global state and useNavigate

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, ismember } = values;
    
    if (!email || !password || (!ismember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (ismember) {
    loginUser(currentUser)
    } else {
      registerUser(currentUser);
    }
  };

  const toggleMember = () => {
    setValues({ ...values, ismember: !values.ismember });
  };

  useEffect(() => {
if(user){
  setTimeout(() => {
navigate('/')
  }, 3000)
}
  }, [user])
  return (
    <Wrapper className="full-page">
      <form action="" className="form" onSubmit={handleSubmit}>
        <Logo></Logo>
        <h3>{values.ismember ? "Login" : "Register"}</h3>

        {/* Alert */}
        {showAlert && <Alert></Alert>}

        {/* Name input */}

        {!values.ismember && (
          <FormComponent
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormComponent>
        )}

        {/* Email Input */}

        <FormComponent
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        ></FormComponent>

        {/* password */}
        <FormComponent
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        ></FormComponent>

        <button
          type="submit"
          className="btn submit-btn"
          disabled={isLoading}
        
        >
          submit
        </button>
        <p>
          {values.ismember ? "Not a member yet ?" : "Already a member ?"}

          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.ismember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
