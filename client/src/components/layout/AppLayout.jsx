import React from "react";
import Header from "./Header";
import Title from "../shared/TItle";
import { Grid } from "@mui/material";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            first
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            second
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              padding: "2rem",
              bgcolor: "gray",
            }}
          >
            third
          </Grid>
        </Grid>
        <WrappedComponent {...props} />
        <div>footer</div>
      </div>
    );
  };
};

export default AppLayout;
