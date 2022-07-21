import { MenuItem, Select } from "@mui/material";
import React from "react";

function SelectUI({ value, onChange, label, data }) {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label="Age"
      onChange={onChange}
    >
      {data?.map((el) => (
        <MenuItem value={el.value}>{el.name}</MenuItem>
      ))}
    </Select>
  );
}

export default SelectUI;
