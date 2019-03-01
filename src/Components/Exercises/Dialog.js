import React, { useState } from "react";

import { Dialog, Button } from "@material-ui/core";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Add } from "@material-ui/icons";

import Form from "./Form";

const createDialog = ({ onCreate, muscles }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleFormSubmit = exercise => {
    handleToggle();
    onCreate(exercise);
  };

  return (
    <>
      <Button variant="contained" mini onClick={handleToggle}>
        <Add />
      </Button>
      <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form onSubmit={handleFormSubmit} muscles={muscles} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default createDialog;
