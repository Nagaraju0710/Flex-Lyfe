import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Hire from "../Pages/Hire"
import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import { Contact } from "../Pages/Contact"
import SignUp from "../Pages/SignUp"


export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hireacoach" element={<Hire/>}/>
                <Route path="/ourstory" element={<Story/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/contactus" element={<Contact/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </div>
    )
}