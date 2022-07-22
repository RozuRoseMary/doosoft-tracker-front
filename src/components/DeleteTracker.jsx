import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../ui/Modal";
import { useTracker } from "../contexts/TrackerContext";
import { useMessage } from "../contexts/MessageContext";
import { deleteExpenseApi, deleteIncomeApi } from "../api/tracker";

function DeleteTracker({ id, type }) {
  const { getAllTracker } = useTracker();
  const { setError } = useMessage();

  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      if (type === "INCOME") {
        await deleteIncomeApi(id);
      } else {
        await deleteExpenseApi(id);
      }

      await getAllTracker();
      setOpen(false);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
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
