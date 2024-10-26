import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"1rem"} direcion={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"dast adsffdsf adfd"}/>
      <ProfileCard heading={"Username"} text={"rushikesh"} Icon={<AlternateEmailIcon/>} />
      <ProfileCard heading={"Name"} text={"Rushikesh Raut"} Icon={<FaceIcon/>} />
      <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<CalendarMonthIcon/>} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItem={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color={"white"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;           
