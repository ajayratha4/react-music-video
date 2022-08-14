import { Box } from "@mui/system";
import React from "react";

type FullScreenAudioPlayerProps = {
  onPlay: () => void;
};

const FullScreenAudioPlayer = ({ onPlay }: FullScreenAudioPlayerProps) => {
  return (
    <Box
      sx={{
        background:
          " linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%) !important",
        height: "100%",
      }}
      onClick={onPlay}
    >
      FullScreenAudioPlayer
    </Box>
  );
};

export default FullScreenAudioPlayer;
