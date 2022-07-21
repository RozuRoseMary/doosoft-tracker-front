import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../ui/Modal";
import axios from "../config/axios";
import { useTracker } from "../contexts/TrackerContext";

function DeleteTracker({ id, type }) {
  const { getAllTracker } = useTracker();

  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    try {
      if (type === "INCOME") {
        await axios.delete("/tracker/deleteIncome/" + id);
      } else {
        await axios.delete("/tracker/deleteExpense/" + id);
      }

      await getAllTracker();
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <IconButton
        edge="start"
        aria-label="delete"
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </IconButton>

      <Modal
        open={open}
        handleAction={handleDelete}
        handleClose={() => setOpen(false)}
        modalTitle={"Delete Item"}
        btnTitle={"Delete"}
      >
        <Typography sx={{ display: "inline" }} component="span" variant="body2">
          Would you like to delete this item?
        </Typography>
      </Modal>
    </>
  );
}

export default DeleteTracker;
