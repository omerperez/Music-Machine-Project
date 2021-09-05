import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";

export default function PlayButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{width: "150px", height: "60px"}}
      startIcon={<PlayArrowIcon />}
    >
      Start
    </Button>
  );
}
