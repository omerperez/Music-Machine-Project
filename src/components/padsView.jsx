import React, { useState } from "react";
import { tracks } from "./tracks.json";
import "bootstrap/dist/css/bootstrap.css";
import MusicCard from "./musicCard";

export default function PadsView() {
  const [allTracks, setAllTracks] = useState([]);

  React.useEffect(() => {
    /*Input all the track from the json
     file to array in allTrack state */
    setAllTracks(tracks);
  }, []);

  if (allTracks.length < 1) return "";

  return (
    <div className="d-flex justify-content-center">
      <div className="row ">
        {allTracks.map((track) => {
          return (
            <div class="col-md-4 d-flex">
              <MusicCard
                trackAudio={track.audio}
                trackImage={track.trackImage}
                trackName={track.trackName}
                value={track.audio}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
