import { Box, Grid, IconButton, Typography } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <>
      <Grid container sx={{ bgcolor: "#303030" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-around",
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
          <Grid item>
            <Box sx={{ color: "white" }}>
              <IconButton href="/user" sx={{ color: "white" }}>
                <AccountCircleIcon
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
