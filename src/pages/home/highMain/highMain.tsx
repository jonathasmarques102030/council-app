import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WhatshotIcon from '@mui/icons-material/Whatshot';


export const HighMain = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          display="block"
          m="auto"
          alignItems="center"
          textAlign={"center"}
          sx={{ bgcolor: "#161616" }}
        >
          <Box sx={{ display: "block" }}>
            <GroupsIcon
              fontSize="large"
              sx={{ fontSize: 300, color: "white" }}
            />
            <Typography variant="h1" color="white">
              Find advice and support
            </Typography>
          </Box>
          <Box sx={{ mt: 10, mb: 10 }}>
            <Button
              sx={{
                backgroundColor: "#8D05F5",
                width: 180,
                height: 40,
                color: "white",
                borderRadius: "15px",
                textTransform: "lowercase",
              }}
            >
              Explore
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="#303030"
        >
          <Box
            alignItems="center"
            textAlign="center"
            display="flex"
            gap={1}
            m={2}
          >
            <EmojiEmotionsIcon fontSize="large" sx={{ color: "white" }} />
            <Box
              display="block"
              alignItems="center"
              textAlign="initial"
              color="white"
            >
              <Typography>Positive mindset</Typography>
              <Typography>Embrace positivity and happiness.</Typography>
            </Box>
          </Box>
          <Box
            alignItems="center"
            textAlign="center"
            display="flex"
            gap={1}
            m={2}
          >
            <NightsStayIcon fontSize="large" sx={{ color: "white" }} />
            <Box
              display="block"
              alignItems="center"
              textAlign="initial"
              color="white"
            >
              <Typography>Quality sleep</Typography>
              <Typography>Experience rejuvenating rest.</Typography>
            </Box>
          </Box>
          <Box
            alignItems="center"
            textAlign="center"
            display="flex"
            gap={1}
            m={2}
          >
            <WhatshotIcon fontSize="large" sx={{ color: "white" }} />
            <Box
              display="block"
              alignItems="center"
              textAlign="initial"
              color="white"
            >
              <Typography>Stress relief</Typography>
              <Typography>Achieve peace of mind.</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HighMain;
