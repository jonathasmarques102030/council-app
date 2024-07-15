import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
  const [ isAuthenticated, setAuthenticated ] = useState(false)

  useEffect(() => {
    if(typeof window !== "undefined"){
      setAuthenticated(!!localStorage.getItem('isAuthenticated'))
    }
  }, [])

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "#303030",
          top: 0,
          height: "6vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          item
          display="flex"
          bgcolor="#303030"
          alignItems="center"
          color="white"
          gap={1}
          m={2}
        >
          <LanguageIcon
            sx={{
              bgcolor: "#303030",
            }}
          />
          <Typography variant="h5" bgcolor="#303030">
            LifeCouncils
          </Typography>
        </Grid>
        <Grid
          item
          display="flex"
          alignItems="center"
          bgcolor="#303030"
          color="white"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ minWidth: 100, bgcolor: "#303030" }}>
              Search topics
            </Typography>
            <Typography sx={{ minWidth: 100, bgcolor: "#303030" }}>
              View profiles
            </Typography>
            <Typography sx={{ minWidth: 100, bgcolor: "#303030" }}>
              Get advice
            </Typography>
          </Box>
        </Grid>
        {isAuthenticated ? (
          <>
            <Grid item sx={{ color: "white" }}>
              <IconButton href="/user" sx={{ color: 'white' }}>
                <AccountCircleIcon
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              item
              display="flex"
              alignItems="center"
              bgcolor="#303030"
              gap={2}
            >
              <Button
                variant="text"
                href="/signIn"
                sx={{
                  backgroundColor: "white",
                  width: 140,
                  color: "#161616",
                  borderRadius: "15px",
                  textTransform: "lowercase",
                }}
              >
                Sign In
              </Button>
              <Button
                href="/register"
                sx={{
                  backgroundColor: "#8D05F5",
                  width: 140,
                  color: "white",
                  borderRadius: "15px",
                  textTransform: "lowercase",
                }}
              >
                Join now
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Header;
