
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { Link, Link as RouterLink } from "react-router-dom"
// import { CgSearch } from 'react-icons/cg';
import {CgSearch} from 'react-icons/cg'
import {BsHandbag} from 'react-icons/bs'

import { color } from "framer-motion";
import React from "react";
export default function Navbar(){

    const links=[ 
        {
            title:"Home",
            path:"/"
    },
    ,{
        title:"Hire a Coach",
        path:"/hireacoach"
    },{
        title:"Our Story",
        path:"/ourstory"
    },{
        title:"Login",
        path:"/login"
    },
    {
        title:"Contact Us",
        path:"/contactus"
    }, 
   
]

    return(
       <div>
      
    <Box  >
       

  <Flex>
    

  <Box>
 <Tabs size='md' variant='enclosed' width="250.5%" >
  <TabList  justifyContent="space-around"  >
    <Box display="flex" >
    {/* <Box><img src={myImage} alt="" width="100%" height="100%"/></Box> */}
    <Tab><RouterLink to="/">Home</RouterLink></Tab>
    <Tab><RouterLink to="/hireacoach">Hire a Coach</RouterLink></Tab>
    <Tab><RouterLink to="/ourstory">Our Story</RouterLink></Tab>
    <Tab><RouterLink to="/login">Login</RouterLink></Tab>
    <Tab><RouterLink to="/contactus">Contact Us</RouterLink></Tab>
    {/* <Spacer /> */}
    </Box>
    <Button style={{color:'red'}} onClick={()=>{
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