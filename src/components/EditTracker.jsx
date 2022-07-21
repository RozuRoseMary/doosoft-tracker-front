import { IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import Modal from "../ui/Modal";
import EditIcon from "@mui/icons-material/Edit";

function EditTracker({ idx, el }) {
  const [open, setOpen] = useState(false);

  const handleUpdate = () => {
    setOpen(false);
  };

  const dataUpdate = [
    {
      type: "",
      name: "date",
      //   value: input.date,
      label: "Date",
      //   onChange: (e) => handleChange(e),
    },
    {
      type: "",
      name: "itemName",
      //   value: input.title,
      label: "Title",
      //   onChange: (e) => handleChange(e),
    },
    {
      type: "number",
      name: "amount",
      //   value: input.amount,
      label: "Amount",
      //   onChange: (e) => handleChange(e),
    },
  ];

  return (
    <>
      <IconButton edge="start" aria-label="edit" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        handleAction={handleUpdate}
        handleClose={() => setOpen(false)}
        modalTitle={"Update Item"}
      >
        {dataUpdate.map((el, idx) => (
          <Input
            key={idx}
            defaultValue={el.defaultValue}
            name={el.name}
            variant="outlined"
            icon={el.icon}
            label={el.label}
            type={el.type}
            onChange={el.onChange}
          ></Input>
        ))}
      </Modal>
    </>
  );
}

export default EditTracker;
