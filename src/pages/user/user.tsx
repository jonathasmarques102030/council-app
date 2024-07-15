import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "./header";

interface FormData {
  id: number;
  name: string;
  email: string;
  password: string;
  image?: string;
  description?: string;
}

interface UserResponse {
  success: boolean;
  user?: FormData;
  message?: string;
}

const initialData: FormData = {
  id: 0,
  name: "",
  email: "",
  password: "",
  description: "",
};

export default function User() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("isAuthenticated") || "{}");
    if (session?.id) {
      fetch(`/api/informations?id=${session.id}`)
        .then((res) => res.json())
        .then((data: UserResponse) => {
          if (data.success && data.user) {
            setFormData(data.user);
          } else {
            console.log("Error:", data.message);
          }
        })
        .catch((error) => {
          console.log("Fetch error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Aqui você pode lidar com o arquivo se necessário
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/informations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            height: "100vh",
            p: 5,
            gap: 3,
            justifyContent: "center",
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
            <Typography variant="h5">{formData.name}</Typography>
            <Typography variant="caption">
              {formData.description || "No description available"}
            </Typography>
          </Box>
          <Grid
            item
            xs={4}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              border: "1px solid grey",
              borderRadius: "10px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              color="secondary"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              color="secondary"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              color="secondary"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
            <Box
              sx={{
                border: "1px solid '#8D05F5'",
                borderRadius: "5px",
                color: "white",
                p: 1,
              }}
            >
              <Input
                type="file"
                id="imagem"
                required
                onChange={handleFileChange}
              />
            </Box>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              color="secondary"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
            <Box
              sx={{
                color: "white",
                p: 1,
              }}
            >
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#8D05F5",
                  width: 140,
                  color: "white",
                  borderRadius: "15px",
                  textTransform: "lowercase",
                }}
              >
                Change
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}