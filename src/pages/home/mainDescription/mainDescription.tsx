import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import RedeemIcon from "@mui/icons-material/Redeem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { data, informacoesPagamento } from "../articles/homeArticles";

export const MainDescription = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          textAlign="center"
          sx={{ bgcolor: "#303030", color: "white" }}
        >
          <Typography variant="h4" sx={{ pt: 14 }}>
            Connect with life councils and engage with a diverse community
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          gap={3}
          display="flex"
          justifyContent="space-between"
          sx={{ bgcolor: "#303030", color: "white", pt: 10 }}
        >
          {data.map((data, i) => (
            <>
              <Grid
                xs={3}
                sx={{
                  height: 300,
                  border: "solid rgba(255,255,255,0.5)",
                  borderLeft: "1px",
                  borderTop: "1px",
                  borderRadius: 5,
                  m: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box m={2}>
                  <FormatQuoteIcon fontSize="large" />
                </Box>
                <Box m={2}>
                  <Typography variant="h5">{data.message}</Typography>
                </Box>
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
                    <Typography>{data.name}</Typography>
                    <Typography>{data.memberAt}</Typography>
                  </Box>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
        {/* Segunda parte */}
        <Grid
          item
          xs={12}
          textAlign="center"
          sx={{ bgcolor: "#161616", color: "white" }}
        >
          <Typography variant="h4" sx={{ pt: 14 }}>
            Explore membership options
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          gap={3}
          display="flex"
          justifyContent="space-between"
          sx={{ bgcolor: "#161616", color: "white" }}
        >
          {informacoesPagamento.map((info, loop) => (
            <>
              <Grid
                xs={3}
                m={4}
                sx={{
                  bgcolor: "#303030",
                  borderRadius: "15px",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">{info.plano}</Typography>
                  <RedeemIcon fontSize="large" />
                </Box>
                <Typography variant="h4">${info.price}/ month</Typography>
                <Box display="block">
                  {info.attributes.map((atributos, array) => (
                    <>
                      <Box
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        gap={1}
                      >
                        {atributos.hasAttribute == true ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                        <Typography variant="body2">
                          {atributos.message}
                        </Typography>
                      </Box>
                    </>
                  ))}
                </Box>
                <Box>
                  <Button
                    sx={{
                      backgroundColor: "#8D05F5",
                      width: 140,
                      color: "white",
                      borderRadius: "15px",
                      textTransform: "lowercase",
                    }}
                  >
                    Explore {info.explore}
                  </Button>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default MainDescription;
