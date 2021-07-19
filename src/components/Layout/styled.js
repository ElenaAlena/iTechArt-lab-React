import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: "#fff",
    padding: "6px 8px",
    fontSize: "0.875rem",
    minWidth: "64px",
    boxSizing: "border-box",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "500",
    lineHeight: "1.75",
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  active:{
      color:'pink'
  }
}));

export default useStyles;
