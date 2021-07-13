import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    marginBottom: '12px',
    textAlign: "right",
  },
  text: {
    textAlign: "left",
  },
  meta: {
    fontSize: 10,
    textAlign: "right",
  },
  active: {
    backgroundColor: "aliceblue",
  },
  btn: {
    padding: "3px",
  },
});

function MyNotes({ notes, activeNoteId, setActiveNoteId }) {
  const classes = useStyles();

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Card
            key={note.id}
            className={
              [classes.root, note.id === activeNoteId ? classes.active : ""].join(" ")
            }
            onClick={() => setActiveNoteId(note.id)}
          >
              <CardHeader
                className={classes.text}
                action={
                  note.id === activeNoteId ? (
                    <IconButton
                      aria-label="close"
                      className={classes.btn}
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveNoteId(-1)
                        }}
                    >
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    ""
                  )
                }
                title={note.title}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.text}
                >
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
};

export default MyNotes;
