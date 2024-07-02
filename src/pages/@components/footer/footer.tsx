import React from "react";
import {Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        textAlign="center"
        alignItems="center"
        bgcolor="#303030"
        sx={{ color: "white", pt: 10, pb: 5 }}
      >
        <Typography variant="h5">Todos os direitos reservados. ©</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
