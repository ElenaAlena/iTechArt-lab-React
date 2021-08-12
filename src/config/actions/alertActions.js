import { ALERTMODE } from "config/constants/alertMode";


const success = (message) => {
  return { type: ALERTMODE.SUCCESS, message };
};

const error = (message) => {
  return { type: ALERTMODE.ERROR, message };
};

const clear = () => {
  return { type: ALERTMODE.CLEAR };
};

export const alertActions = {
  success,
  error,
  clear,
};
