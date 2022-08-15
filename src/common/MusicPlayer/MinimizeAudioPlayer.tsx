import React from "react";
import VolumePopover from "./VolumePopover";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import ReplayIcon from "@mui/icons-material/Replay";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AudioSlice, changeSong, SongList } from "./audioSlice";

type MinimizeAudioPlayerProps = {
  onPlay: () => void;
  handlefullScreen: () => void;
  handleMusicPlayer: () => void;
  isPlaying: boolean;
  currentPlaybackPercentage: number;
  handlePlaybackPosition: (arg: number) => void;
  currentPlayback: { currentTime: number; duration: number };
  handleVolume: (arg: number) => void;
  resetAudioPlayer: () => void;
  songDetails: SongList;
};

const MinimizeAudioPlayer = ({
  songDetails,
  currentPlayback,
  handlePlaybackPosition,
  currentPlaybackPercentage,
  onPlay,
  handlefullScreen,
  handleMusicPlayer,
  isPlaying,
  handleVolume,
  resetAudioPlayer,
}: MinimizeAudioPlayerProps) => {
  const dispatch = useDispatch();
  const songsList = useSelector((state: AudioSlice) => state.audio.songsList);

  const songsIndex = useSelector(
    (state: AudioSlice) => state.audio.currentIndex
  );

  const handlePositionChange = (event: Event, newValue: number | number[]) => {
    handlePlaybackPosition(newValue as number);
  };

  const handleSongs = (index: number) => {
    resetAudioPlayer();
    dispatch(changeSong(index));
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      position="relative"
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
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <Box>
            <img
              style={{ width: "80px", height: "100%", borderRadius: "50%" }}
              src={songDetails.songImage}
              alt={songDetails.songName}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="20vw"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Typography fontWeight={500}>{songDetails.songName}</Typography>
            <Typography color="text.secondary">
              {songDetails.songArtist}
            </Typography>
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
            <IconButton
              disabled={songsIndex === 0}
              onClick={() => handleSongs(songsIndex - 1)}
            >
              <FastRewindRounded />
            </IconButton>
            <IconButton onClick={onPlay}>
              {isPlaying ? (
                <PauseIcon sx={{ fontSize: 50 }} />
              ) : (
                <PlayArrowRounded sx={{ fontSize: 50 }} />
              )}
            </IconButton>
            <IconButton
              disabled={songsList.length === songsIndex + 1}
              onClick={() => handleSongs(songsIndex + 1)}
            >
              <FastForwardRounded />
            </IconButton>
            <IconButton>
              <Forward10Icon />
            </IconButton>
          </Box>
        </Box>
        <Box width="35%">
          <Slider
            value={currentPlaybackPercentage}
            onChange={handlePositionChange}
            size="small"
            defaultValue={70}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ fontSize: 10 }}>
              {currentPlayback.currentTime}
            </Typography>

            <Typography sx={{ fontSize: 10 }}>
              {currentPlayback.duration}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" height="100%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VolumePopover handleVolume={handleVolume} />

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
          <Box position="absolute" top="0" right="5px">
            <IconButton onClick={handleMusicPlayer} sx={{ p: 0 }}>
              <CloseIcon sx={{ fontSize: 15 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MinimizeAudioPlayer;
