import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useStore } from "react-redux";

import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./styled";
import { userService } from "utils/userService";
import { requestOptions } from "api/requestOptions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SharedSelect = ({ allUsersData, noteId }) => {
  const [personName, setPersonName] = useState([]);
  const user = useStore().getState().authenticationReducer.user;  
  const classes = useStyles();
  const setSharedNotes = useMutation(userService.setSharedNotes);    
  const getRecipients = useQuery(
    ["recipients", noteId, user.email, personName],
    () =>
      requestOptions.getRecipientsOfNote({
        note_id: noteId,
        user_id: user.email,
      }),
    {
      enabled: !personName.length,
    }
  );
  const handleChange = (event) => {
    event.stopPropagation();
    setPersonName(event.target.value);
    setSharedNotes.mutate({
      recipients: event.target.value,
      note_id: noteId,
      user_id: user.email,
    });
  };
  useEffect(() => {
    setPersonName([]);
  },[noteId]);
  return getRecipients.isSuccess || getRecipients.isIdle ? (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-name-label">Share to</InputLabel>
      <Select
        className={classes.formControl}
        labelId="demo-mutiple-name-label"
        id="demo-mutiple-name"
        multiple
        value={personName.length ? personName : getRecipients.data}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {allUsersData.map((recipient_user) => (
          <MenuItem key={recipient_user.email} value={recipient_user.email}>
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : (
    <p></p>
  );
};

export default SharedSelect;
