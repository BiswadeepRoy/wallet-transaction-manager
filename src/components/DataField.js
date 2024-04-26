import { Typography } from "@mui/material";
import React from "react";

const DataField = ({ keyName, value, maskLength = 12 }) => {
  const maskedValue =
    value.length > maskLength
      ? `${value.substring(0, maskLength / 2)}...${value.substring(
          value.length - maskLength / 2,
          value.length
        )}`
      : value;

  return (
    <Typography variant="subtitle2" gutterBottom className="data-field">
      <div>{keyName}</div>
      <div className={maskedValue !== value && "green-data"}>{maskedValue}</div>
    </Typography>
  );
};

export default DataField;
