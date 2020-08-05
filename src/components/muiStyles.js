import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "#ff004d",
  },
  grid: {
    width: "50%",
    float: "left",
  },
}));

export const registerStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  addFile: {
    width: "20px",
  },
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "#ff004d",
  },
  grid: {
    width: "50%",
    float: "left",
    padding: "2rem",
  },
  title: {
    marginTop: "2rem",
    marginLeft: "8rem;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  typography: {
    fontSize: ".7rem",
  },
  fab: {
    width: "20rem",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    backgroundColor: "#efe3ea",
  },
}));

export const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    flexGrow: 1,
    alignItems: "flex-end",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: ".4rem",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export const homeStyles = makeStyles((theme) => ({
  root: {
    display: "100vh",
  },
  image: {
    height: "35rem",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f5f5f5",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heading: {
    color: "#313131",
    letterSpacing: "8",
    fontFamily: "Open Sans",
    textAlign: "left",
    paddingRight: "20rem",
    paddingTop: "10rem",
  },
  text: {
    color: "#404040",
    fontFamily: "Roboto",
    lineHeight: "2",
  },
  grid: {
    padding: "6rem",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "4rem",
  },
}));

export const adminstyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "#ff004d",
  },
  grid: {
    width: "50%",
    float: "left",
  },
}));

export const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#f5f5f5",
    height: "10rem",
  },
  text: {
    paddingTop: "5rem",
  },
}));
