import React, { useState } from "react";
import { Box, Fab, TextField } from "@mui/material";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import RadioButton from "../ui/RadioButton";
import AddIcon from "@mui/icons-material/Add";
import { useTracker } from "../contexts/TrackerContext";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useMessage } from "../contexts/MessageContext";
import { addTrackerApi } from "../api/tracker";

function Add() {
  const { setError } = useMessage();
  const { getAllTracker } = useTracker();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    date: new Date(),
    itemName: "",
    amount: 0,
    type: "EXPENSE",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddItem = async () => {
    try {
      const res = await addTrackerApi(input);
      await getAllTracker();
      if (res) {
        setInput({
          date: new Date(),
          itemName: "",
          amount: 0,
          type: "EXPENSE",
        });
      }
      setOpen(false);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const dataAdd = [
    {
      type: "",
      name: "itemName",
      value: input.title,
      label: "Title",
      onChange: (e) => handleChange(e),
    },
    {
      type: "number",
      name: "amount",
      value: input.amount,
      label: "Amount",
      onChange: (e) => handleChange(e),
    },
  ];

  const dataRadio = [
    {
      label: "Expense",
      value: "EXPENSE",
      onClick: (e) => setInput({ ...input, type: e.target.value }),
    },
    {
      label: "Income",
      value: "INCOME",
      onClick: (e) => setInput({ ...input, type: e.target.value }),
    },
  ];

  return (
    <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        handleAction={handleAddItem}
        handleClose={() => setOpen(false)}
        modalTitle={"Add Item"}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <RadioButton
            id="gender"
            titleLabel={"Type"}
            data={dataRadio}
            defaultValue="EXPENSE"
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

          {dataAdd.map((el, idx) => (
            <Input
              key={idx}
              name={el.name}
              variant="outlined"
              icon={el.icon}
              label={el.label}
              type={el.type}
              onChange={el.onChange}
            ></Input>
          ))}
        </Box>
      </Modal>
    </Box>
  );
}

export default Add;
