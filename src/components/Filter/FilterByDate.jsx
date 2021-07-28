import TextField from "@material-ui/core/TextField";

import useStyles from "./styled";

const FilterByDate = ({onFilterByDate} ) => {
  const classes = useStyles();
  const handleFilterByDate=(event)=>{    
    onFilterByDate(event.target.value);
  }
  return (
    <TextField
      label="Filter by Date"
      id="filterNotes"
      defaultValue=""
      type="date"
      className={classes.textField}      
      margin="dense"
      variant="outlined"
      onChange = {handleFilterByDate}
      InputLabelProps={{
            shrink: true,
          }}
    />
  );
};
export default FilterByDate;