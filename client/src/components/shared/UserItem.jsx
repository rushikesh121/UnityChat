import React,{memo} from 'react'
import {Avatar, IconButton, ListItem, Stack, Typography} from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
const UserItem = ({user,handler,handlerIsLoading}) => {
  const {name,_id,avatar}=user;

  return (
    <ListItem  alignItems={"center"}
    spacing={"1rem"}
    width={"100%"}>  
      <Stack direction={"row"} alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}

      >
        <Avatar/>

        <Typography
        variant='body1'
        sx={{
          flexGrow:1,
          display:"-webkit-box",
          WebkitLineClamp:1,
          WebkitBoxOrient:"vertical",
          overflow:"hidden",
          textOverflow:"ellipsis",
         width:"100%"
        }}
        >{name}</Typography>
        <IconButton  sx={{
          bgcolor:"primary.main",
          color:"white",
          "&:hover":{
            bgcolor:"primary.dark",
          }, 
        }} onClick={()=>handler(_id)} disabled={handlerIsLoading}>
          <AddIcon/>
        </IconButton>
      </Stack>
    </ListItem>
  )
}

export default memo(UserItem)
