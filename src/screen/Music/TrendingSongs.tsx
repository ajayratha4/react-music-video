import { Box } from "@mui/material";
import MusicCards from "common/MusicCards";
import React from "react";
import { useDispatch } from "react-redux";
import { setAudioPlayer } from "redux/settings";

const TrendingSongs = () => {
  const dispatch = useDispatch();
  const handleAudioPlayer = () => {
    dispatch(setAudioPlayer(true));
  };
  return (
    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Box key={item} onClick={handleAudioPlayer}>
          <MusicCards />
        </Box>
      ))}
    </Box>
  );
};

export default TrendingSongs;
