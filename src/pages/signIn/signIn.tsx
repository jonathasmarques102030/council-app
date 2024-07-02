import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState } from "react";

interface SigInResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    email: string;
    name: string;
    password: string;
  };
  idSession: string;
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: SigInResponse = await res.json();
    if (data.success) {
      localStorage.setItem(
        "isAuthenticated",
        JSON.stringify({
          id: data.user?.id,
          name: data.user?.name,
          idSession: data.idSession,
        })
      );
      window.location.href = "/";
    } else {
      console.log("Login failed" + data.message);
    }
  };

  return (
    <>
      <Grid xs={12} sx={{ bgcolor: "#161616", position: "fixed" }}>
        <Button href="/" variant="text">
          <KeyboardReturnIcon fontSize="large" sx={{ color: "white" }} />
        </Button>
      </Grid>
      <Grid
        container
        sx={{
          bgcolor: "#161616",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} m="auto">
          <Box
            sx={{
              width: 500,
              bgcolor: "#303030",
              borderRadius: 10,
              margin: "auto",
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h5" color="white" gutterBottom>
              SigIn
            </Typography>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
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
            <Button
              onClick={handleSubmit}
              fullWidth
              sx={{
                backgroundColor: "#8D05F5",

                color: "white",
                borderRadius: "15px",
                textTransform: "lowercase",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
