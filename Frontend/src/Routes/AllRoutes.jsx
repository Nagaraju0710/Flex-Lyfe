

import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Hire from "../Pages/Hire"
// import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import SignUp from "../Pages/SignUp"
import { Contact } from "../Pages/Contact"
import AdminDashboard from "../Pages/AdminDashboard"
import AdminContact from "../Pages/AdminContact"
import AdminStory from "../Pages/AdminStory"
import Private from "../Pages/Private"
import Posts from "../Pages/Posts"
import AdminLogin from "../Admin/AdminLogin"
import AdminSignUp from "../Admin/AdminSignUp"
import MyStory from "../Pages/MyStory"
import AdminHome from "../Pages/AdminHome"


export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hireacoach" element={<Hire/>}/>
                <Route path="/ourstory" element={<Posts/>}/>
                <Route path="/mystory" element={<Private><MyStory/></Private>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/contactus" element={<Contact/>}/>
                <Route path="/admincontact" element={<AdminContact/>}/>
                <Route path="/admindashboard" element={<Private><AdminDashboard/></Private>}/>
                <Route path="/adminStory" element={<AdminStory/>}/>
                <Route path="/admin" element={<AdminLogin/>}/>
                <Route path="/adminsignup" element={<AdminSignUp/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </div>
    )
}