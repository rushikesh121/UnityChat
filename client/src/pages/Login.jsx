import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField, Button, IconButton } from "@mui/material";
import { Stack, Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddinInput } from "../components/styles/StyledComponents";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <Container
      component={"main"}
      maxWidth="md  "
      
      sx={{
        height:"100vh",
       
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        background: 'linear-gradient(to right, #C3CBDC, #000000")',
      }}
      >
      <Paper
        elevation={4}
        sx={{
          // border:"2px solid black",
          width:"400px",
          padding: 4,
          borderRadius:"20px",
          backgroundColor:"#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              ></TextField>
              <Button
                sx={{ marginTop: "1rem" }}
                onClick={() => setLogin(true)}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
              <Typography
                sx={{ marginTop: "10px  ", textAlign: "center" }}
                fullWidth
              >
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "2px",
                }}
                fullWidth
                onClick={() => setLogin(false)}
                variant="text"
              >
                SIGN-UP INSTEAD
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "cover" }}
                />
                <IconButton
                component= "label"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "gray",
                    bgcolor: "rgba(0,0,0,0,5)",
                    ":hover": {
                      bgcolor: "rgba(0,5,4,5,12)",
                    },
                    
                  }}
                    
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddinInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              ></TextField>
              <Button
                sx={{ marginTop: "1rem" }}
                onClick={() => setLogin(false)}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
              <Typography
                sx={{ marginTop: "10px  ", textAlign: "center" }}
                fullWidth
              >
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "2px",
                }}
                fullWidth
                onClick={() => setLogin(true)}
                variant="text"
              >
                Login INSTEAD
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
