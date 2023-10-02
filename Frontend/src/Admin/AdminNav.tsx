
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { Link, Link as RouterLink } from "react-router-dom"
// import { CgSearch } from 'react-icons/cg';
import logo from "../Imges/logo.png"
import {CgSearch} from 'react-icons/cg'
import {BsHandbag} from 'react-icons/bs'

import { color } from "framer-motion";
import React from "react";
export default function AdminNavbar(){

    const links=[ 
        {
            title:"Dashboard",
            path:"/dashboard"
    },
    ,{
        title:"Contact Details",
        path:"/contactdetails"
    },{
        title:"Edit Story",
        path:"/ourstory"
    }
   
]

    return(
       <div>
      
    <Box  >
       

  <Flex>
    

  <Box>
 <Tabs size="md" variant='enclosed' width="240.5%" backgroundColor="rgba(50, 115, 220, 0.3)">
    
  <TabList  justifyContent="space-around"  >
  <Box style={{ width: "90px", height: "40px",}}><img style={{ width: "120px", height: "70px" }} src={logo} alt="" /></Box>
    <Box display="flex" height="60px">
    {/* <Box><img src={myImage} alt="" width="100%" height="100%"/></Box> */}
    <Tab><RouterLink to="/admindashboard">Dashboard</RouterLink></Tab>
    <Tab><RouterLink to="/admincontactdetails">Contact Details</RouterLink></Tab>
    <Tab><RouterLink to="/adminourstory">Edit Story</RouterLink></Tab>
   
    {/* <Spacer /> */}
    </Box>
    <Button style={{color:'red',marginTop:"10px"}} onClick={()=>{
      window.location.href="http://localhost:3000/login"
    }}>LogOut</Button>
  </TabList>
</Tabs>
</Box>  
</Flex>
  </Box>
            
            </div> 
    )
}