import React, { useState, useEffect } from "react";
import StopButton from "./buttonsComponents/stopButton";
import PadsView from "./padsView";
import PlayButton from "./buttonsComponents/playButton";
import NowPlayingCard from "./nowPlayingCard";

export default function HomePage() {
  /* Details of the states in Readme file */
  const [audiosToPlaying, setAudiosToPlaying] = useState([]);
  const [stopPlaying, setStopPlaying] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [first, setFirst] = useState(null);

  /* Details of the useEffect in Readme file */
  useEffect(() => {
    if (audiosToPlaying.length > 0) {
      setFirst(Object.values(audiosToPlaying[0]));
    }
  }, [audiosToPlaying]);

  useEffect(() => {
    if (first !== null) {
      first[0].onended = () => {
        playMusic("stop");
        playMusic("start");
      };
    } else {
      playMusic("stop");
    }
  }, [audiosToPlaying, first]);

  const audiosCheckedTrue = (e) => {
    if (document.getElementById(e.target.id) != null) {
      if (document.getElementById(e.target.id).checked) {
        /*Create an object - key (the name of the file , value -
         Audio file to play in the current location of this file) */
        let obj = {};
        obj[e.target.id] = new Audio(process.env.PUBLIC_URL + e.target.value);
        setAudiosToPlaying((audiosToPlaying) => [...audiosToPlaying, obj]);
        /*Every time that new object creat we put in the stopPlaying state -
         when fucntion stop  run, the function passes on this state (array) */
        setStopPlaying((stopPlaying) => [...stopPlaying, obj]);
      } else {
        /* If the client selected mp3 file and wants to 
        remove it from the loop */
        setAudiosToPlaying(
          audiosToPlaying.filter(
            (item) =>
              new String(Object.keys(item)) != new String(e.target.id).valueOf()
          )
        );
      }
    }
  };

  const playMusic = (flag) => {
    if (flag === "start") {
      /* Update the "Now Playing" to the files name
       that includes in audiosToPlaying state right now*/
      setNowPlaying(audiosToPlaying);
      audiosToPlaying.map((audio) => {
        /* Play all the mp3 files in the audiosToPlaying state*/
        let obj = Object.values(audio);
        obj[0].play();
      });
    }
    if (flag === "stop") {
      /* Update the "Now Playing" to empty array*/
      setNowPlaying([]);
      stopPlaying.map((audio) => {
        let obj = Object.values(audio);
        if (obj[0].play) {
          /* Pause all the songs that playing right now 
          and reset their time to start */
          obj[0].pause();
          obj[0].currentTime = 0;
        }
      });
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "3%", marginRight: "2%", marginLeft: "2%" }}
      >
        <div
          onClick={() => playMusic("start")}
          style={{ marginRight: "2%", marginLeft: "2%" }}
        >
          <PlayButton />
        </div>
        <div
          onClick={() => playMusic("stop")}
          style={{ marginRight: "2%", marginLeft: "2%" }}
        >
          <StopButton />
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "3%", marginRight: "2%", marginLeft: "2%" }}
      >
        <NowPlayingCard audios={nowPlaying} />
      </div>
      <div className="d-flex justify-content-center">
        <div onClick={audiosCheckedTrue}>
          <PadsView />
        </div>
      </div>
    </>
  );
}
