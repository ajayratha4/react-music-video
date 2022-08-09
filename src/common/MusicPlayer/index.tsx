import {
  Box,
  Card,
  IconButton,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

const MusicPlayer = () => {
  return (
    <Box width="100%" p={1}>
      <Box width="100%">
        <Slider size="small" defaultValue={70} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" width="%">
          <Box>
            <img
              style={{ width: "100px", height: "100%" }}
              src="https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/d3xzp1kqbg/size_l.jpg"
              alt="Girl in a jacket"
            />
          </Box>
          <Box>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
              >
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" />
            </IconButton>
            <IconButton>
              <PlayArrowRounded sx={{ fontSize: "3rem" }} />
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPlayer;
