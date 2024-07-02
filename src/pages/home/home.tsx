import React from "react";
import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";

import Header from "./header";
import HighMain from "./highMain";
import MainDescription from "./mainDescription";
import Footer from "../@components/footer";

export const Inicio = () => {
  return (
    <>
      <Header />
      <HighMain />
      <MainDescription />
      <Footer />
    </>
  );
};

export default Inicio;
