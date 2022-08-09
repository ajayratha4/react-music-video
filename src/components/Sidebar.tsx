import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

const Sidebar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box display="flex" height="50%" flexDirection="column" alignItems="center">
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Tab sx={{ margin: "10px" }} label="Item One" />
        <Tab sx={{ margin: "10px" }} label="Item Two" />
        <Tab sx={{ margin: "10px" }} label="Item One" />
        <Tab sx={{ margin: "10px" }} label="Item Two" />
        <Tab sx={{ margin: "10px" }} label="Item One" />
        <Tab sx={{ margin: "10px" }} label="Item Two" />
        <Tab sx={{ margin: "10px" }} label="Item One" />
        <Tab sx={{ margin: "10px" }} label="Item Two" />
        <Tab sx={{ margin: "10px" }} label="Item One" />
        <Tab sx={{ margin: "10px" }} label="Item Two" />
      </Tabs>
    </Box>
  );
};

export default Sidebar;
