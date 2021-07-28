import TextField from "@material-ui/core/TextField";

import useStyles from "./styled";

const FilterByTitle = ({onFilterByTitle} ) => {
  const classes = useStyles();
  const handleFilterByText=(event)=>{    
    onFilterByTitle(event.target.value);
  }
  return (
    <TextField
      label="Filter by Note Title"
      id="filterTitles"
      defaultValue=""
      className={classes.textField}      
      margin="dense"
      variant="outlined"
      onChange = {handleFilterByText}
      InputLabelProps={{
            shrink: true,
          }}
    />
  );
};
export default FilterByTitle;