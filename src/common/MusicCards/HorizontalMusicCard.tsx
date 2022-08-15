import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

type Props = {
  handleonClick: (arg: string) => void;
  songName: string;
  songImage: string;
  songArtist: string;
};

const HorizontalMusicCard = ({
  handleonClick,
  songArtist,
  songName,
  songImage,
}: Props) => {
  return (
    <Paper elevation={3}>
      <Box p={1} display="flex" gap={1} sx={{ cursor: "pointer" }}>
        <Box>
          <img
            style={{ width: "80px", height: "100%", borderRadius: "50%" }}
            src={songImage}
            alt={songName}
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
          <Typography fontWeight={500}>{songName}</Typography>
          <Typography color="text.secondary">{songArtist}</Typography>
        </Box>
        <IconButton onClick={() => handleonClick(songName)}>
          <PlayArrowRounded sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default HorizontalMusicCard;
