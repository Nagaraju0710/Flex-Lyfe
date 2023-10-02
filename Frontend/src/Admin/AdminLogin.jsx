
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/AuthReducer/action";


import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import login_banner from '../images/login-banner.svg'
import axios from "axios";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()

  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };

  const [user, setUser] = useState(localUser);
  const {isAuth,name} = user
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async() => {
    console.log(email,password)
    const url = 'http://localhost:8080/adminusers/adminlogin'
    const res = await axios.post(url,{email,pass: password})
    if(res.status != 200){
      alert('Login failed')
      return
    }
    const data = res.data
    const {name,token} = data
    localStorage.setItem(
      "user",
      JSON.stringify({token, isAuth: true, name })
      );
      
    setUser({ token, isAuth:true, name });
    toast({
      title: 'login successful',
      // description: "We've created your account for you.",
      position:'top',
      status: 'success',
      duration: 500,
      isClosable: true,
    })

    navigate("/");
    if (res.status == 200) {
      alert("User Successfully Login");
    }

    window.location.reload();
  };


  return (
    <div style={{display: 'flex', justifyContent: 'center', gap:'2rem', marginTop: '3rem', flexWrap: 'wrap'}}>
    <div>
    <img className="login-img" style={{width: '350px', margin: '2rem', opacity: '0.9'}} src={login_banner} alt="" />
    </div>
    <DIV>
      {isAuth ? <h3>Successfully Logged In</h3> : <h2>Admin Login Page</h2>}

      {isAuth &&  <h3> User: {user.name}</h3>}
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to='/adminsignup'>
        <p>
          Don't have any account{" "}
          <span style={{ color: "#24ADF3" }}>create new</span>
        </p>
      </Link>
    </DIV>
    </div>
  );
};
export default AdminLogin;

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
  border: 1px solid #ccc;
  margin-bottom: 3rem;
  align-items: center;
  height: fit-content;
  padding:  2rem;

  input {
    width: 80%;
    padding: 8px;
    color: #333;
    font-size: larger;
    border-radius: 6px;
    border: ${({ err }) =>
      err === "true" ? "2px solid red" : "1px solid #ccc"};
  }
  button {
    width: 120px;
    padding: 7px;
    font-size: medium;
    background-color: #32A9ED;
    color: #fff;
    border-radius: 6px;
    font-weight: 300;
    font-size: 17px;
    border: none;
  }
  h3 {
    color: #00ad00;
    font-weight: 500;
    line-height: 30px;
    font-size: 24px;
  }
`;
