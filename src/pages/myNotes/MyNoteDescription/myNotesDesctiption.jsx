import PropTypes from "prop-types";

const MyNoteDesctiption = ({ activeNote }) =>
  activeNote ? <p>{activeNote.description}</p> : <div>No Active Note</div>;

MyNoteDesctiption.propTypes = {
  activeNote: PropTypes.object,
};
export default MyNoteDesctiption;
