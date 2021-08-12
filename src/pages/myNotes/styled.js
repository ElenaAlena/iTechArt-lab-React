import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  alignLeft:{
    textAlign:'left',    
  },
  headerBtn:{
    margin:'0 20px'
  }
}));

export default UseStyles;