import { Box } from "@mui/system";
import React from "react";
import { SongList } from "./audioSlice";

type FullScreenAudioPlayerProps = {
  onPlay: () => void;
  songDetails: SongList;
};

const FullScreenAudioPlayer = ({
  songDetails,
  onPlay,
}: FullScreenAudioPlayerProps) => {
  return (
    <Box
      sx={{
        background:
          " linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%) !important",
        height: "100%",
      }}
      onClick={onPlay}
    >
      {songDetails.name}
    </Box>
  );
};

export default FullScreenAudioPlayer;
