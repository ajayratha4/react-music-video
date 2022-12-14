import React, { MouseEvent, useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { IconButton, Paper, Popper, Slider } from "@mui/material";
import { useSelector } from "react-redux";
import { AudioSlice } from "./audioSlice";

type Props = {
  handleVolume: (arg: number) => void;
};
const VolumePopover = ({ handleVolume }: Props) => {
  const volumeValue = useSelector((state: AudioSlice) => state.audio.volume);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = () => {
    handleVolume(volumeValue ? 0 : 30);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    handleVolume(newValue as number);
  };

  return (
    <IconButton
      sx={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {volumeValue ? <VolumeDownIcon /> : <VolumeOffIcon />}
      <Popper
        sx={{ zIndex: "tooltip" }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement={"top"}
      >
        <Paper
          onClick={(event) => event.stopPropagation()}
          sx={{ display: "flex", flexDirection: "column-reverse" }}
        >
          <Slider
            value={volumeValue}
            onChange={handleChange}
            size={"small"}
            sx={{ height: "100px", my: 1, py: 1 }}
            orientation="vertical"
            valueLabelDisplay="auto"
            defaultValue={30}
          />
        </Paper>
      </Popper>
    </IconButton>
  );
};

export default VolumePopover;
