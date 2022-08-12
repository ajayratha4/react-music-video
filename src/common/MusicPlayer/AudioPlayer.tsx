import React from "react";
import VolumePopover from "./VolumePopover";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import ReplayIcon from "@mui/icons-material/Replay";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import CloseIcon from "@mui/icons-material/Close";

type AudioPlayerProps = {
  handlefullScreen: any;
  handleMusicPlayer: any;
};

const AudioPlayer = ({
  handlefullScreen,
  handleMusicPlayer,
}: AudioPlayerProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      px={1}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={handlefullScreen}
          display="flex"
          sx={{ cursor: "pointer" }}
        >
          <Box>
            <img
              style={{ width: "80px", height: "100%", borderRadius: "50%" }}
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
            <IconButton>
              <Replay10Icon />
            </IconButton>
            <IconButton>
              <FastRewindRounded />
            </IconButton>
            <IconButton>
              <PlayArrowRounded sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton>
              <FastForwardRounded />
            </IconButton>
            <IconButton>
              <Forward10Icon />
            </IconButton>
          </Box>
        </Box>
        <Box width="35%">
          <Slider size="small" defaultValue={70} />
        </Box>
        <Box display="flex" height="100%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VolumePopover />

            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ReplayIcon />
            </IconButton>
            <IconButton>
              <QueueMusicIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={handleMusicPlayer} sx={{ p: 0 }}>
              <CloseIcon sx={{ fontSize: 15 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
