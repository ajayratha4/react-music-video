import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isEmptyArray } from "common/utils/array";
import { useNavigate } from "react-router-dom";
import { sidebar } from "./const";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      {sidebar.map((item) =>
        isEmptyArray(item?.submenu) ? (
          <Accordion
            onClick={() => handleNavigate(item?.path || "/")}
            expanded={false}
            key={item.id}
          >
            <AccordionSummary>
              <Typography>{item.name}</Typography>
            </AccordionSummary>
          </Accordion>
        ) : (
          <Accordion defaultExpanded={false} key={item.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MenuList>
                {item.submenu?.map((subItem) => (
                  <MenuItem
                    onClick={() => handleNavigate(subItem?.path || "/")}
                    key={subItem.id}
                  >
                    <ListItemText>{subItem.name}</ListItemText>
                    <ListItemIcon>
                      <subItem.icon fontSize="small" />
                    </ListItemIcon>
                  </MenuItem>
                ))}
              </MenuList>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </Box>
  );
};

export default Sidebar;
