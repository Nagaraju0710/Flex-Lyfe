

import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import signup_banner from '../images/signup-banner.svg'


const AdminSignUp = () => {
const [SignUpStatus, setSignUpStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: 'Bob@example.com',
    gender:``,
    pass: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   console.log('formData', formData)
   const url = 'http://localhost:8080/adminusers/adminregister'
    
  const res = await  axios.post(url,formData)

  console.log(res)

  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', gap:'2rem', marginTop: '3rem', flexWrap: 'wrap'}}>
    <div>
    <img className='signup-img' style={{width: '350px', margin: '3rem', opacity: '0.9'}} src={signup_banner} alt="" />
    </div>
    <DIV>
      {SignUpStatus ? <h3> SignUp Successful</h3> : <h2>Admin SignUp Page</h2> }
      <form onSubmit={handleSubmit}>
        <div className='boxx'>
          {/* <label>Name:</label> */}
          <input type="text" name="name" placeholder='name' value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>Email:</label> */}
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>gender-Card:</label> */}
          <input maxLength='10' type="text" name="gender" placeholder='Gender' value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input type="password" name="pass" placeholder='Password' value={formData.pass} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to='/adminlogin'><p>Already have an account <sgender style={{color:'#24ADF3'}}>login here</sgender></p></Link>
    </DIV>
    </div>
  );
};

export default AdminSignUp;

const DIV = styled.div`
  width: 400px;
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
    font-size: larger;
    border:  solid 1px #ccc;
    padding: 20px 15px;
    border-radius: 6px;
    color: #333;
    /* border: ${({err})=> err==="true" ? "2px solid red" : "1px solid grey"}; */
  }
  button {
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    background-color: #32A9ED;
    font-size: 18px;
    font-weight: 300;
    border: none;
  }
  h3{
    color: #00bc00;
    font-weight: 500;
    font-size: 24px;
  }
`;
