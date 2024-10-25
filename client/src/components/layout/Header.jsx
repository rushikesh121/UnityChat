import React, { Suspense, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications'
const SearchDialog=lazy(()=>import("../specific/Search"))
const Header = () => {

 const [mobile,setIsMobile]=useState(false);
 const [isSearch,setIsSearch]=useState(false);
 const [isNewGroup,setIsNewGroup]=useState(false);
 const [isNotification,setIsNotification]=useState(false);
  
  const handleMobile = () => {
    setIsMobile((prev)=>!prev);
  };
  const openSearch = () => {
    setIsSearch((prev)=>!prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev)=>!prev);
  };
const openNotification=()=>{

}
  const navigateToGroup = () => {
    navigate("/groups")
  };
  const logoutHandler=()=>{
    console.log("logout")
  };
  return (
    <>
    <Box
      sx={{
        flexgrow: 1,
      }}
      height={"4rem"}
    >

      <AppBar position="static" sx={{ bgcolor: "#ea7070" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: 600,
            }}
          >
            Chattu
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onChange={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <Box>
            <IconBtn
              title={"Search"}
              icon={<SearchIcon />}
              onClick={openSearch}
              />
            <IconBtn
              title={"New Group"}
              icon={<AddIcon />}
              onClick={openNewGroup}
            ></IconBtn>
            <IconBtn
              title={"Manage Groups"}
              icon={<GroupIcon />}
              onClick={navigateToGroup}
              />
            <IconBtn
              title={"Notifications"}
              icon={<NotificationsIcon  />}
              onClick={openNotification}
              />
            <IconBtn
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {
      isSearch && (<Suspense fallback={<div>loading...</div>}>
         <SearchDialog/>
      </Suspense>)
    }

    </>
  );
};
 
const IconBtn = ({ title, icon, onClick }) => { 
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick} color="inherit" size="large">
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
