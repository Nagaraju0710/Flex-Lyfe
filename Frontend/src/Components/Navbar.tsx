
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { Link, Link as RouterLink } from "react-router-dom"
// import { CgSearch } from 'react-icons/cg';
import logo from "../Imges/logo.png"
import { CgSearch } from 'react-icons/cg'
import { BsHandbag } from 'react-icons/bs'

import { color } from "framer-motion";
import React from "react";
export default function Navbar() {

  const links = [
    {
      title: "Home",
      path: "/"
    },
    , {
      title: "Hire a Coach",
      path: "/hireacoach"
    }, {
      title: "Our Story",
      path: "/ourstory"
    }, {
      title: "Login",
      path: "/login"
    },
    {
      title: "Contact Us",
      path: "/contactus"
    },

  ]

  return (
    <div >
      <Box >
        <Flex >
          <Box>
            <Tabs size='md' variant='enclosed' width="171.5%">
              <TabList justifyContent="space-around"   >
                <a href="http://localhost:3000/"><Box style={{ width: "90px", height: "40px",}}><img style={{ width: "120px", height: "70px" }} src={logo} alt="" /></Box></a>
                <Box display="flex" height="60px">
                  <Tab><RouterLink to="/">Home</RouterLink></Tab>
                  <Tab><RouterLink to="/hireacoach">Hire a Coach</RouterLink></Tab>
                  <Tab><RouterLink to="/ourstory">Our Story</RouterLink></Tab>
                  <Tab><RouterLink to="/login">Login</RouterLink></Tab>
                  <Tab><RouterLink to="/contactus">Contact Us</RouterLink></Tab>
                  {/* <Spacer /> */}
                </Box>
                <Link to="/login"><Button style={{ color: 'red',marginTop:"10px" }} onClick={() => {
                }}>LogOut</Button></Link>
                <Link to="/adminlogin"><Button style={{ color: 'blue',marginTop:"10px"}} onClick={() => {
                }}>Admin</Button></Link>
              </TabList>
            </Tabs>
          </Box>
        </Flex>
      </Box>

    </div>
  )
}