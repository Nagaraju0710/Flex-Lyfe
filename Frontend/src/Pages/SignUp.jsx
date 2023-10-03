import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import signup_banner from "../images/signup-banner.jpg";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [SignUpStatus, setSignUpStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "name@example.com",
    gender: 'male',
    pass: "",
  });

  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData", formData);
    const url = "http://localhost:8080/users/register";
    const res = await axios.post(url, formData);
    console.log(res);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "3rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <img
          className='signup-img'
          style={{ width: "350px", margin: "3rem", opacity: "0.9" }}
          src={signup_banner}
          alt=''
        />
      </div>
      <DIV>
        {SignUpStatus ? <h3> SignUp Successful</h3> : <h2>SignUp Page</h2>}
        <form onSubmit={handleSubmit}>
          <div className='box'>
            {/* <label>Name:</label> */}
            <input
              style={{ margin: "7px 0" }}
              type='text'
              name='name'
              placeholder='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <label>Email:</label> */}
            <input
              style={{ margin: "7px 0" }}
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <label>gender-Card:</label> */}
            <select style={{ margin: "7px 0" }}  onChange={handleChange} name="gender" id="" value={formData.gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
          </div>
          <div>
            {/* <label>Password:</label> */}

            <input
              style={{ margin: "7px 0" }}
              type='password'
              name='pass'
              placeholder='Password'
              value={formData.pass}
              onChange={handleChange}
              required
            />
          </div>
          <button style={{ padding: "10px 0" }} type='submit'>
            Submit
          </button>
        </form>
        <Link to='/login'>
          <p>
            Already have an account{" "}
            <span style={{ color: "#A0CE5F" }}>login here</span>
          </p>
        </Link>
      </DIV>
    </div>
  );
};

export default SignUp;

const DIV = styled.div`
  /* width: 400px; */
  color: #333;
  padding: 20px;
  /* margin: 40px auto; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  align-items: center;

  /* .boxx{
    display: flex;
  } */

  input {
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    font-size: 1rem;
    border: solid 1px #ccc;
    padding: 20px 15px;
    border-radius: 6px;
    color: #333;
    /* border: ${({ err }) =>
      err === "true" ? "2px solid red" : "1px solid grey"}; */
  }
  button {
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    background-color: #a0ce5f;
    font-size: 18px;
    font-weight: 400;
    border: none;
  }
  h3 {
    color: #00bc00;
    font-weight: 500;
    font-size: 24px;
  }
`;
