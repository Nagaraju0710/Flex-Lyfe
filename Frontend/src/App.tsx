import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Components/footer";
import AdminHome from "./Pages/AdminHome";
import AdminDashboard from "./Pages/AdminDashboard";

interface User {
  name: string | false;
  isAuth: boolean;
  token: string | false;
}

const localUserJSON = localStorage.getItem("user");
const localUser: User = localUserJSON
  ? JSON.parse(localUserJSON)
  : {
      name: false,
      isAuth: false,
      token: false,
    };

function App() {
  const [user, setUser] = useState<User>(localUser);
  const { isAuth, name, token } = user;

  // useEffect to update the user object in local storage when it changes
  useEffect(() => {
    const userJSON: string = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
  }, [user]);

  return (
    <div className='App'>
      {name !== "Admin" && <Navbar />}
      {/* {name == "Admin" && <AdminDashboard />} */}
      <AllRoutes />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
