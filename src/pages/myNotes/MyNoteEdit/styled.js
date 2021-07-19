import { makeStyles } from '@material-ui/core/styles';

const useStylesNoteEdit = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formElementContainer:{
      width:'100%',
    },
    formElement:{
      width:'100%',
    }
  }));

  export default useStylesNoteEdit