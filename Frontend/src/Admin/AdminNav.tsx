import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
// import { CgSearch } from 'react-icons/cg';
import logo from "../Imges/logo.png";
import { CgSearch } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

import { color } from "framer-motion";
import React from "react";
export default function AdminNavbar() {
  const links = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    ,
    {
      title: "Contact Details",
      path: "/contactdetails",
    },
    {
      title: "Edit Story",
      path: "/ourstory",
    },
  ];

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <Box>
        <Flex>
          <Box>
            <Tabs width='240.5%' bg='#293440' color='#fff'>
              <TabList justifyContent='space-around'>
                <Box style={{ width: "90px" }}>
                  <img
                    style={{ width: "60px", marginTop: "10px" }}
                    src={logo}
                    alt=''
                  />
                </Box>
                <Box display='flex' height='60px' gap={"3.6rem"} pt='1.1rem'>
                  {/* <Box><img src={myImage} alt="" width="100%" height="100%"/></Box> */}
                  <NavLink
                    style={{ fontWeight: "400", fontSize: "15px" }}
                    to='/admindashboard'
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    style={{ fontWeight: "400", fontSize: "15px" }}
                    to='/admincontact'
                  >
                    Contact Details
                  </NavLink>
                  <NavLink
                    style={{ fontWeight: "400", fontSize: "15px" }}
                    to='/adminstory'
                  >
                    Edit Story
                  </NavLink>
                </Box>
                <Button
                  bg='#beec7f1a'
                  border='1px #cccc solid'
                  _hover={{ bg: "#ffffff1d" }}
                  style={{
                    color: "#A0CE5F",
                    marginTop: "10px",
                    fontWeight: "400",
                  }}
                  onClick={logoutHandler}
                >
                  LogOut
                </Button>
              </TabList>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
