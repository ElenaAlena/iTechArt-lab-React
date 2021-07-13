import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  note: {
    marginBottom: 12,
    textAlign: "right"
  },
  text:{    
    textAlign: "left"
  },
  meta: {
    fontSize: 10,    
    textAlign: "right"
  },
  active:{
    backgroundColor: 'aliceblue'
  }
});

function MyNotes({ notes, activeNoteId, setActiveNoteId }) {
  const classes = useStyles();

  return (
    <div className="notes-list">
      {notes.map(note => {
        return (
          <Card
            key={note.id}
            className={
              (classes.note,
               note.id === activeNoteId ? classes.active : "")
            }
            onClick={() => setActiveNoteId(note.id)}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                  {note.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                  {note.description && note.description.substr(0, 100) + "..."}
                </Typography>
                <Typography
                  className={classes.meta}
                  color="textSecondary"
                  gutterBottom
                >
                  Date of creation{" "}
                  {new Date(note.dateCreation).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

MyNotes.propTypes = {
  activeNoteId: PropTypes.number,
  notes: PropTypes.arrayOf(PropTypes.object),
  setActiveNoteId: PropTypes.func,
}

export default MyNotes;

