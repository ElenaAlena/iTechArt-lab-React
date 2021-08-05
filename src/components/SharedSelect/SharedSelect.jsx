import { useState, useEffect } from "react";
import { useMutation } from "react-query";

import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./styled";
import { userService } from "utils/userService";
import { selectors } from "selectors/selectors";
import { useRecipients } from "api/requests";
import { joinByComma } from "utils/utils";

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
  const user = selectors.useCurrentUser();
  const classes = useStyles();
  const setSharedNotes = useMutation(userService.setSharedNotes);
  const getRecipients = useRecipients({
    noteId: noteId,
    email: user.email,
    personName: personName,
  });
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
  }, [noteId]);
  
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
        renderValue={joinByComma}
        MenuProps={MenuProps}
      >
        {allUsersData.map((recipient_user) => (
          <MenuItem key={recipient_user.email} value={recipient_user.email}>
            <ListItemText
              primary={`${recipient_user.firstName} ${recipient_user.lastName}`}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : (
    <p></p>
  );
};

export default SharedSelect;
