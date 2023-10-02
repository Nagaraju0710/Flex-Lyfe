import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import { Footer } from './Components/footer';


function App() {
  return (
    <div className="App">
    
     <AllRoutes/>
     {/* <Footer/> */}

    </div>
  );
}

export default App;
