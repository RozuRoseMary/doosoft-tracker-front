import {
  Box,
  Fab,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import RadioButton from "../ui/RadioButton";
import AddIcon from "@mui/icons-material/Add";
import axios from "../config/axios";
import { useTracker } from "../contexts/TrackerContext";
import { DesktopDatePicker } from "@mui/x-date-pickers";

function Add() {
  const [input, setInput] = useState({
    date: new Date(),
    itemName: "",
    amount: 0,
    type: "EXPENSE",
  });
  const { getAllTracker } = useTracker();
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddItem = async () => {
    await axios.post("/tracker", input);
    await getAllTracker();
    setOpen(false);
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
            inputFormat="MM/dd/yyyy"
            onChange={(e) => {
              setInput({ ...input, date: e._d });
            }}
            value={input.date}
            renderInput={(params) => <TextField {...params} />}
          />

          {dataAdd.map((el, idx) => (
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
        </Box>
      </Modal>
    </Box>
  );
}

export default Add;
