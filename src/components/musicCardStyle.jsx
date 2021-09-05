import { makeStyles } from "@material-ui/core/styles";

export const MusicCardStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 400,
    backgroundColor: "black",
    boxShadow: "4% 4% 4% gray",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
