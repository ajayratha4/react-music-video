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

type Props = {
  handleClose: () => void;
  children: React.ReactElement;
  fullScreen?: boolean;
};

const Modal = ({ handleClose, children, ...rest }: Props) => {
  return (
    <Dialog
      {...rest}
      open={true}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Paper sx={{ p: 1, height: 1, overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{"Use Google's location service?"}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>{children}</DialogContent>
        {false && (
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        )}
      </Paper>
    </Dialog>
  );
};

export default Modal;
