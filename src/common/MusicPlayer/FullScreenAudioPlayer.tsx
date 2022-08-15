import { IconButton, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AudioSlice, changeSong, SongList } from "./audioSlice";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import ReplayIcon from "@mui/icons-material/Replay";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import { useDispatch, useSelector } from "react-redux";
import VolumePopover from "./VolumePopover";
import HorizontalMusicCard from "common/MusicCards/HorizontalMusicCard";

type FullScreenAudioPlayerProps = {
  onPlay: () => void;
  isPlaying: boolean;
  currentPlaybackPercentage: number;
  handlePlaybackPosition: (arg: number) => void;
  currentPlayback: { currentTime: number; duration: number };
  handleVolume: (arg: number) => void;
  resetAudioPlayer: () => void;
  songDetails: SongList;
};

const FullScreenAudioPlayer = ({
  songDetails,
  currentPlayback,
  handlePlaybackPosition,
  currentPlaybackPercentage,
  onPlay,

  isPlaying,
  handleVolume,
  resetAudioPlayer,
}: FullScreenAudioPlayerProps) => {
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
    <Box height="100%" display="flex" gap={1}>
      <Box
        width="65%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        flexDirection="column"
      >
        <img
          style={{ width: "55%", height: "65%", borderRadius: "10%" }}
          src={songDetails.songImage}
          alt={songDetails.songName}
        />

        <Box>
          <Typography fontWeight={500}>{songDetails.songName}</Typography>
          <Typography color="text.secondary">
            {songDetails.songArtist}
          </Typography>
        </Box>

        <Box width="60%">
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
          <IconButton>
            <ReplayIcon />
          </IconButton>
          <IconButton>
            <QueueMusicIcon />
          </IconButton>
        </Box>
      </Box>
      <Box width="30%" height="100%" overflow="auto">
        {songsList?.map((item, index) => (
          <Box key={item.id} m={2}>
            <HorizontalMusicCard
              handleonClick={() => handleSongs(index)}
              songArtist={item.songArtist}
              songName={item.songName}
              songImage={item.songImage}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FullScreenAudioPlayer;
