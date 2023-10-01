

import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Hire from "../Pages/Hire"
import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import SignUp from "../Pages/SignUp"
import { Contact } from "../Pages/Contact"


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
            </Routes>
        </div>
    )
}