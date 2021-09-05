import "bootstrap/dist/css/bootstrap.min.css";
import "./musicCard.css";
import SwitchesButton from "./buttonsComponents/switchesButton";

export default function MusicCard({ trackAudio, trackImage, trackName }) {
  return (
    <>
      <div class="padContainer">
        <div class="padCard card border" style={{ height: "100%" }}>
          <img
            src={trackImage}
            class="card-img-top padImage"
            style={{ height: "210px" }}
          />
          <div
            class="card-body"
            style={{height: "20%"}}
          >
            <center>
              <div style={{ color: "black" }}>
                <h5 class="card-title">{trackName}</h5>
              </div>
              <div>
                <SwitchesButton type="checkbox" trackAudio={trackAudio} trackName={trackName} />
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
