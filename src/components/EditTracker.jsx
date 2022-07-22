import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Modal from "../ui/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { useMessage } from "../contexts/MessageContext";
import { Box } from "@mui/system";
import Input from "../ui/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import RadioButton from "../ui/RadioButton";
import { useTracker } from "../contexts/TrackerContext";
import { updateTrackerApi } from "../api/tracker";

function EditTracker({ idx, el }) {
  const { setError } = useMessage();
  const [open, setOpen] = useState(false);
  const { getAllTracker } = useTracker();

  const [input, setInput] = useState({
    date: el.date,
    itemName: el.itemName,
    amount: el.amount,
    type: el.type,
    changeType: el.changeType,
  });

  const handleUpdate = async () => {
    try {
      const res = await updateTrackerApi(+el.id, input);
      setOpen(false);

      if (res) {
        await getAllTracker();
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dataUpdate = [
    {
      type: "",
      name: "itemName",
      value: input.title,
      label: "Title: " + el.itemName,
      onChange: (e) => handleChange(e),
    },
    {
      type: "number",
      name: "amount",
      value: input.amount,
      label: "Amount: " + el.amount,
      onChange: (e) => handleChange(e),
    },
  ];

  const dataRadio = [
    {
      label: "Expense",
      value: "EXPENSE",
      onClick: (e) => setInput({ ...input, changeType: e.target.value }),
    },
    {
      label: "Income",
      value: "INCOME",
      onClick: (e) => setInput({ ...input, changeType: e.target.value }),
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <RadioButton
            id="gender"
            titleLabel={"Type"}
            data={dataRadio}
            defaultValue={el.type}
          />

          <DesktopDatePicker
            disableMaskedInput={true}
            label="Date desktop"
            onChange={(e) => {
              setInput({ ...input, date: e._d });
            }}
            value={input.date}
            renderInput={(params) => <TextField {...params} />}
          />
          {dataUpdate.map((el, idx) => (
            <Input
              key={idx}
              name={el.name}
              variant="outlined"
              icon={el.icon}
              label={el.label}
              type={el.type}
              placeholder={el.placeholder}
              onChange={el.onChange}
            />
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default EditTracker;
