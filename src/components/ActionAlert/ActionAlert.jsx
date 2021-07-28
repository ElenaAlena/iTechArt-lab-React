import Alert from "@material-ui/lab/Alert";

const ActionAlert = ({alert}) =>
  alert ? <Alert severity={alert.type || "info"}>{alert.text}</Alert> : null;
export default ActionAlert;
