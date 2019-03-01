import React, { useState } from "react";

import { Dialog, Button } from "@material-ui/core";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Add } from "@material-ui/icons";

const createDialog = props => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="fab" mini onClick={handleToggle}>
        <Add />
      </Button>
      <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="raised">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default createDialog;
