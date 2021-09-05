import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import StopIcon from "@material-ui/icons/Stop";

export default function StopButton() {
  return (
    <Button
      style={{ width: "150px", height: "60px" }}
      variant="contained"
      color="secondary"
      startIcon={<StopIcon />}
    >
      Stop
    </Button>
  );
}
