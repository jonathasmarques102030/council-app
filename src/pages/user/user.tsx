import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "./header";

const data = {
  name: "Jonathas",
  description: "Uma pessoa bacana que gosta de dar opiniões",
};

export default function User() {
  return (
    <>
      <Header />
      <Grid container sx={{ bgcolor: "#161616" }}>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            height: '100vh',
            p: 5,
            gap: 3,
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              color: "white",
              border: "1px solid grey",
              borderRadius: "10px",
              p: 2,
            }}
          >
            <AccountCircleIcon fontSize="large" />
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="caption">{data.description}</Typography>
          </Box>
          <Box
            sx={{ border: "1px solid grey", borderRadius: "10px", }}
          >
            <TextField
              variant="standard"
              label="Name"
              type="text"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white", borderColor: "white" } }}
              sx={{
                "& .MuiStandardInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              variant="standard"
              label="Email"
              type="text"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white", borderColor: "white" } }}
              sx={{
                "& .MuiStandardInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white", borderColor: "white" } }}
              sx={{
                "& .MuiStandardInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
