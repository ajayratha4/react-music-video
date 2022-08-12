import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";

const MusicCards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box
          p={1}
          // onClick={handlefullScreen}
          display="flex"
          flexDirection="column"
          sx={{ cursor: "pointer" }}
        >
          <Box>
            <img
              style={{ width: "150px", height: "100%", borderRadius: 5 }}
              src="https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/d3xzp1kqbg/size_l.jpg"
              alt="Girl in a jacket"
            />
          </Box>
          <Box>
            <Box display="flex" sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
              >
                Jun Pulse
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
              >
                Jun Pulse
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default MusicCards;
