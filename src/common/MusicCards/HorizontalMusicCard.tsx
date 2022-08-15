import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";

type Props = {
  handleonClick: () => void;
  songName: string;
  songImage: string;
};

const HorizontalMusicCard = ({ handleonClick, songName, songImage }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box
          p={1}
          onClick={handleonClick}
          display="flex"
          flexDirection="column"
          sx={{ cursor: "pointer" }}
        >
          <Box>
            <img
              style={{ width: "150px", height: "100%", borderRadius: 5 }}
              src={songImage}
              alt={songName}
            />
          </Box>
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              {songName}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HorizontalMusicCard;
