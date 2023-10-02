

import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Hire from "../Pages/Hire"
import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import SignUp from "../Pages/SignUp"
import { Contact } from "../Pages/Contact"
import AdminContact from "../Admin/AdminContact"
import AdminDashboard from "../Admin/AdminDashboard"
import AdminStory from "../Admin/AdminStory"
import AdminLogin from "../Admin/AdminLogin"
import AdminSignUp from "../Admin/AdminSignUp"


export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hireacoach" element={<Hire/>}/>
                <Route path="/ourstory" element={<Story/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/contactus" element={<Contact/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/admincontactdetails" element={<AdminContact/>}/>
                <Route path="/adminourstory" element={<AdminStory/>}/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/adminsignup" element={<AdminSignUp/>}/>
            </Routes>
        </div>
    )
}