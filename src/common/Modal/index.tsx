import * as React from "react";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const calcHeight = (header: boolean, footer: boolean) => {
  if (header || footer) {
    const headerHeight = header ? 50 : 0;
    const footerHeight = footer ? 50 : 0;
    return `calc(100% - ${headerHeight + footerHeight}px)`;
  } else {
    return "100%";
  }
};

type Props = {
  handleClose: () => void;
  children: React.ReactElement;
  fullScreen?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
};

const Modal = ({
  showHeader = true,
  showFooter = true,
  handleClose,
  children,
  ...rest
}: Props) => {
  return (
    <Dialog
      {...rest}
      open={true}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Paper sx={{ height: 1, overflow: "auto", border: "5px solid yellow" }}>
        {showHeader && (
          <Box
            height="50px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>{"Use Google's location service?"}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        <Box height={calcHeight(showHeader, showFooter)}>{children}</Box>
        {showFooter && (
          <Box
            height="50px"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </Box>
        )}
      </Paper>
    </Dialog>
  );
};

export default Modal;
