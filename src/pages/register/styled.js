import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    width: "fit-content",
    maxWidth: "30%",
    padding: "30px",
  },
  textField: {},
  btn: {
    marginRight: "10px",
  },
}));
export default useStyles;
