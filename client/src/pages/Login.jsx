import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper"
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <Container component={"main"} maxWidth="xs"
    sx={{
      height:"100vh",
      display:"flex",
      alignItems:"center"
    }}>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%" ,marginTop:"1rem"}}>
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
            <form style={{ width: "100%" ,marginTop:"1rem"}}>
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
