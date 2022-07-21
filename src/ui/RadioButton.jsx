import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButton({ id, titleLabel, defaultValue, data }) {
  return (
    <FormControl>
      <FormLabel id={id}>{titleLabel}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={id}
        name="row-radio-buttons-group"
        defaultValue={defaultValue}
      >
        {data.map((el, idx) => (
          <FormControlLabel
            key={idx}
            value={el.value}
            control={<Radio />}
            label={el.label}
            onClick={el.onClick}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
