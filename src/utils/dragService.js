
import PropTypes from "prop-types";

const DragService={
    dragStartHandler:(note, setcurrentNote)=>{
        setcurrentNote(note);
      },
    dragLeaveHandler:(e)=>{
      },
    dragOverHandler:(e)=>{
        e.preventDefault();
      },
    dropHandler:(e,note, reOrder)=>{
        e.preventDefault();
        reOrder(note);   
      }

}

DragService.propTypes = {
    e: PropTypes.any,
    card: PropTypes.array,
    reOrder: PropTypes.func,
  };

  export default DragService;

