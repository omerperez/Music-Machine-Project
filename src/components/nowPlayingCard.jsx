import "bootstrap/dist/css/bootstrap.min.css";
import "./musicCard.css";

export default function NowPlayingCard({ audios }) {
  if (audios.length < 1) {
    return (
      <span style={{ color: "black" }}>
        {" "}
        <h4>No audios</h4>
      </span>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <span style={{ color: "black" }}>Now Playing:</span>
      {audios.map((audio) => {
        return <div> [ {Object.keys(audio)} ]</div>;
      })}
    </div>
  );
}
