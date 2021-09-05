import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../musicCard.css";

export default function Switches({ trackAudio, trackName }) {
  
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            size="Medium"
            checked={checked}
            onChange={toggleChecked}
            id={trackName}
            value={trackAudio}
            color="primary"
          />
        }
      />
    </div>
  );
}
